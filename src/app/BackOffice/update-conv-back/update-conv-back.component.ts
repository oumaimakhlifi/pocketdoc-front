import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Convention } from 'src/app/oumC/entities/Convention';
import { ConventionService } from 'src/app/oumC/service/convention.service';

@Component({
  selector: 'app-update-conv-back',
  templateUrl: './update-conv-back.component.html',
  styleUrls: ['./update-conv-back.component.css']
})
export class UpdateConvBackComponent //implements OnInit {
  {
 /* conventionId!: number;
  conventionForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private conventionService: ConventionService, 
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.conventionId = +params['id'];
      this.initializeForm();
      this.loadConventionData();
    });
  }

  initializeForm(): void {
    this.conventionForm = this.fb.group({
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      description: ['', Validators.required],
      reductionFraisConsultation: ['', [Validators.required, this.percentageValidator]],
      servicesInclus: this.fb.array([]),
      conditionsResiliation: this.fb.array([]),
      cin: ['', Validators.required] // Champ CIN avec le validateur Validators.required
  });
  }

  loadConventionData(): void {
    this.conventionService.getConventionById(this.conventionId).subscribe(
      (convention: Convention) => {
        this.conventionForm.patchValue({
          dateDebut: convention.dateDebut,
          dateFin: convention.dateFin,
          description: convention.description,
          reductionFraisConsultation: convention.reductionFraisConsultation,
          cin: convention.cin // Attribuer la valeur du champ CIN du modèle Convention
        });
  
        this.loadServicesInclus(convention.servicesInclus);
        this.loadConditionsResiliation(convention.conditionsResiliation);
      },
      (error) => {
        console.error('Erreur lors du chargement de la convention : ', error);
      }
    );
  }
  

  loadServicesInclus(servicesInclus: string): void {
    const servicesInclusPhrases = servicesInclus.split('******');
    const servicesInclusFormArray = this.conventionForm.get('servicesInclus') as FormArray;
    servicesInclusFormArray.clear(); // Clear existing controls
    servicesInclusPhrases.forEach(phrase => {
      servicesInclusFormArray.push(this.fb.control(phrase, Validators.required));
    });
  }

  loadConditionsResiliation(conditionsResiliation: string): void {
    const conditionsResiliationPhrases = conditionsResiliation.split('******');
    const conditionsResiliationFormArray = this.conventionForm.get('conditionsResiliation') as FormArray;
    conditionsResiliationFormArray.clear(); // Clear existing controls
    conditionsResiliationPhrases.forEach(phrase => {
      conditionsResiliationFormArray.push(this.fb.control(phrase, Validators.required));
    });
  }

  updateConvention(): void {
    if (this.conventionForm.valid) {
      const updatedConventionData = this.conventionForm.value;
      updatedConventionData.servicesInclus = this.getServicesInclusString();
      updatedConventionData.conditionsResiliation = this.getConditionsResiliationString();

      this.conventionService.updateConvention(this.conventionId, updatedConventionData).subscribe(
        (response) => {
          console.log('Convention mise à jour avec succès !');
          alert('Convention mise à jour avec succès !');
          this.router.navigate(['/conventions']);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de la convention : ', error);
          alert('Une erreur est survenue lors de la mise à jour de la convention.');
        }
      );
    } else {
      console.error('Formulaire invalide ! Veuillez remplir tous les champs.');
      alert('Veuillez remplir tous les champs du formulaire.');
    }
  }

  getServicesInclusString(): string {
    const servicesInclusFormArray = this.conventionForm.get('servicesInclus') as FormArray;
    const phrases = servicesInclusFormArray.controls.map(control => control.value);
    return phrases.join('******');
  }

  getConditionsResiliationString(): string {
    const conditionsResiliationFormArray = this.conventionForm.get('conditionsResiliation') as FormArray;
    const phrases = conditionsResiliationFormArray.controls.map(control => control.value);
    return phrases.join('******');
  }

  percentageValidator(control: any): { [key: string]: any } | null {
    const value = control.value;
    if (isNaN(value)) {
      return { 'invalidPercentage': true };
    }
    const floatValue = parseFloat(value);
    if (floatValue < 0 || floatValue > 1) {
      return { 'invalidPercentageRange': true };
    }
    return null;
  }

  get servicesInclus(): FormArray {
    return this.conventionForm.get('servicesInclus') as FormArray;
  }

  get conditionsResiliation(): FormArray {
    return this.conventionForm.get('conditionsResiliation') as FormArray;
  }

  addServiceInclus(): void {
    this.servicesInclus.push(this.fb.control('', Validators.required));
  }

  removeServiceInclus(index: number): void {
    this.servicesInclus.removeAt(index);
  }

  addConditionResiliation(): void {
    this.conditionsResiliation.push(this.fb.control('', Validators.required));
  }

  removeConditionResiliation(index: number): void {
    this.conditionsResiliation.removeAt(index);
  }
  */
  
}
