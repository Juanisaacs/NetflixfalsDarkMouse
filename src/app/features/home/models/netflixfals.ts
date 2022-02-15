export interface Netflixfals{
    main: Main;
    hero: Film;
}
export interface Main{
    logo: Image;
    
}
export interface Film{
    title: string;
    imgGallery: Image[];
}
export interface Image{
    src: string;
    alt: string;
}


