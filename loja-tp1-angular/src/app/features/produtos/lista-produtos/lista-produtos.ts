import { Component, computed, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {

  apenasPromo = signal(false);

  produtoExibidos = computed(()=>
    this.apenasPromo() 
    ? this.produtos.filter(p => p.promo)
    : this.produtos
  );

  alternarPromo(){
    this.apenasPromo.update(v => !v);
  }

   produtos = <Produto[]>[
    {
      id: 1,
      nome: "Mounjaro",
      preco: 1699.99,
      descricao: "Canetas caras demais, Deus me livre.",
      imageUrl: "images/mounjaro-promocao-brasi-drogasil.webp",
      promo: false,
      estado: 'novo'
  },
    {
      id: 2,
      nome: "Ozempic",
      preco: 'R$1299.94',
      descricao: "Continuam caras demais, Deus continue me livrando.",
      imageUrl: "images/Ozempic.webp",
      promo: false,
      estado: 'usado'
  },
    {
      id: 3,
      nome: "Wegovy",
      preco: 'R$2500.00',
      descricao: "Misericórida, Deus foi para floripa?.",
      imageUrl: "images/wegovy.jpg",
      promo: true,
      estado: 'esgotado'
  },
  {
    id: 4,
    nome: "novalgina",
    preco: "R$17.99",
    descricao: "legal",
    imageUrl: "Images/wegovy.jpg",
    promo: true,
    estado: 'esgotado',
  },
];

onViewProduct(id: number){
  alert(`Visualizando produto id ${id}`);

}


onAddProduct(produto: {id:number, qtd: number}){
  alert(`Adicionado produt0`+produto.id+"|quantidade: "+produto.qtd);
}

}
