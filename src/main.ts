import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


import {AppComponent} from './app/app.component';
import {provideRouter} from '@angular/router';
import {isDevMode, importProvidersFrom} from '@angular/core';
import {ServiceWorkerModule} from '@angular/service-worker';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {AngularSplitModule} from 'angular-split';
import {provideAnimations} from '@angular/platform-browser/animations';
import {withInterceptorsFromDi, provideHttpClient} from '@angular/common/http';
import {AppRoutingModule} from './app/app-routing.module';
import {BrowserModule, bootstrapApplication} from '@angular/platform-browser';
import {IconDefinition} from '@ant-design/icons-angular';
import {NZ_ICONS} from 'ng-zorro-antd/icon';
import * as AllIcons from '@ant-design/icons-angular/icons';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import {GoogleLoginProvider} from '@abacritt/angularx-social-login';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      AppRoutingModule,
      AngularSplitModule,
      ScrollingModule,
      DragDropModule,
      SocialLoginModule,
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
      })),
    {
      provide: NZ_ICONS,
      useValue: icons
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('380781306921-mgai1erc4v6945ttqeul9a3265jp225g.apps.googleusercontent.com'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    provideRouter([
      {path: '', component: AppComponent},
    ])
  ]
})
  .catch(err => console.error(err));
