import { JbappPage } from './app.po';

describe('jbapp App', function() {
  let page: JbappPage;

  beforeEach(() => {
    page = new JbappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
