import { newE2EPage } from '@stencil/core/testing';

describe('app-home', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-home></app-home>');

    const element = await page.find('app-home');
    expect(element).toHaveClass('hydrated');
  });

  it('contains a "WC Core Demo Page" button', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-home></app-home>');

    const element = await page.find('app-home >>> button');
    expect(element.textContent).toEqual('WC Core Demo page');
  });
});
