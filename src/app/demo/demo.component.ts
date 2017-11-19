import { Component, ViewEncapsulation } from '@angular/core';
import { SidebarConfig } from 'sidebarjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DemoComponent {

  public rightSidebarConfig: SidebarConfig = {
    position: 'right'
  }

}
