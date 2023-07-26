import { Route } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { WelcomeComponent } from "./pages/welcome/welcome.component";

export const CLIENT_ROUTES: Route[] = [
  {path: '', component: LayoutComponent, children : [
    { path: '', component: WelcomeComponent}
  ]},
];
