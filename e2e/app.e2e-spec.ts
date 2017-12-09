import { CronGeneratorPage } from './app.po';

describe('cron-generator App', () => {
  let page: CronGeneratorPage;

  beforeEach(() => {
    page = new CronGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
