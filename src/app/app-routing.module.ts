import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './_component/Menu/search/search.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'search', component:SearchComponent},
  {path:"", component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
