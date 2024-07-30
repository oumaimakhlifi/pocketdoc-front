import { Component } from '@angular/core';
import { JwtService } from 'src/app/auth/service/jwt.service';

@Component({
  selector: 'app-header-front',
  templateUrl: './header-front.component.html',
  styleUrls: ['./header-front.component.css']
})
export class HeaderFrontComponent {
  userRole: string = ""; // Déclarez la propriété userRole

  constructor(private jwtService: JwtService) { }

  ngOnInit(): void {
    const userIdString = localStorage.getItem('id');

    if (userIdString) {
      const id = parseInt(userIdString, 10);

      if (!isNaN(id)) {
        console.log('User ID:',id);

        // Appeler la méthode pour récupérer le rôle de l'utilisateur
        this.jwtService.getUserById(id).subscribe(
          (response) => {
            // Récupérer le rôle de l'utilisateur depuis la réponse
            this.userRole = response.role;
            console.log('Role of user:', this.userRole);
          },
          (error) => {
            console.error('Error fetching user role:', error);
          }
        );
      } else {
        console.error('Invalid user ID:', userIdString);
      }
    } else {
      console.error('User ID not found in localStorage');
    }
  }}