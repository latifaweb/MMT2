import { Routes } from '@angular/router';
import { AppHome } from './home/home';
import { StrukturPemuda } from './components/struktur-pemuda/struktur-pemuda';
import { AgendaAcara } from './components/agenda-acara/agenda-acara';
import { SosialMedia } from './components/sosial-media/sosial-media';
import { LinktreeComponent } from './linktree/linktree';
import { KerjaSama } from './components/kerja-sama/kerja-sama';

export const routes: Routes = [
    { path: '', component: AppHome, title: 'MUDA MUDI TANGSI 18', pathMatch: 'full' },
      { path: 'struktur-pemuda', title: 'MUDA MUDI TANGSI 18', component: StrukturPemuda, },      
      { path: 'sosial-media', title: 'MUDA MUDI TANGSI 18', component: LinktreeComponent, }, 
      { path: 'agenda-acara', title: 'MUDA MUDI TANGSI 18', component: AgendaAcara, },
      { path: 'kerja-sama', title: 'MUDA MUDI TANGSI 18', component: KerjaSama, },// Redirect empty path to 404
      { path: '**', component: AppHome }
];
