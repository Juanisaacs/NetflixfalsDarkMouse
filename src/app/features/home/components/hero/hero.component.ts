import { Component, OnInit , Input} from '@angular/core';
import { Film} from "../../models/netflixfals";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() public hero!: Film;
  constructor() { }

  ngOnInit(): void {
  }

}
