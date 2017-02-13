import { FriendsPage } from './app.po';

describe('friends App', function() {
  let page: FriendsPage;

  beforeEach(() => {
    page = new FriendsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
