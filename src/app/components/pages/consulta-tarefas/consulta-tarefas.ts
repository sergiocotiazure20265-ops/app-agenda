import { Component, inject } from '@angular/core';
import { TarefaService } from '../../../services/tarefa.service';

@Component({
  imports: [],
  selector: 'app-consulta-tarefas',
  styleUrl: './consulta-tarefas.css',
  templateUrl: './consulta-tarefas.html',
})
export class ConsultaTarefas {

    //Injeção de dependência do serviço de tarefas
    private readonly tarefaService = inject(TarefaService);

    //Função executada ao iniciar o componente
    ngOnInit() {
        //Executando a consulta de tarefas e exibir os dados console do navegador
        this.tarefaService.obterTarefas()
          .subscribe((tarefas) => { //Aguardando a resposta da API
              console.table(tarefas); //Exibindo as tarefas no console do navegador
          });
    }
}
