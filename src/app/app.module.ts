import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

// Components
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { AddPageCategory } from '../components/addItem/category/add-item-category';
import { AddPageSubcategory } from '../components/addItem/subcategory/add-item-subcategory';
import { AddCochesComponent } from '../components/addItem/addCoches/addCoches';
import { AddMotosComponent } from '../components/addItem/addMotos/addMotos';

// Servicios
import { ListaService } from '../services/lista.service';
import { ListasComponent } from '../components/listas.component';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ListasComponent,
    AddPageCategory,
    AddPageSubcategory,
    AddCochesComponent,
    AddMotosComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ListasComponent,
    AddPageCategory,
    AddPageSubcategory,
    AddCochesComponent,
    AddMotosComponent
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
