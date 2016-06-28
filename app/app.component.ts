import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { AddItemComponent } from './add/add-item.component';
import { ListsComponent } from './display/lists.component';
import { ListDetailComponent } from './list-detail.component';
import { ListService } from './display/list.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Lists']">List</a>
      <a [routerLink]="['Dashboard']">Add</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    ListService
  ]
})
@RouteConfig([
  {
    path: '/add/add-item',
    name: 'Dashboard',
    component: AddItemComponent,
    
  },
  {
    path: '/edit/detail/:id',
    name: 'ListDetail',
    component: ListDetailComponent
  },
  {
    path: '/display/lists',
    name: 'Lists',
    component: ListsComponent
    useAsDefault: true
  }
])
export class AppComponent {
  title = 'List';
}
