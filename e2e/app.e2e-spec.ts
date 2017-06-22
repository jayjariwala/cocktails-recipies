import { CocktailsRecipesPage } from './app.po';

describe('cocktails-recipes App', function() {
  let page: CocktailsRecipesPage;

  beforeEach(() => {
    page = new CocktailsRecipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
