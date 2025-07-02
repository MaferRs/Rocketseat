import { Component } from '@angular/core';
import { ItemCertificado } from '../../_components/item-certificado/item-certificado';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificado],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css',
})
export class Certificados {}

//iniciado depois que o angular inicializa o componente e o DOM
// ngOnInit(): void {}

//instanciado assim que o componente e iniciado
// constructor(private router: Router) {}
