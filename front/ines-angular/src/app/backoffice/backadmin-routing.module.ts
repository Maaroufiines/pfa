import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

import { TableDataComponent } from './table-data/table-data.component';
import { ProfileComponent } from './profile/profile.component';
import { ConcoursComponent } from './concours/concours.component';
import { CondidaConcoursComponent } from './condida-concours/condida-concours.component';
import { ListUserComponent } from './list-user/list-user.component';
import { TableUserComponent } from './table-user/table-user.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: "profile", component: ProfileComponent },
      { path: "concours", component: ConcoursComponent },
      { path: "condidat/concours", component: CondidaConcoursComponent },
      { path: "liste/participant", component: ListUserComponent },
      { path: "liste/participant/:id", component: TableUserComponent },
      // { path: "dashboard", component: DashboardComponentComponent },
      // { path: "deliveries", component: DeliveriesComponent },
      // { path: "reclamations", component: ReclamationsComponent },
      // { path: "ressources", component: RessourcesComponent },
      // { path: "table", component: TableDataComponent },
 
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackadminRoutingModule { }
