import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesEditComponent } from './properties-edit/properties-edit.component';
import { PropertiesListComponent } from './properties-list/properties-list.component';
import { PropertiesNewComponent } from './properties-new/properties-new.component';
// import { PropertiesViewComponent } from './properties-view/properties-view.component';

const routes: Routes = [

  {path:'', component:PropertiesListComponent},
  {path:'new', component:PropertiesNewComponent},
  {path:'edit/:id', component:PropertiesEditComponent},
  // {path:'view/:id', component:PropertiesViewComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
