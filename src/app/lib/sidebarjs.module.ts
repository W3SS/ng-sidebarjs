import { ModuleWithProviders, NgModule } from '@angular/core';
import { SidebarJSComponent } from './sidebarjs/sidebarjs.component';
import { SidebarJSToggleDirective } from './sidebarjs-toggle/sidebarjs-toggle.directive';
import { SidebarJSOpenDirective } from './sidebarjs-open/sidebarjs-open.directive';
import { SidebarJSCloseDirective } from './sidebarjs-close/sidebarjs-close.directive';
import { SidebarJSService } from "./sidebarjs.service";
export { SidebarConfig, SidebarPosition } from 'sidebarjs';

const COMPONENTS = [
  SidebarJSComponent,
  SidebarJSToggleDirective,
  SidebarJSOpenDirective,
  SidebarJSCloseDirective,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class SidebarJSModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SidebarJSModule,
      providers: [SidebarJSService],
    };
  }
}
