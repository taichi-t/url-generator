import createRequestUrl from '../index';

describe('createRequestUrl', () => {
  it('receives invalid url', () => {
    const baseUrl = 'this is not url';
    const params = { foo: '1', hoo: 2 };
    expect(() => createRequestUrl(baseUrl, params)).toThrow();
  });
});
