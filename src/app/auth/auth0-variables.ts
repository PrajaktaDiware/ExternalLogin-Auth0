interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'BgQqhG95oKOzBndI5PEpT34KD3kUHOLg',
  domain: 'asocial.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
