import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      questionType: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  setInitialValues(initialValues: any) {
    // Define os valores iniciais no formulário
    this.contactForm.setValue(initialValues);
  }

  submitForm() {
    if (this.contactForm.valid) {
      // Enviar o formulário para o servidor ou realizar ações apropriadas aqui
      console.log('Formulário válido:', this.contactForm.value);
    }
  }
}
