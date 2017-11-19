import { AppPage } from './app.po';

describe('ng-sidebarjs App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display package name', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('SidebarJS');
  });
});
