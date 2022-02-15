import { Component} from '@angular/core';
import { Netflixfals, Film} from './models/netflixfals';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  public netflixfals: Netflixfals;
  public accion: Film;
  public terror: Film;
  constructor() { 
this.netflixfals = {
  main: {
    logo: {
      src:"../../../assets/images/LOGO/logo.png",
      alt:"logo netflixfals"
    }
  },
  hero: {

   title:"",
    imgGallery:[
      {
        src:"../../../assets/images/Accion/ejercitomuertos.jpg",
        alt:"images",
      },
      {
        src:"../../../assets/images/Top10/2-reina.webp",
        alt:"images",
      },
      {
        src:"../../../assets/images/Top10/3-titanes.webp",
        alt:"images",
      },
      {
        src:"../../../assets/images/Top10/4-lostinspace.webp",
        alt:"images",
      },
      {
        src:"../../../assets/images/Top10/5-dondecaben.webp",
        alt:"images",
      },

    ] 
  }
};
this.accion= {
  title:"Accion",
  imgGallery: [
    {
      src:"../../../assets/images/Accion/ejercitomuertos.jpg",
      alt:"images",
    },
    {
      src:"../../../assets/images/Accion/elprotector.webp",
      alt:"images",
    },
    {
      src:"../../../assets/images/Accion/heat.webp",
      alt:"images",
    },
    {
      src:"../../../assets/images/Accion/renacido.webp",
      alt:"images",
    },
    {
      src:"../../../assets/images/Accion/terminator2.webp",
      alt:"images",
    },
    {
      src:"../../../assets/images/Accion/killbill2.webp",
      alt:"images",
    },
    {
      src:"../../../assets/images/ccion/worldwarz.webp",
      alt:"images",
    }

  ]
};
this.terror={
  title: "Terror",
  imgGallery:[
    {
      src:"../../../assets/images/Terror/reflejos.webp",
      alt:"images",
    },
    {
      src:"../../../assets/images/Terror/apostol.jpg",
      alt:"images",
    },
    {
      src:"../../../assets/images/Terror/life.webp",
      alt:"images",
    },
    {
      src:"../../../assets/images/Terror/malasana.webp",
      alt:"images",
    },
    {
      src:"../../../assets/images/Terror/calleterror.jpg",
      alt:"images",
    },
    {
      src:"../../../assets/images/Terror/reflejos.webp",
      alt:"images",
    },
    {
      src:"../../../assets/images/Terror/insidius2.webp",
      alt:"images",
    },
  ]
 
};



  }
};
