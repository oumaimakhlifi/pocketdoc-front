import { Component } from '@angular/core';
import { FileServiceService } from '../../service/file-service.service';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/auth/service/jwt.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})

export class UploadFileComponent {
  selectedFile: File | null = null;
  uploadProgress: number | null = null;

  constructor(
    private fileUploadService: FileServiceService,
    private router: Router
  ) {}

  onFileSelected(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList && fileList.length > 0) {
      this.selectedFile = fileList[0];
    }
  }

  uploadFile(): void {
    const userIdString = localStorage.getItem('id');
    if (userIdString) {
      const userId = parseInt(userIdString, 10);
      if (!isNaN(userId)) {
        if (this.selectedFile) {
          this.fileUploadService.uploadFile(this.selectedFile, userId)
            .subscribe(
              (progress: number) => {
                this.uploadProgress = progress;
                if (progress === 100) {
                  console.log("File upload completed");
                  this.selectedFile = null;
                }
              },
              error => {
                console.error('Error uploading file:', error);
                // Gérer les erreurs de téléversement ici
              }
            );
        }
      } else {
        console.error('Invalid user ID:', userIdString);
      }
    } else {
      console.error('User ID not found in localStorage');
    }
  }
  
}