import { KagaziPage } from './app.po';

describe('kagazi App', () => {
  let page: KagaziPage;

  beforeEach(() => {
    page = new KagaziPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
