import { computed, effect, Injectable, Service, signal } from '@angular/core';
import { itemPedido } from '../../../model/item-pedido';
import { Produto } from '../../../model/produto';


@Service()
export class CarrinhoService {

    private _listaItens = signal<itemPedido[]>(this._carregarProdutos());

    itens = this._listaItens.asReadonly();
    qtdItens = computed(() => this._listaItens().reduce((s,i) => s + i.quantidade,0));
    valorTotal = computed(() => this._listaItens().reduce((s,i) => s + i.quantidade * i.produto.preco ,0));

    constructor(){
        effect(() =>{
            try{
                localStorage.setItem('lojatp1_carrinho',JSON.stringify(this._listaItens));
            }
            catch(e){
                //inserir a exceção no logger
                //ou exibir alguma mensagem de erro
            }
        });

    }

    private _carregarProdutos(): itemPedido[]{
        try{
          const conteudo = localStorage.getItem('lojatp1_carrinho');
          if(!conteudo)
            return [];
          const lista = JSON.parse(conteudo) as itemPedido[];
          return lista;
        } catch(e){
            //alguma coisa para tratar o erro
            return [];
        }
    }

    adicionar(produto: Produto, quantidade: number = 1){
        if(!produto)
            return;
        const itens = this._listaItens();
        const idx = itens.findIndex(it => it.produto.id === produto.id);
        if(idx > -1){
            itens[idx] = {...itens[idx], quantidade: itens[idx].quantidade + quantidade};
            this._listaItens.set(itens);
        }
        else{
            const novoProd: itemPedido = {quantidade, produto};
            this._listaItens.set([...itens, novoProd]);
        }
    }

    remover(id: number){
        this._listaItens.set(this._listaItens().filter(i => i.produto.id !== id));
    }

    atualizarQtd(id: number, quantidade: number){
        if(quantidade <= 0){
            this.remover(id)
            return;
        }
        const itens = this._listaItens();
        const idx = itens.findIndex(it => it.produto.id === id);
        if(idx > -1){
            itens[idx] = {...itens[idx], quantidade: quantidade};
            this._listaItens.set(itens);
        }
    }

    limpar(){
        this._listaItens.set([]);
    }

}
