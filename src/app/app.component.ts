import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NgIf] // Não esqueça de importar o NgIf para condicionar partes da tela
})
export class AppComponent {
  display: string = ''; // Variável para exibir no display da calculadora
  result: string = '';  // Resultado da operação

  // Função para lidar com os cliques dos botões
  handleClick(value: string): void {
    if (value === 'C') {
      // Limpar o display
      this.display = '';
    } else if (value === '=') {
      // Avaliar a expressão e mostrar o resultado
      try {
        this.result = eval(this.display).toString();  // Calcula a expressão
      } catch {
        this.result = 'Erro';  // Caso a expressão seja inválida
      }
    } else {
      // Adiciona o valor ao display
      this.display += value;
    }
  }
}
