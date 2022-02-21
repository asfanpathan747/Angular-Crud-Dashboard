import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserslistComponent } from './userslist/userslist.component';


const routes: Routes = [
  {path:'users',component:UsersComponent},
  {path:'userslist',component:UserslistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[UsersComponent,UserslistComponent]

