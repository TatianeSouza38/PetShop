import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {



  products = [
    {
      description: 'Moletom PetSIN Simples para Animais de Estimação',
      price: '75,00',
      img: '../../../assets/products/moletomrosapt1.webp',
      exPrice: '89.99',
      id: 1,
      idBtn: '1b',
    },
    {
      description: 'Moletom de pelúcia para animais de estimação',
      price: '68,50',
      img: '../../../assets/products/azulpt1.webp',
      exPrice: '70,00',
      id: 2,
      idBtn: '2b',
    },
    {
      description: 'Moletom com capuz para animais de estimação com design de veado',
      price: '53,50',
      img: '../../../assets/products/renapt1.webp',
      exPrice: '59,99',
      id:3,
      idBtn: '3b',
    },
    {
      description: 'Moletom com capuz para animais de estimação',
      price: '84,99',
      img: '../../../assets/products/moletompt1.webp',
      exPrice: '96,50',
      id:4,
      idBtn: '4b',
      },
    {
      description: 'Moletom em forma de abelha para animais de estimação',
      price: '45,00',
      img: '../../../assets/products/abelhapt1.webp',
      exPrice: '51,00',
      id:5,
      idBtn: '5b',
    },
    {
      description: 'Moletom preto com capuz para cachorro',
      price: '74,99',
      img: '../../../assets/products/dog1pt1.webp',
      exPrice: '75,00',
      id:6,
      idBtn: '6b',
    },
    {
      description: '1 peça tanque para animais de estimação com estampa de urso',
      price: '77,98',
      img: '../../../assets/products/dog2pt1.webp',
      exPrice: '86,95',
      id:7,
      idBtn: '7b',
    },
    {
      description: 'moletom de urso de pelúcia',
      price: '55,99',
      img: '../../../assets/products/ursopt1.webp',
      exPrice: '69,99',
      id:8,
      idBtn: '8b',
    },
    {
      description: 'Macacão de desenho animado para animais de estimação',
      price: '65,99',
      img: '../../../assets/products/minionpt1.webp',
      exPrice: '69,99',
      id:9,
      idBtn: '9b',
    },
    {
      description: 'Macacão de animal de estimação com estampa listrada',
      price: '75,99',
      img: '../../../assets/products/macacaopt1.webp',
      exPrice: '79,99',
      id:10,
      idBtn: '10b',
    },
    {
      description: 'PetSIN Terno de Casamento Pet Decoração com Laço',
      price: '45,99',
      img: '../../../assets/products/ternopt1.webp',
      exPrice: '50,00',
      id:11,
      idBtn: '11b',
    },
    {
      description: '1 peça vestido de animal de estimação de decoração de coelho',
      price: '64,99',
      img: '../../../assets/products/vestidopt1.webp',
      exPrice: '70,00',
      id:12,
      idBtn: '12b',
    },
  ]



  constructor() {

   }

  ngOnInit(): void {
  }

    changeImgLeft(id: any){

      let img = document.getElementById(id) as HTMLImageElement;
      if (img.src.includes('pt1')){
       let name = img.src.replace('pt1', 'pt2')
       img.src = name

    } else {
       let name = img.src.replace('pt2', 'pt1')
       img.src = name
    }
   }


   changeImgRight(id: any){
    let img = document.getElementById(id) as HTMLImageElement;
      if (img.src.includes('pt2')){
       let name = img.src.replace('pt2', 'pt1')
       img.src = name

    } else {
       let name = img.src.replace('pt1', 'pt2')
       img.src = name
    }
   }

 addToFavorite(id: any){
  let heart = document.getElementById(id) as HTMLButtonElement;
  if(!heart.classList.contains('favoritado')){
   heart.classList.add('favoritado');
  } else {
    heart.classList.remove('favoritado');
  }

}
}
