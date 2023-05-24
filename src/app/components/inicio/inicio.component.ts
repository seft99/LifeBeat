import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  showLoader: boolean = false;

  constructor(private router: Router) {}

  continueToMainPage() {
    this.showLoader = true;
    setTimeout(() => {
      this.router.navigate(['/mainpage']);
    }, 1500);
  }
}

