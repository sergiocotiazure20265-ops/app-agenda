/*
    Interface para representar uma tarefa no sistema.
    Conttrato que define a estrutura de uma tarefa.
*/
export interface Tarefa {

    id: number; // Identificador único da tarefa
    nome: string; // Nome ou título da tarefa
    data: string; // Data de criação ou prazo da tarefa
    hora: string; // Hora de criação ou prazo da tarefa
    categoria: string; // Categoria ou tipo da tarefa
    prioridade: string; // Prioridade da tarefa (ex: alta, média, baixa)
    finalizada: boolean; // Indica se a tarefa foi concluída ou não
    comentarios: string; // Comentário ou descrição adicional da tarefa

}