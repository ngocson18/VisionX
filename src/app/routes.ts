import { Route } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { HomeComponent } from "./pages/home/home.component";

export const CLIENT_ROUTES: Route[] = [
  {path: '', component: LayoutComponent, children : [
    { path: '', component: HomeComponent}
  ]},
];
