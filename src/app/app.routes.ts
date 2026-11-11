import { Routes } from '@angular/router';
import { Dashboard } from './components/pages/dashboard/dashboard';
import { CadastroTarefas } from './components/pages/cadastro-tarefas/cadastro-tarefas';
import { ConsultaTarefas } from './components/pages/consulta-tarefas/consulta-tarefas';
import { Notfound } from './components/errors/notfound/notfound';

export const routes: Routes = [
    {
        path: 'pages/dashboard', //rota de navegação
        component: Dashboard //componente que será renderizado
    },
    {
        path: 'pages/cadastro-tarefas', //rota de navegação
        component: CadastroTarefas //componente que será renderizado
    },
    {
        path: 'pages/consulta-tarefas', //rota de navegação
        component: ConsultaTarefas //componente que será renderizado
    },
    {
        path: '', //rota padrão
        pathMatch: 'full', //corresponde exatamente à rota
        redirectTo: 'pages/dashboard' //redireciona para a rota de dashboard
    },
    {
        path: '**', //rota para lidar com URLs não encontradas
        component: Notfound //componente que será renderizado para URLs não encontradas
    }
];
