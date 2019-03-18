import { AppWcCoreDemo } from './app-wc-core-demo';

describe('app-wc-core-demo', () => {
  it('builds', () => {
    expect(new AppWcCoreDemo()).toBeTruthy();
  });

  describe('normalization', () => {
    it('returns a blank string if the name is undefined', () => {
      const component = new AppWcCoreDemo();
      expect(component.normalize(undefined)).toEqual('');
    });

    it('returns a blank string if the name is null', () => {
      const component = new AppWcCoreDemo();
      expect(component.normalize(null)).toEqual('');
    });

    it('capitalizes the first letter', () => {
      const component = new AppWcCoreDemo();
      expect(component.normalize('quincy')).toEqual('Quincy');
    });

    it('lower-cases the following letters', () => {
      const component = new AppWcCoreDemo();
      expect(component.normalize('JOSEPH')).toEqual('Joseph');
    });

    it('handles single letter names', () => {
      const component = new AppWcCoreDemo();
      expect(component.normalize('q')).toEqual('Q');
    });
  });
});
