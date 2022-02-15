import { Component, OnInit, Input } from '@angular/core';
import {Film}  from '../../models/netflixfals'
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

@Input() public film!: Film
  constructor() { }

  ngOnInit(): void {
  }

}
