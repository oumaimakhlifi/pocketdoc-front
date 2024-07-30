import { Component, OnInit } from '@angular/core';
import { SymptomService } from '../../service/symptom.service';
import { Symptom } from '../../entities/Symptom';

@Component({
  selector: 'app-symp-doc',
  templateUrl: './symp-doc.component.html',
  styleUrls: ['./symp-doc.component.css']
})
export class SympDocComponent implements OnInit {
  symptomData!: any[][];


  userId: number = 0;

  constructor(private symptomService: SymptomService) {}

  ngOnInit(): void {
    const userIdString = localStorage.getItem('id');
    if (userIdString) {
      const userId = parseInt(userIdString, 10);
      if (!isNaN(userId)) {
        this.userId = userId;
        this.loadSymptomsByUserId(this.userId);
        
      } else {
        console.error('Error: Invalid user ID in localStorage:', userIdString);
      }
    } else {
      console.error('Error: No user ID found in localStorage');
    }
  }

  loadSymptomsByUserId(userId: number): void {
    this.symptomService.findSymptomByUserId(userId).subscribe(
      (data: any[]) => {
        this.symptomData = data.map(item => [
          item[0], // Première partie de l'élément : tableau de symptômes
          item[1]  // Deuxième partie de l'élément : nom d'utilisateur
        ]);
      }
    );
  }
  
  
  
}