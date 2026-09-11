import { inject, Service } from '@angular/core';
import { LoggerService } from '../../../core/logger/logger.service';
import { Produto } from '../../../model/produto';
import { delay, Observable, of } from 'rxjs';

@Service()
export class ProdutoService {
    private logger = inject(LoggerService);

     private readonly listaMock = <Produto[]>[
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
      preco: 1299.94,
      descricao: "Continuam caras demais, Deus continue me livrando.",
      imageUrl: "images/Ozempic.webp",
      promo: false,
      estado: 'usado'
  },
    {
      id: 3,
      nome: "Wegovy",
      preco: 2500.00,
      descricao: "Misericórida, Deus foi para floripa?.",
      imageUrl: "images/wegovy.jpg",
      promo: true,
      estado: 'esgotado'
  },
  {
    id: 4,
    nome: "novalgina",
    preco: 17.99,
    descricao: "legal",
    imageUrl: "Images/wegovy.jpg",
    promo: true,
    estado: 'esgotado',
  },
];

    listar(): Observable<Produto[]>{
        this.logger.info("[PRODUTO SERVICE] - Retornando lista de produtos");
        return of(this.listaMock).pipe(
            delay(250)
        );
    }

    getById(id: number): Observable<Produto | undefined>{
      return of(this.listaMock.find(p => p.id == id)).pipe(delay(500));
    }

}
