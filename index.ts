const isNumber = (value: number | string): value is number =>
  typeof value === 'number';

const createRequestUrl = (
  baseUrl: string,
  params: { [key: string]: string | number }
): string => {
  const url = new URL(baseUrl);
  Object.keys(params).forEach((key) => {
    const value = params[key];
    if (isNumber(value)) {
      return url.searchParams.set(key, String(value));
    } else {
      url.searchParams.set(key, value);
    }
  });
  return url.toString();
};

console.log(createRequestUrl('http://www.example.com', { foo: 1, hoo: '2' }));

export default createRequestUrl;
