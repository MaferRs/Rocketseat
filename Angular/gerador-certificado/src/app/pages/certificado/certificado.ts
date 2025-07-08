import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SecondaryButton } from '../../_components/secondary-button/secondary-button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificadoService } from '../../_services/certificado';
import { Certificado } from '../../interfaces/certificado';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css',
})
export class CertificadoComponent implements OnInit {
  id: string | null = null;
  certificado: Certificado | undefined;

  //pega a referencia do elemento tipo um useRef
  @ViewChild('certificadoContainer') certificadoElement!: ElementRef;

  constructor(
    private CertificadoService: CertificadoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.certificado = this.CertificadoService.certificados.find(
        (item) => item.id == this.id
      );
    });
  }

  downloadCertificado() {
    if (this.certificado == undefined) {
      return;
    }

    html2canvas(this.certificadoElement.nativeElement, { scale: 2 }).then(
      (canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download =
          'certificado_' + this.certificado?.nome.replaceAll('', '_') + '.png';
        link.click();
      }
    );
  }
}
