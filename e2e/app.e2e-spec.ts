import { CalanderPage } from './app.po';

describe('calander App', () => {
  let page: CalanderPage;

  beforeEach(() => {
    page = new CalanderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
