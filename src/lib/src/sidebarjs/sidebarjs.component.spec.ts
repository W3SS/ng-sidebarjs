import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarJSComponent } from './sidebarjs.component';
import { SidebarJSService } from '../sidebarjs.service';

class SidebarServiceStub {
  init(sidebarConfig: any) {}
  destroy(sidebarName: string) {}
}

describe('SidebarJSComponent', () => {
  let component: SidebarJSComponent;
  let fixture: ComponentFixture<SidebarJSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [SidebarJSComponent],
        providers: [{provide: SidebarJSService, useClass: SidebarServiceStub}]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarJSComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  it('should invoke defineConfigDomElements', () => {
    spyOn(component, 'defineConfigDomElements').and.callThrough();
    component.ngAfterContentInit();
    expect(component['defineConfigDomElements']).toHaveBeenCalled();
  });

  it('should define baseConfigDomElements', () => {
    const baseConfigDomElements = component['defineConfigDomElements']();
    expect(baseConfigDomElements).toBeDefined();
    expect(baseConfigDomElements.component).toBeDefined();
    expect(baseConfigDomElements.component).toBe(component.component.nativeElement);
    expect(baseConfigDomElements.container).toBeDefined();
    expect(baseConfigDomElements.container).toBe(component.container.nativeElement);
    expect(baseConfigDomElements.background).toBeDefined();
    expect(baseConfigDomElements.background).toBe(component.background.nativeElement);
  });

  it('should invoke setSidebarAttributes', () => {
    spyOn(component, 'setSidebarAttributes').and.callThrough();
    component.ngAfterContentInit();
    expect(component['setSidebarAttributes']).toHaveBeenCalled();
  });

  it('should set sidebar core attributes', () => {
    component['setSidebarAttributes'](component.sidebarjsName, {
      component: component.component.nativeElement,
      container: component.container.nativeElement,
      background: component.background.nativeElement
    });
    expect(component.component.nativeElement.attributes['sidebarjs']).toBeDefined();
    expect(component.container.nativeElement.attributes['sidebarjs-container']).toBeDefined();
    expect(component.background.nativeElement.attributes['sidebarjs-background']).toBeDefined();
  });

  it('should set sidebar core attributes with custom name', () => {
    component.sidebarjsName = 'myCustomName';
    component['setSidebarAttributes'](component.sidebarjsName, {
      component: component.component.nativeElement,
      container: component.container.nativeElement,
      background: component.background.nativeElement
    });
    expect(component.component.nativeElement.attributes['sidebarjs']).toBeDefined();
    expect(component.component.nativeElement.attributes['sidebarjs'].value).toBe(component.sidebarjsName);
    expect(component.container.nativeElement.attributes['sidebarjs-container']).toBeDefined();
    expect(component.background.nativeElement.attributes['sidebarjs-background']).toBeDefined();
  });

  it('should invoke sidebarService.init', () => {
    spyOn(component['sidebarService'], 'init').and.callThrough();
    component.ngAfterContentInit();
    expect(component['sidebarService']['init']).toHaveBeenCalledWith({
      component: component.component.nativeElement,
      container: component.container.nativeElement,
      background: component.background.nativeElement
    });
  });

  it('should invoke sidebarService.init with custom SidebarConfig', () => {
    spyOn(component['sidebarService'], 'init').and.callThrough();
    component.sidebarjsConfig = {position: 'right'};
    component.ngAfterContentInit();
    const config = Object.assign({}, {
      component: component.component.nativeElement,
      container: component.container.nativeElement,
      background: component.background.nativeElement
    }, component.sidebarjsConfig);
    expect(component['sidebarService']['init']).toHaveBeenCalledWith(config);
  });

  it('should invoke sidebarService.destroy', () => {
    spyOn(component['sidebarService'], 'destroy').and.callThrough();
    component.ngOnDestroy();
    expect(component['sidebarService']['destroy']).toHaveBeenCalledWith(component.sidebarjsName);
  });
});
