import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { MustMatch } from 'src/app/_helpers/mustMatch';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  lozinka!: FormControl;
  potvrdaLozinke: string = '';
  form!: FormGroup;
  submitted = false;
  placeholder: string = 'Ttroha';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: [this.email, [Validators.required]],
        lozinka: [this.lozinka, [Validators.required, Validators.minLength(6)]],
        potvrdaLozinke: [this.potvrdaLozinke, Validators.required],
      },
      {
        validator: MustMatch('lozinka', 'potvrdaLozinke'),
      }
    );
  }

  get f() {
    return this.form.controls;
  }

  onSubmitlogin() {
    //console.log(value);
    this.submitted = true;

    // stani ako forma nevalja
    if (this.form.invalid) {
      //console.log(this.form.invalid);
      return;
    } else {
      //saljemo podatke na backend
      console.log(this.form.value);
    }
  }
}
