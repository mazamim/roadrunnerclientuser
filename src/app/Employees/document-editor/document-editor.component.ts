import { Component, OnInit, Input } from '@angular/core';

import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { EmployeeDoc } from 'src/app/_Models/EmployeeDoc';


@Component({
  selector: 'app-document-editor',
  templateUrl: './document-editor.component.html',
  styleUrls: ['./document-editor.component.scss']
})
export class DocumentEditorComponent implements OnInit {
  baseUrl = environment.apiUrl;
  uploader: FileUploader;
  @Input() empdocuments: EmployeeDoc[];
  @Input() id: number;
  hasBaseDropZoneOver = false;
  constructor() { }

  ngOnInit(): void {

    this.initializeUploader();
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'employees/' + this.id + '/documets',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });

    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false; };

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: EmployeeDoc = JSON.parse(response);
        const photo = {
          id: res.id,
          url: res.url,
          dateAdded: res.dateAdded,
          description: res.description,
          isMain: res.isMain,
          isApproved: res.isApproved
        };
        this.empdocuments.push(photo);
         if (photo.isMain) {
        //   this.authService.changeMemberPhoto(photo.url);
        //   this.authService.currentUser.photoUrl = photo.url;
        //   localStorage.setItem('user', JSON.stringify(this.authService.currentUser));
         }
      }
    };
  }






}

