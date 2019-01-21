const brands = [
 { src:"ecchorights@2x.png", alt:"Eccho Rights" },
 { src:"parfym@2x.png", alt:"parfym.se" },
 { src:"otto@2x.png", alt:"Ottos Barnmat" },
 { src:"workaround@2x.png", alt:"Work Around"}, 
 { src:"schoolido@2x.png", alt:"Schoolido" },
 { src:"piraya@2x.png", alt:"Nätverket Piraya" },
 { src:"stefanik@2x.png", alt:"Lindell Stefanik" },
 { src:"gms@2x.png", alt:"Global Models Inc" },
 { src:"natticole@2x.png", alt:"Natticole" },
 { src:"subito@2x.png", alt:"Subito Events" },
 { src:"scania@2x.png", alt:"Scania" },
 { src:"hm@2x.png", alt:"Hennes & Mauritz" },
 { src:"delmonte@2x.png", alt:"Del Monte" },
 { src:"ken@2x.png", alt:"Kammarensemblen" }
];

export function getBrands() {
  return brands;
}

export function getMovie(id) {
  return brands.find(m => m._id === id);
}


export function deleteMovie(id) {
  let movieInDb = brands.find(m => m._id === id);
  brands.splice(brands.indexOf(movieInDb), 1);
  return movieInDb;
}
