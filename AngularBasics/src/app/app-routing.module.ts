import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppListComponent } from './app-list/app-list.component';
import { ConfigComponent } from './config/config.component';
import { ProductsComponent } from './products/products.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: 'list', component: AppListComponent },
  { path : 'product', component: ProductsComponent},
  { path : 'upload', component: UploadComponent},
  { path : 'config', component: ConfigComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
