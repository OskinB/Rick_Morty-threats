import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ThreatComponent } from './threat/threat.component';
import { NewThreatComponent } from './new-threat/new-threat.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DataService } from './data.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThreatComponent,
    NewThreatComponent,
    NavBarComponent,
    AdminPanelComponent,
    PageNotFoundComponent,
    FooterComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'threats', component: ThreatComponent },
      { path: 'adminlogin', component: AdminLoginComponent,  },
      { path: 'newThreat', component: NewThreatComponent },
      { path: 'adminaccess', component: AdminPanelComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
