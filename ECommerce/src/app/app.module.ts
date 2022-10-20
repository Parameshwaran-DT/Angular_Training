import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { ObservableComponent } from './components/observable/observable.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomInterceptor, LoggingInterceptor } from './interceptor/custom.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultithemeComponent } from './components/multitheme/multitheme.component';
import { ThemeService } from './shared/service/theme.service';
import { MyHighlightDirective } from './directive/my-highlight.directive';
import { TtIfDirective } from './directive/tt-if.directive';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ObservableComponent,
    SignupComponent,
    MultithemeComponent,
    MyHighlightDirective,
    TtIfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    [{
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true
    },
    ThemeService
    ]
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
