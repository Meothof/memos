import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });
    it('should have a title saying Memo List', () => {
      page.getPageOneTitleText().then(title => {
        expect(title).toEqual('Memo List');
      });
    });
  });
});
