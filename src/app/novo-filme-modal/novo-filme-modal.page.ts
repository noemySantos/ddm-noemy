import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-novo-filme-modal',
  templateUrl: './novo-filme-modal.page.html',
  styleUrls: ['./novo-filme-modal.page.scss'],
})
export class NovoFilmeModalPage {


  constructor(public modalController: ModalController,) { }

  ngOnInit() {
  }
  novo_filme = {
    "nome": "",
    "autor": "",
    "dt_lanc": "",
    "duracao": "",
    "categoria": "",
  }

  add() {
    this.modalController.dismiss(this.novo_filme);
  }
}
