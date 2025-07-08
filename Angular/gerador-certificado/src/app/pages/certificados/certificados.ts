import { Component, OnInit } from '@angular/core';
import { ItemCertificado } from '../../_components/item-certificado/item-certificado';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado, SecondaryButton, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css',
})
export class Certificados implements OnInit {
  certificados: Certificado[] = [];
  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    this.certificados = this.certificadoService.certificados;
  }
}

//iniciado depois que o angular inicializa o componente e o DOM
// ngOnInit(): void {}

//instanciado assim que o componente e iniciado
// constructor(private router: Router) {}
