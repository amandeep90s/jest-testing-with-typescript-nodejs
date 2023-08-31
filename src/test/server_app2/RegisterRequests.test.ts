import { DataBase } from '../../app/server_app/data/DataBase';
import {
  HTTP_CODES,
  HTTP_METHODS,
} from '../../app/server_app/model/ServerModel';
import { Server } from '../../app/server_app/server/Server';
import { RequestTestWrapper } from './test_utils/RequestTestWrapper';
import { ResponseTestWrapper } from './test_utils/ResponseTestWrapper';

jest.mock('../../app/server_app/data/DataBase');

const requestWrapper = new RequestTestWrapper();
const responseWrapper = new ResponseTestWrapper();

const fakeServer = {
  listen: () => {},
  close: () => {},
};

jest.mock('http', () => ({
  createServer: (cb: Function) => {
    cb(requestWrapper, responseWrapper);
    return fakeServer;
  },
}));

describe('Register requests test suite', () => {
  afterEach(() => {
    requestWrapper.clearFields();
    responseWrapper.clearFields();
  });

  it('should register new users', async () => {
    requestWrapper.method = HTTP_METHODS.POST;
    requestWrapper.body = {
      userName: 'someUserName',
      password: 'somePassword',
    };
    requestWrapper.url = 'localhost:8080/register';

    jest.spyOn(DataBase.prototype, 'insert').mockResolvedValueOnce('123');

    await new Server().startServer();

    await new Promise(process.nextTick);

    expect(responseWrapper.statusCode).toBe(HTTP_CODES.CREATED);
    expect(responseWrapper.body).toEqual(
      expect.objectContaining({
        userId: expect.any(String),
      })
    );
  });
});
