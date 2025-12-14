import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { Footer } from './footer/footer';



@NgModule({
  declarations: [
    Navbar,
    Footer
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    Navbar,
    Footer
  ]
})
export class CoreModule { }
