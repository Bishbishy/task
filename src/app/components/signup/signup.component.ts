import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { CountryModel } from 'src/app/Appservice/models/country-model';
import { SignUpFormsModule } from 'src/app/Appservice/models/sign-up-forms-module';
import { SignUpService } from 'src/app/Appservice/services/sign-up.service';
import { paswordShouldMatch } from 'src/app/validators/password.validator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm!: FormGroup;
  countries: CountryModel[] = [];
  defaultSelect = '';
  submitted: boolean = false;


  constructor(private fb: FormBuilder,
    private router: Router,
    public apisService: SignUpService) {
    this.createForm();
    this.getIpAdress();
    this.getAllCountries();
  }

  //#region create form
  createForm() {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      nationality: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^[A-Za-z][A-Za-z0-9]*$'), Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.pattern('^[A-Za-z][A-Za-z0-9]*$'), Validators.minLength(8)]],
      ipAdress: ['', [Validators.required]],
    },
      { validators: [paswordShouldMatch('password', 'confirmPassword')] })
  }
  //#endregion

  //#region api's call
  getIpAdress() {
    this.apisService.getIpAdress().pipe(
      switchMap((data) => {
        this.signUpForm.get('ipAdress').setValue(data.ip)
        return this.apisService.getGeoLocation(data.ip)
      })).subscribe((data) => {
        this.defaultSelect = `${data.latitude}${data.latitude}`;
        this.signUpForm.get('nationality').setValue(this.defaultSelect)
      })
  }

  getAllCountries() {
    this.apisService.getAllCountries().subscribe((data) => {
      this.countries = data;
    })
  }
  //#endregion

  get fc() {
    return this.signUpForm.controls;
  }

  signUp() {
    this.submitted = true;
    if (this.signUpForm.invalid) return;
    let signUpFormModel = this.signUpForm.value as SignUpFormsModule;
    sessionStorage.setItem('name', this.signUpForm.value.name)
    this.router.navigate(['welcome'])
  }

}


