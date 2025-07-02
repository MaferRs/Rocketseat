import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './_components/navbar/navbar';
import { CommonModule } from '@angular/common';

import { BaseUi } from './_components/base-ui/base-ui';

// CommonModule permite usar diretivar como ngIf, ngFor, mas preciso ser importado para funcionar.

@Component({
  selector: 'app-root',
  imports: [Navbar, CommonModule, BaseUi, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'gerador-certificado';
  exibeNavBar: boolean = false;
}
