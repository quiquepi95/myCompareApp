import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

// Components
import { ComparePage } from '../pages/compare/compare';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';

// Añadir
import { AddPageCategory } from '../components/addItem/category/add-item-category';
import { AddPageSubcategory } from '../components/addItem/subcategory/add-item-subcategory';
import { AddCochesComponent } from '../components/addItem/addCoches/addCoches';
import { AddMotosComponent } from '../components/addItem/addMotos/addMotos';
import { AddPcComponent } from '../components/addItem/addPC/addPC';
import { AddLavadoraComponent } from '../components/addItem/addLavadora/addLavadora';
import { AddFrigoComponent } from '../components/addItem/addFrigorifico/addFrigo';
import { AddLavavajillasComponent } from '../components/addItem/addLavavajillas/addLavavajillas';
import { AddSecadoraComponent } from '../components/addItem/addSecadora/addSecadora';

// Comparar
import { CompareItemComponent } from '../components/compareItem/compareItem';
import { CompareItemCochesComponent } from '../components/compareItem/compareCoches/compareCoches';
import { CompareItemMotosComponent } from '../components/compareItem/compareMotos/compareMotos';
import { CompareItemPcComponent } from '../components/compareItem/comparePC/comparePC';
import { CompareItemLavadoraComponent } from '../components/compareItem/compareLavadora/compareLavadora';
import { CompareItemFrigoComponent } from '../components/compareItem/compareFrigorifico/compareFrigo';
import { CompareItemLavavajillasComponent } from '../components/compareItem/compareLavavajillas/compareLavavajillas';

// Servicios
import { ListaService } from '../services/lista.service';
import { ListasComponent } from '../components/listas.component';


@NgModule({
  declarations: [
    MyApp,
    ComparePage,
    ContactPage,
    HomePage,
    TabsPage,
    ListasComponent,
    AddPageCategory,
    AddPageSubcategory,
    AddCochesComponent,
    AddMotosComponent,
    AddPcComponent,
    AddLavadoraComponent,
    AddFrigoComponent,
    AddLavavajillasComponent,
    AddSecadoraComponent,
    CompareItemComponent,
    CompareItemCochesComponent,
    CompareItemMotosComponent,
    CompareItemPcComponent,
    CompareItemLavadoraComponent,
    CompareItemFrigoComponent,
    CompareItemLavavajillasComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ComparePage,
    ContactPage,
    HomePage,
    TabsPage,
    ListasComponent,
    AddPageCategory,
    AddPageSubcategory,
    AddCochesComponent,
    AddMotosComponent,
    AddPcComponent,
    AddLavadoraComponent,
    AddFrigoComponent,
    AddLavavajillasComponent,
    AddSecadoraComponent,
    CompareItemComponent,
    CompareItemCochesComponent,
    CompareItemMotosComponent,
    CompareItemPcComponent,
    CompareItemLavadoraComponent,
    CompareItemFrigoComponent,
    CompareItemLavavajillasComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
