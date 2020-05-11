import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule, PAGE_LAYOUT_HANDLER } from '@spartacus/storefront';
import { OutletExerciseModule } from './outlet-exercise/outlet-exercise.module';
import { CustomBannerModule } from './custom-banner/custom-banner.module';
import { CustomCartDetailsModule } from './custom-cart-details/custom-cart-details.module';
import { ConfigExerciseModule } from './config-exercise/config-exercise.module';
import { RoutingModule } from '@spartacus/core';
import { RoutingExerciseModule } from './routing-exercise/routing-exercise.module';
import { LayoutExerciseModule } from './layout-exercise/layout-exercise.module';
import { MiniCartEntriesModule } from './mini-cart-entries/mini-cart-entries.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://localhost:9002',
          prefix: '/rest/v2/'
        }
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '2.0'
      }
    }),
    BrowserTransferStateModule,
    // OutletExerciseModule,
    // CustomBannerModule,
    // CustomCartDetailsModule,
    // ConfigExerciseModule,
    // RoutingExerciseModule,
    // LayoutExerciseModule,
    MiniCartEntriesModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
