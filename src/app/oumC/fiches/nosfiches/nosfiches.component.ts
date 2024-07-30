import { Component, OnInit } from '@angular/core';
import { FicheService } from '../../service/fiche.service';
import { Fiche } from '../../entities/Fiche';
import { OurUsers } from '../../entities/OurUsers';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtService } from 'src/app/auth/service/jwt.service';

@Component({
  selector: 'app-nosfiches',
  templateUrl: './nosfiches.component.html',
  styleUrls: ['./nosfiches.component.css']
})
export class NosfichesComponent implements OnInit {
  fiches: Fiche[] = [];
  userId: number = 0;
  newFiche: Fiche = new Fiche();
  usersWithoutFiche: OurUsers[] = [];
  selectedUserId: number = 0;
  selectedUserIdFromTable: number = 0;
  ficheForm: FormGroup;
  idFiche: number = 0;
username!:string;

  
startIndex: number = 0;
  endIndex: number = 10; // Exemple: 10 éléments par page
  pageSize: number = 10;


  

  
  constructor(private ficheService: FicheService, private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private jwtService:JwtService) {
    this.ficheForm = this.fb.group({
      historiq_fam: [''],
      eval_psy: [''],
      notes_de_suivi: ['']
    });
  }

  ngOnInit(): void {
    const userIdString = localStorage.getItem('id');
    if (userIdString) {
      const userId = parseInt(userIdString, 10);
      if (!isNaN(userId)) {
        this.userId = userId;
        this.loadFiches();
        this.loadUsersWithoutFiche();
        this.createForm();
        
      } else {
        console.error('Error: Invalid user ID in localStorage:', userIdString);
      }
    } else {
      console.error('Error: No user ID found in localStorage');
    }
  }

  createForm(): void {
    this.ficheForm = this.fb.group({
      historiq_fam: [''],
      eval_psy: [''],
      notes_de_suivi: ['']
    });
  }

  loadUsersWithoutFiche(): void {
    this.ficheService.findUsersWithoutFiche().subscribe(
      (users: OurUsers[]) => {
        this.usersWithoutFiche = users;
      },
      (error: any) => {
        console.error('Error loading users without fiche:', error);
      }
    );
  }

  loadFiches(): void {
    this.ficheService.retrieveFiche(this.userId).subscribe(
      (response: any) => {
        if ('fiches' in response) {
          const fichesData = response['fiches'];
          if (Array.isArray(fichesData)) {
            this.fiches = fichesData as Fiche[];
          }
        }
      },
      (error: any) => {
        console.error('Error loading fiches:', error);
      }
    );
  }

  nextPage(): void {
    this.startIndex += this.pageSize;
    this.endIndex += this.pageSize;
    this.loadFiches();
  }

  previousPage(): void {
    this.startIndex -= this.pageSize;
    this.endIndex -= this.pageSize;
    this.loadFiches();
  }

  supprimerFiche(idFiche: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette fiche ?')) {
      this.ficheService.removeFiche(idFiche).subscribe(() => {
        this.loadFiches();
      });
    }
  }

  openModal() {
    const modalDiv = document.getElementById('myModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'block';
    }
  }

  closeModal() {
    const modalDiv = document.getElementById('myModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }

  addFiche(): void {
    this.newFiche.etu = parseInt(this.selectedUserId.toString(), 10);
    this.ficheService.addFiche1(this.newFiche, this.selectedUserId, this.userId).subscribe(
      (response: Fiche) => {
        this.loadFiches();
        this.newFiche = new Fiche();
        
        this.closeModal();
      },
      (error: any) => {
        console.error('Error adding fiche:', error);
      }
    );
  }

  ouvrirModalAjoutFiche(idFiche: number): void {
    this.ficheService.getEtudiantIdByFicheId(idFiche).subscribe(
      (etuId: number) => {
        if (typeof etuId === 'number') {
          this.handleEtudiantId(etuId);
        } else {
          console.error('L\'ID de l\'utilisateur récupéré n\'est pas un nombre valide:', etuId);
        }
      },
      (error: any) => {
        console.error('Erreur lors de la récupération de l\'ID de l\'utilisateur:', error);
      }
    );
  }

  handleEtudiantId(etuId: number): void {
    this.selectedUserId = etuId;
    this.ficheService.addFiche1(this.newFiche, this.selectedUserId, this.userId);
    const modalDiv = document.getElementById('modalAjoutFicheUtilisateur');
    if (modalDiv != null) {
      modalDiv.style.display = 'block';
    }
  }

  fermerModalAjoutFicheUtilisateur(): void {
    const modalDiv = document.getElementById('modalAjoutFicheUtilisateur');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }

  ouvrirModalUpdateFiche(ficheId: number): void {
    this.idFiche = ficheId;
    this.ficheService.getFicheById(ficheId).subscribe(
      (fiche: Fiche) => {
        this.ficheForm.patchValue({
          historiq_fam: fiche.historiq_fam,
          eval_psy: fiche.eval_psy,
          notes_de_suivi: fiche.notes_de_suivi
        });
        const modalDiv = document.getElementById('modalUpdateFiche');
        if (modalDiv != null) {
          modalDiv.style.display = 'block';
        }
      },
      (error: any) => {
        console.error('Error loading fiche details for update:', error);
      }
    );
  }
  

  updateFiche(): void {
    if (this.ficheForm.valid) {
      const updatedFiche = { ...this.ficheForm.value, idFiche: this.idFiche };
      this.ficheService.modifyFiche(updatedFiche, this.idFiche).subscribe(
        () => {
          console.log('Fiche updated successfully');
          alert('Fiche mise à jour avec succès !');
          this.fermerModalUpdateFiche();
        },
        (error: any) => {
          console.error('Error updating fiche:', error);
          alert('Une erreur est survenue lors de la mise à jour de la fiche.');
        }
      );
    }
  }

  fermerModalUpdateFiche(): void {
    const modalDiv = document.getElementById('modalUpdateFiche');
    if (modalDiv != null) {
      modalDiv.style.display = 'none';
    }
  }
}
