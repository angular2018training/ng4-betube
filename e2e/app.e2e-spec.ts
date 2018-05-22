import { ZendtubeFrontendPage } from './app.po';

describe('zendtube-frontend App', () => {
  let page: ZendtubeFrontendPage;

  beforeEach(() => {
    page = new ZendtubeFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
