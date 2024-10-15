import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);
  public translate = inject(TranslateService);
  isMessageOut: boolean = false;
  @Input() isDesktop!: boolean;
  imageSrc = './../../../assets/img/checkbox_default.png';
  privacyPolicy = false;
  errorTxt = false;
  formSubmitted = false;
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  markFormFieldAsTouched(form: NgForm) {
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched();
    });
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted && this.privacyPolicy == true) {
      this.phpRequest(ngForm);
      this.responseMessage();
      console.log(this.contactData);
    } else if (this.privacyPolicy == false) {
      this.imageSrc = './../../../assets/img/checked_box_error.png';
      this.errorTxt = true;
      this.markFormFieldAsTouched(ngForm);
    } else if (this.privacyPolicy && ngForm.invalid) {
      this.markFormFieldAsTouched(ngForm);
    }
  }

  mailTest = true;

  post = {
    endPoint: '#',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  phpRequest(ngForm: NgForm) {
    this.http
      .post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  }

  validateName(input: any) {
    input.value = input.value.replace(/[^a-zA-Z!? ]/g, '');
  }

  policyTrue() {
    this.privacyPolicy = true;
    if (
      (this.privacyPolicy &&
        this.imageSrc == './../../../assets/img/checked_box_error.png') ||
      this.imageSrc == './../../../assets/img/checkbox_default.png'
    ) {
      this.imageSrc = './../../../assets/img/checked_box.png';
      this.errorTxt = false;
    } else if (
      this.privacyPolicy &&
      this.imageSrc == './../../../assets/img/checked_box.png'
    ) {
      this.imageSrc = './../../../assets/img/checkbox_default.png';
      this.privacyPolicy = false;
    } else {
      this.imageSrc = './../../../assets/img/checked_box_error.png';
    }
  }
  responseMessage() {
    this.isMessageOut = true;
    setTimeout(() => {
      this.isMessageOut = false;
    }, 4000);
  }
}
