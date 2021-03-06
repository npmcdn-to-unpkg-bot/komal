import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { AppComponent } from './app.component';

bootstrap(AppComponent);
bootstrap(AppComponent, [
   ROUTER_PROVIDERS,
   HTTP_PROVIDERS,
 ]).catch(err => console.error(err));


