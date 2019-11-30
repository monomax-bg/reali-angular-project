import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { NameTabComponent } from './main-container/name-tab/name-tab.component';
import { EmailTabComponent } from './main-container/email-tab/email-tab.component';
import { PhoneTabComponent } from './main-container/phone-tab/phone-tab.component';
import { SummaryTabComponent } from './main-container/summary-tab/summary-tab.component';
import { realiStoreReducer } from './main-container/reali-store/reali-store.reducer';
import { UpperButtonsPanelComponent } from './main-container/upper-buttons-panel/upper-buttons-panel.component';
import { LowerButtonsPanelComponent } from './main-container/lower-buttons-panel/lower-buttons-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    NameTabComponent,
    EmailTabComponent,
    PhoneTabComponent,
    SummaryTabComponent,
    UpperButtonsPanelComponent,
    LowerButtonsPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forFeature('reali-store', realiStoreReducer),
    StoreModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
