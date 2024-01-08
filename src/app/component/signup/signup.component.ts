import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/entity/user';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import * as UserAction from '../../state/user/user.action'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  constructor(private _fb: FormBuilder, private store: Store<AppState>) {}
  registrationForm!: FormGroup;
  user!: User;
  loading$ = this.store.select(state => state.user.loading);
  error$ = this.store.select(state => state.user.error);

  ngOnInit(): void {
    this.registrationForm = this._fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(){
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      this.user = this.registrationForm.value;
      this.signup(this.user);
    }
  }

  signup(signUser: User){
    this.store.dispatch(UserAction.register({user: signUser}));
  }
}
