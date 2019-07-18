import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { NovoFilmeModalPage } from '../novo-filme-modal/novo-filme-modal.page';
import { ToastController, AlertController } from '@ionic/angular';
import { FilmeServiceService } from '../services/filme-service.service'

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.page.html',
  styleUrls: ['./lista-filmes.page.scss'],
})
export class ListaFilmesPage {
  filmes: any;

  // Declarar uma instancia no construtor
  constructor(public modalController: ModalController, public alertController: AlertController, public toastController: ToastController, public loadingController: LoadingController, private filmeServiceService: FilmeServiceService) {
    this.filmes = [];
    this.loadingController.create({
    }).then((loader) => {
      loader.present();
      this.filmeServiceService.list().subscribe(
        (data) => {
          this.filmes = data;
          loader.dismiss();
        }
      )
    });
  }

  add(filme) {
    this.loadingController.create({
      message: 'Carregando, aguarde...',
    }).then((loader) => {
      loader.present();
      this.filmeServiceService.add(filme).subscribe(
        (data) => {
          this.filmes.push(data);
          loader.dismiss();
        }
      )
    });
  }

  async modal() {
    const modal = await this.modalController.create({
      component: NovoFilmeModalPage
    });
    await modal.present();

    modal.onDidDismiss().then((filme) => {
      this.add(filme.data)
    })
  }

excluir (filme) {
  this.loadingController.create({
    message: 'removendo...',
  }).then((loader) => {
    loader.present();
    this.filmeServiceService.excluir(filme).subscribe(
      (data) => {
        var i = this.filmes.indexOf(filme);
        this.filmes.splice(i, 1);
        loader.dismiss();
      }
    )
  });
}
}



