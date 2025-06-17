import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

//OnInit serve para executar uma ação sempre que o componente iniciarlizar e pra isso preciso do implements, chamar o OnInit e dentro da class chamar o ngOnInit() que será excecutado assim que o componente inicializar.
export class Navbar implements OnInit {
  ngOnInit(): void {
    // ideal para inicializar com os dados vindos de uma API, é como se fosse o useEffect do React Js

    this.mensagem();
    // sempre que referencio algo dentro da minha classe é necessário colocar o this.
  }

  //função isolada.
  mensagem() {
    console.log('Meu componente navbar inicializou(dentro de uma função)');
  }
}
