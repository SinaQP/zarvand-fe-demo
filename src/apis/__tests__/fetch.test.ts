// import fetch function
import { Fetch } from '../fetch';

describe('Fetch Test', () => {
      // test implementation
      test('functional test - success type', async () => {
            // create mock function for fetch
            // this mock returns a promise
            let FetchMock = jest.fn((url, metadate) => {
                  let Prom = new Promise((resolve, reject) => {
                        // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
                        setTimeout(function () {
                              resolve({
                                    status: 200,
                                    json: () => {
                                          return {
                                                name: 'roozbeh',
                                                family: 'shafiee',
                                          };
                                    },
                              }); // Yay! Everything went well!
                        }, 250);
                  });
                  return Prom;
            });

            // parameters
            let url = 'https://google.com';
            let meta = {
                  method: 'GET',
                  headers: {
                        'Content-Type': 'application/json',
                  },
            };
            // call api
            let result = await Fetch(url, meta, FetchMock);

            // expectaion
            expect(FetchMock).toHaveBeenCalledTimes(1); // call times test
            expect(FetchMock).toBeCalledWith(url, meta); // arguments test
            expect(result.status).not.toBe(null); // result test
            expect(result.status).toBe(200); // result test
            expect(result.body).not.toBe(null); // result test
            expect(result.body).toEqual({ name: 'roozbeh', family: 'shafiee' }); // result test
      });

      test('functional test - error type', async () => {
            // create mock function for fetch
            // this mock returns a promise
            let FetchMock = jest.fn((url, metadate) => {
                  let Prom = new Promise((resolve, reject) => {
                        // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
                        setTimeout(function () {
                              reject('fail to perform test'); // Yay! Everything went well!
                        }, 250);
                  });
                  return Prom;
            });

            // parameters
            let url = 'https://google.com';
            let meta = {
                  method: 'GET',
                  headers: {
                        'Content-Type': 'application/json',
                  },
            };
            // call api
            let result = await Fetch(url, meta, FetchMock);

            // expectaion
            expect(FetchMock).toHaveBeenCalledTimes(1); // call times test
            expect(FetchMock).toBeCalledWith(url, meta); // arguments test
            expect(result.status).not.toBe(null); // result test
            expect(result.status).toBe(0); // result test
            expect(result.body).not.toBe(null); // result test
            expect(result.body).toEqual('fail to fetch address'); // result test
      });
});
