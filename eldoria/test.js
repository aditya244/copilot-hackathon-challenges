const { fetchScrolls, decipherScroll, retrieveScrollsOfEldoria } = require('./app');
const fetch = require('node-fetch');
jest.mock('node-fetch');

describe('fetchScrolls', () => {
  it('should fetch data from the API', async () => {
    const mockData = 'Mock data';
    fetch.mockResolvedValue({
      ok: true,
      text: async () => mockData,
    });

    const data = await fetchScrolls();
    expect(data).toBe(mockData);
  });

  it('should throw an error if the response is not ok', async () => {
    fetch.mockResolvedValue({
      ok: false,
      status: 404,
    });

    await expect(fetchScrolls()).rejects.toThrow('HTTP error! status: 404');
  });
});

describe('decipherScroll', () => {
  it('should extract data between {* *}', () => {
    const data = 'Welcome {*secret1*} to the {*secret2*} Scrolls';
    const expected = ['secret1', 'secret2'];
    const result = decipherScroll(data);
    expect(result).toEqual(expected);
  });

  it('should return an empty array if no matches are found', () => {
    const data = 'Welcome to the Scrolls';
    const result = decipherScroll(data);
    expect(result).toEqual([]);
  });
});

describe('retrieveScrollsOfEldoria', () => {
  it('should return deciphered scrolls', async () => {
    const mockData = 'Welcome {*secret1*} to the {*secret2*} Scrolls';
    fetch.mockResolvedValue({
      ok: true,
      text: async () => mockData,
    });

    const result = await retrieveScrollsOfEldoria();
    expect(result).toEqual(['secret1', 'secret2']);
  });

  it('should return an empty array if there is an error', async () => {
    fetch.mockResolvedValue({
      ok: false,
      status: 404,
    });

    const result = await retrieveScrollsOfEldoria();
    expect(result).toEqual([]);
  });
});
