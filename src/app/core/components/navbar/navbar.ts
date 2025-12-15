import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  imports:[
    CommonModule,
    RouterModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class Navbar {

}
