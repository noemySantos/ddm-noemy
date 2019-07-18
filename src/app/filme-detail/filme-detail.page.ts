import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filme-detail',
  templateUrl: './filme-detail.page.html',
  styleUrls: ['./filme-detail.page.scss'],
})
export class FilmeDetailPage {

id;
filme;

constructor(private route: ActivatedRoute, private http: HttpClient) { 
  this.id = this.route.snapshot.paramMap.get('id');
  this.http.get('https://5d262d00eeb36400145c59b3.mockapi.io/filme' + this.id).subscribe(
    (data) => {
      this.filme = data;
    }
  )

}


}
