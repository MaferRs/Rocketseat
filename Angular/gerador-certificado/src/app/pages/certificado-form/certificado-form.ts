import { Component } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { PrimaryButton } from '../../_components/primary-button/primary-button';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButton, PrimaryButton],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css',
})
export class CertificadoForm {}
