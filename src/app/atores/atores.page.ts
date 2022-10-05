import { Component, OnInit } from '@angular/core';
import { AtoresModel } from '../api/atores-model';
import { AtoresService } from '../api/atores.service';

@Component({
  selector: 'app-atores',
  templateUrl: './atores.page.html',
  styleUrls: ['./atores.page.scss'],
})
export class AtoresPage implements OnInit {

  atores: AtoresModel[] = [];

  constructor(private service: AtoresService) { }

  ngOnInit(): void {
    this.service.getAtores().
    subscribe(lista => {
      this.atores = lista;
    });
  }

}
