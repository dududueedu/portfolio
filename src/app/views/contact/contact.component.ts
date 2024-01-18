import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from 'src/app/src/components/models/message';
import emailjs from '@emailjs/browser';

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
    emailjs.init('riMxRfCqU_sy_p33w')
    let response = await emailjs.send("service_udqzodd","template_88df4n3", {
      name: this.formToSend.value.name,
      email: this.formToSend.value.email,
      message: this.formToSend.value.message
    })
    alert("Send Sucess: " +response)
    console.log(response)
    this.resetInPut()
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
