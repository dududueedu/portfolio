import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from 'src/app/src/components/models/message';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formToSend!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formToSend = this.formBuilder.group({
      name: null,
      email: [ null
      ],
      message: null
    });

  }

  ngOnInit(): void {
  }

  async sendToSave() {

    let expression: RegExp = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    if (expression.test(this.formToSend.value.email)) {
      emailjs.init('riMxRfCqU_sy_p33w')
      await emailjs.send("service_udqzodd","template_88df4n3", {
        name: this.formToSend.value.name,
        email: this.formToSend.value.email,
        message: this.formToSend.value.message
      })
      Swal.fire({
        position: "center",
        icon: "success",
        text: "Email enviado!",
        showConfirmButton: false,
        timer: 2000
      });
      this.resetInPut()
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        text: "Não foi possível enviar o email.",
        showConfirmButton: false,
        timer: 2000
      });
    }
  }

  resetInPut() {
    this.formToSend.patchValue({
      name: null,
      email: null,
      message: null
    })
  }
}
//(submit)="sendEmail($event)"emailjs.send("service_udqzodd","template_88df4n3");
