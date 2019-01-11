import { NgModule } from '@angular/core';
import { IstanbulComponent } from './istanbul/istanbul.component';
import { MexicoComponent} from './mexico/mexico.component';
import { PragueComponent } from './prague/prague.component';
import { CapeCodComponent} from './cape-cod/cape-cod.component';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {path: 'welcome', component: WelcomePageComponent },
  {path: 'capecod', component: CapeCodComponent },
  {path: 'istanbul', component: IstanbulComponent },
  {path: 'mexico', component: MexicoComponent },
  {path: 'prague', component: PragueComponent },
]


@NgModule({
  imports: [ RouterModule.forRoot(routes)
    
  ],
  exports: [ RouterModule]
 
})
export class AppRoutingModule { }
