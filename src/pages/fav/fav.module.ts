import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavPage } from './fav';

@NgModule({
  declarations: [
    FavPage,
  ],
  imports: [
    IonicPageModule.forChild(FavPage),
  ],
})
export class FavPageModule {}
