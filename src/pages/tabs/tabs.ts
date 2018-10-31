import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { PendientesComponent } from '../pendientes/pendientes.component';
import { TerminadosComponent } from '../terminados/terminados.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesComponent;
  tab2Root = TerminadosComponent;
  tab3Root = AboutPage;

  constructor() {

  }
}
