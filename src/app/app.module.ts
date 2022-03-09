import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NavbarModule } from './shared/components/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NavbarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => { return localStorage.getItem('jwt'); },
        allowedDomains: [
          'localhost:4200',
        ],
        disallowedRoutes: [
        ],
        skipWhenExpired: true
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
