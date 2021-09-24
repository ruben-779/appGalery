import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { MosaicoComponent } from './components/mosaico/mosaico.component';

const routes: Routes = [
  {
    path: "", component: MosaicoComponent
  },
  {
    path: "lista", component: ListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
