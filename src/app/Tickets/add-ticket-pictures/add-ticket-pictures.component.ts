import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TicketDoc } from 'src/app/_Models/TicketDoc';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-add-ticket-pictures',
  templateUrl: './add-ticket-pictures.component.html',
  styleUrls: ['./add-ticket-pictures.component.scss']
})
export class AddTicketPicturesComponent implements OnInit {
  baseUrl = environment.apiUrl;
  uploader: FileUploader;
  @Input() tktdocuments: TicketDoc[];
  @Input() id: number;
  hasBaseDropZoneOver = false;
  imageIndexOne=0;
  modalRef: BsModalRef;
  images=[];
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    this.initializeUploader();

  }
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
  openModal(template: TemplateRef<any>) {

//  this.imageIndexOne= e-1;
this.tktdocuments.forEach((element) => {
this.images.push(element.url);

});
//alert('ERROR!! :-)\n\n' + JSON.stringify(this.images, null, 4));
    this.modalRef = this.modalService.show(template);
  }



  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'ticket/' + this.id + '/documets',
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
        const res: TicketDoc = JSON.parse(response);
        const photo = {
          id: res.id,
          url: res.url,
          dateAdded: res.dateAdded,
          description: res.description,
          isMain: res.isMain,
          isApproved: res.isApproved
        };
        this.tktdocuments.push(photo);
         if (photo.isMain) {
        //   this.authService.changeMemberPhoto(photo.url);
        //   this.authService.currentUser.photoUrl = photo.url;
        //   localStorage.setItem('user', JSON.stringify(this.authService.currentUser));
         }
      }
    };
  }

}
