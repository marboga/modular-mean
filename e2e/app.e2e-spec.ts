import { TsfullstackPage } from './app.po';

describe('tsfullstack App', function() {
  let page: TsfullstackPage;

  beforeEach(() => {
    page = new TsfullstackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
