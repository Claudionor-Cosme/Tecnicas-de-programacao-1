import { Component, Pipe, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import {Footer} from "./core/footer/footer"
import { QuantidadeControle } from './shared/quantidade-controle/quantidade-controle';
import { Produto } from './model/produto';
import { CardProduto } from "./features/produtos/card-produto/card-produto";
import { ListaProdutos } from "./features/produtos/lista-produtos/lista-produtos";
import { pipe } from 'rxjs';
import { DescontoPipe } from './shared/pipes/desconto-pipe';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, CardProduto, ListaProdutos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('loja TP1 APP');
  sobre?: string;

  x = signal(10);

  

 

  receberSobre(msg: string):void{
    this.sobre = msg;
  }
}
