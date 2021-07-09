import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email: string = '';
  lozinka: string = '';
  ime: string = '';
  prezime: string = '';
  form!: FormGroup;
  submitted = false;
  register: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ime: [this.ime, [Validators.required]],
      prezime: [this.prezime, [Validators.required]],
      email: [this.email, [Validators.required, Validators.email]],
      lozinka: [this.lozinka, [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmitRegister() {
    //console.log(value);
    this.submitted = true;

    // stani ako forma nevalja
    if (this.form.invalid) {
      return;
    } else {
      //saljemo podatke na backend
      console.log(this.form.value);
    }
  }
}
