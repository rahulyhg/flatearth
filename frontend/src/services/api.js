// @flow

// TODO depend on deploying set global environment
// const BASE_URL: ?string = process.env.REACT_APP_BASE_URL;

type UserAuthType = {
  _id: string,
  email: string,
  name: string,
  role: string
};

type LoggedInSuccessType = {
  status: 'success',
  message: {
    token: string,
    user: UserAuthType
  }
};

type LoggedInErrorType = {
  status: 'error',
  message: string
};

type LoggedInType = LoggedInSuccessType | LoggedInErrorType;

type ApiDefaultConfigType = {
  method: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT',
  headers: {
    [string]: string
  },
  body?: string
};

class Api {
  url: string;
  _token: string;
  user: UserAuthType;
  defaultConfig: ApiDefaultConfigType;
  headers: {};

  constructor(url: string) {
    this.url = url;
    this.headers = {};
    this.defaultConfig = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      }
    };
  }

  sendCoordinates({ coordinates }: { token: string, coordinates: string }) {
    return this.fetch(`${this.url}/profile/coordinates`, { coordinates });
  }

  signin({ user, password }: { user: string, password: string }): Promise<LoggedInType> {
    return this.fetch(`${this.url}/auth/login`, { user, password });
  }

  signup({ user, email, password }: { user: string, email: string, password: string }): Promise<*> {
    if (process.env.__DEV__) {
      console.log(user, email, password);
    }
    return this.fetch(`${this.url}/auth/signup`, {
      email,
      user,
      password
    });
  }

  setHeaders(headerName: string, headerValue: string): void {
    this.headers[headerName] = headerValue;
  }

  fetch(url: string, options: Object) {
    const token = localStorage.getItem('token');
    if (token) {
      this.setHeaders('Authorization', `Bearer ${token}`);
    }
    const config = {
      ...this.defaultConfig,
      headers: { ...this.defaultConfig.headers, ...this.headers },
      body: JSON.stringify(options)
    };

    return fetch(url, config).then(response => response.json()).catch(e => e);
  }

  static createApi() {
    const url: string = `/api/v1`;
    return new Api(url);
  }
}

export default Api.createApi();
