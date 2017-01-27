import { LaravelGenPage } from './app.po';

describe('laravel-gen App', function() {
  let page: LaravelGenPage;

  beforeEach(() => {
    page = new LaravelGenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
