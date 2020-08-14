import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AtrrBindingComponent } from './atrr-binding/atrr-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventFilteringComponent } from './event-filtering/event-filtering.component';
import { TemplateVariablComponent } from './template-variabl/template-variabl.component';
import { TwoWaysBindingComponent } from './two-ways-binding/two-ways-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    AtrrBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    EventFilteringComponent,
    TemplateVariablComponent,
    TwoWaysBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
