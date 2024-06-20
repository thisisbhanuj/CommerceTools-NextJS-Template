import {
    ClientBuilder,
    
    type Client,
    type AuthMiddlewareOptions,
    type HttpMiddlewareOptions
   } from '@commercetools/sdk-client-v2';
  
  // Configure httpMiddlewareOptions
  const httpMiddlewareOptions: HttpMiddlewareOptions = {
    host: process.env.CTP_API_URL ?? 'https://api.australia-southeast1.gcp.commercetools.com',
    fetch,
  };
  
  // Export the ClientBuilder
  export function ctpClient(
    projectKey: string,
    clientID: string,
    clientSecret: string,
    scopes?: string
  ): Client {
    const _scopes = scopes?.split(',');
    const authMiddlewareOptions: AuthMiddlewareOptions = {
      host: process.env.CTP_AUTH_URL ?? 'https://auth.australia-southeast1.gcp.commercetools.com',
      projectKey: projectKey,
      credentials: {
        clientId: clientID,
        clientSecret: clientSecret,
      },
      scopes: _scopes,
      fetch,
    };
  
    return new ClientBuilder()
      .withProjectKey(projectKey) // .withProjectKey() is not required if the projectKey is included in authMiddlewareOptions
      .withHttpMiddleware(httpMiddlewareOptions)
      .withClientCredentialsFlow(authMiddlewareOptions)
      .withLoggerMiddleware()
      .build();
}