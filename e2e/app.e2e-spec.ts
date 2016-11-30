import { Angular2ContactListAppPage } from './app.po';

describe('angular2-contact-list-app App', function() {
  let page: Angular2ContactListAppPage;

  beforeEach(() => {
    page = new Angular2ContactListAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
