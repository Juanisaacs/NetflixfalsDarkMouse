import { Component, OnInit, Input } from '@angular/core';
import { Main } from '../../models/netflixfals';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() public main!: Main
  public btnText: string= "Darkmouse"

  constructor() { }

  ngOnInit(): void {
  }
public setDark(): void {
  document.body.classList.toggle("dark-theme");
  this.btnText =="DarkMouse" ? this.btnText = "whiteMouse" : this.btnText = "DarkMouse"
}
}
