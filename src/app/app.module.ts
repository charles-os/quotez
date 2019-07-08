import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuoteComponent } from './quote/quote.component';
import { QuoteCreateFormComponent } from './quote-create-form/quote-create-form.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HighlightDirective,
    DateCountPipe,
    QuoteComponent,
    QuoteCreateFormComponent,
    QuoteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
