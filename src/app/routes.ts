import { Route } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { HomeComponent } from "./pages/home/home.component";
import {TemplatesComponent} from "./pages/templates/templates.component";
import {SlideFlexComponent} from "./pages/slide-flex/slide-flex.component";

export const CLIENT_ROUTES: Route[] = [
  {path: '', component: LayoutComponent, children : [
    { path: '', component: HomeComponent},
    { path: 'template', component: TemplatesComponent},
    { path: 'template/flex', component: SlideFlexComponent},
  ]},
];
