import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  localdata:any=[];
  user:any=[];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit(loginForm: FormGroup) {
    this.localdata = localStorage.getItem('form-data');
    if (this.localdata !== null) {
      let local = JSON.parse(this.localdata);
      local.push(loginForm.value);
      localStorage.setItem('form-data', JSON.stringify(local))
    } else {
      localStorage.setItem('form-data', JSON.stringify([loginForm.value]))
    }
    this.reset(loginForm);
  }

  reset(loginForm: FormGroup) {
    loginForm.reset();
  }

}
