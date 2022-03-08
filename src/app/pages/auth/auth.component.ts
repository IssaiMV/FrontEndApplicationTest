import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppStorage } from 'src/app/shared/services/app-storage';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private storage: AppStorage,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.storage.remove("jwt", false);
  }

  /**
   * Las formas que se mandan deberian asignarse desde el servidor, pero en este caso hara directo
   */
  login() {
    let { email, password } = this.loginForm.value;
    if (email === 'admin@mail.com' && password === 'admin') {
      this.storage.set("jwt", 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2wiOiJTQSJ9.C4NV5eVP0lEMeEV4Lmhno1gAfznQUOlTYOX9Rr55ymo', false);
      this.goHome();
    } else if (email === 'user@mail.com' && password === 'user') {
      this.storage.set("jwt", 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2wiOiJSRSJ9.SFudl5ckXAJ3tg4K_q1nyqrTQO07SAYgTtf9mVJ_LIs', false);
      this.goHome();
    } else {
      alert("Wrong username or password")
    }
  }

  goHome() {
    this.router.navigate(['/']);
  }
}

/**
 * Rol SA (SuperAdmin)
 * eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2wiOiJTQSJ9.C4NV5eVP0lEMeEV4Lmhno1gAfznQUOlTYOX9Rr55ymo
 */

/**
 * Rol RE (Restringido)
 * eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2wiOiJSRSJ9.SFudl5ckXAJ3tg4K_q1nyqrTQO07SAYgTtf9mVJ_LIs
 */