import { FootballTerrainPage } from './app.po';

describe('football-terrain App', function() {
  let page: FootballTerrainPage;

  beforeEach(() => {
    page = new FootballTerrainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
