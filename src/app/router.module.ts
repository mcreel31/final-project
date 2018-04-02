import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


// add routes here
const routes: Routes = [
  // sample below
  {path: 'dashboard', component: DashboardComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
