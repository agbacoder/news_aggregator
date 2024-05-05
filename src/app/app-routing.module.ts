import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HompageComponent } from './pages/hompage/hompage.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { FavComponent } from './pages/fav/fav.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [

  {
    path: '',
    component: HompageComponent
  },
  {
    path: 'favorites',
    component: FavComponent
  }, 
  {
    path: 'signin',
    component: SigninComponent
  }, 
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
                                              