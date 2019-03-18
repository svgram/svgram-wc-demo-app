import { newE2EPage } from '@stencil/core/testing';

describe('app-wc-core-demo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-wc-core-demo></app-wc-core-demo>');

    const element = await page.find('app-wc-core-demo');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the specified name', async () => {
    const page = await newE2EPage({ url: '/wccoredemo/wc-core-demo' });

    const wcCoreElement = await page.find('app-root >>> app-wc-core-demo');
    const element = wcCoreElement.shadowRoot.querySelector('div');
    expect(element.textContent).toContain('Hello! My name is wc-core-demo.');
  });

  // it('includes a div with the class "app-wc-core-demo"', async () => {
  //   const page = await newE2EPage({ url: '/profile/joseph' });

  // I would like to use a selector like this above, but it does not seem to work
  //   const element = await page.find('app-root >>> app-wc-core-demo >>> div');
  //   expect(element).toHaveClass('app-wc-core-demo');
  // });
});
