import { Component } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
   produtos = <Produto[]>[
    {
      id: 1,
      nome: "Mounjaro",
      preco: 1699.99,
      descricao: "Canetas caras demais, Deus me livre.",
      imageUrl: "images/mounjaro-promocao-brasi-drogasil.webp",
      promo: false
  },
    {
      id: 2,
      nome: "Ozempic",
      preco: 1299.94,
      descricao: "Continuam caras demais, Deus continue me livre.",
      imageUrl: "images/Ozempic.webp",
      promo: false
  },
    {
      id: 3,
      nome: "Wegovy",
      preco: 2500.00,
      descricao: "Misericórida, Deus foi para floripa?.",
      imageUrl: "images/wegovy.jpg",
      promo: true
  },
];

onViewProduct(id: number){
  alert(`Visualizando produto id ${id}`);

}


onAddProduct(produto: {id:number, qtd: number}){
  alert(`Adicionado produt0`+produto.id+"|quantidade: "+produto.qtd);
}

}
