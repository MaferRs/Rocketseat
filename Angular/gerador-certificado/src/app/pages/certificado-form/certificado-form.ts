import { Component } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { PrimaryButton } from '../../_components/primary-button/primary-button';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css',
})
export class CertificadoForm {
  nome: string = '';
  atividade: string = '';
  atividades: string[] = ['angular', ' react', 'cobol', 'next'];

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched;
  }
}

// ngModel - facilita a sincronização automática do valor de um campo de formulário com uma variável, captura em tempo real os valores do input.
