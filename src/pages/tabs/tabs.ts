import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { PendientesPage } from '../pendientes/pendientes';
import { TerminadosPage } from '../terminados/terminados';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesPage;
  tab2Root = TerminadosPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
