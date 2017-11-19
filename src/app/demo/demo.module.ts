import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo.component';
import { SidebarJSModule } from '../lib/sidebarjs.module';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    BrowserModule,
    SidebarJSModule.forRoot()
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class DemoModule {
}
