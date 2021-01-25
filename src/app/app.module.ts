import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AffichageComponent } from './affichage/affichage.component';
import { FormsModule } from '@angular/forms';
import { AjouteZeroPipe } from './pipe/ajoute-zero.pipe';
import { PanelComponent } from './panel/panel.component';
import { CapitalDirective } from './directive/capital.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AffichageComponent,
    AjouteZeroPipe,
    PanelComponent,
    CapitalDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
