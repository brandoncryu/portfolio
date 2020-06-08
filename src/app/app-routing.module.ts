import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BouncyBallsComponent } from './bouncy-balls/bouncy-balls.component';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "blog-list", component: BlogListComponent},
  {path: "bouncy-balls", component: BouncyBallsComponent},
  {path: "shop", component: ShopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
