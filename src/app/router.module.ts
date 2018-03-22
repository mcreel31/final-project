import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

// add routes here
const routes: Routes = [
  // sample below
  //{path: 'books', component: BooksComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
