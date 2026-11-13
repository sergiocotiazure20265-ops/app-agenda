import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { Tarefa } from "../models/tarefa.model";

@Injectable({ //Habilitar injeção de dependência para o serviço
  providedIn: "root", //Todo o aplicativo terá acesso a este serviço
})
export class TarefaService {

    //Injeção de dependência da biblioteca HttpClient 
    //para realizar requisições HTTP para a API
    private readonly http = inject(HttpClient);

    //Declarar uma variavel para armazenar a URL base da API
    private readonly apiUrl = environment.apiUrl;

    //Função para buscar todas as tarefas da API
    obterTarefas() : Observable<Tarefa[]> {
        //Fazendo uma chamada GET para a API para obter todas as tarefas
        return this.http.get<Tarefa[]>(`${this.apiUrl}/tarefas`);
    }
}