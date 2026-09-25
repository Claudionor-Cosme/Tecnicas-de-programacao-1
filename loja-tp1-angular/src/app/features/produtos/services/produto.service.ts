import { inject, Service } from '@angular/core';
import { LoggerService } from '../../../core/logger/logger.service';
import { Produto, produtoMapper } from '../../../model/produto';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Service()
export class ProdutoService {
    private logger = inject(LoggerService);
    private http = inject(HttpClient);

    private apiurl = 'https://fakestoreapi.com/products';



    listar(): Observable<Produto[]>{
        this.logger.info("[PRODUTO SERVICE] - Retornando lista de produtos");
        return this.http.get<any[]>(this.apiurl).pipe(
          map(lista => lista.map(prod => produtoMapper.fromJson(prod))),
          catchError(erro => {
             this.logger.error("[Produto Service] - Erro ao listar produto");
            return of([]);
          }
          ))
    }

    getById(id: number): Observable<Produto | undefined>{
      //exercicio para fazer
      return of()
    }

    criar(produto: Produto):Observable<any>{
      return this.http.post(this.apiurl, produtoMapper.toJson(produto))
    }

}
