/* eslint-disable import/no-anonymous-default-export */
import { ctpClient } from './ClientBuilder';

import {
  createApiBuilderFromCtpClient,
  ByProjectKeyRequestBuilder
} from '@commercetools/platform-sdk';

export type Credentials = {
  projectKey: string;
  clientID: string;
  clientSecret: string;
  baseUrl?: string;
  scopes?: string;
};

export default function apiRoot({
  projectKey,
  clientID,
  clientSecret,
  scopes,
  baseUrl
}: Credentials): ByProjectKeyRequestBuilder {
    if (!projectKey || !clientID || !clientSecret) {
        throw new Error(`Please provide valid credentials ${projectKey} ${clientID} ${clientSecret}`);
    }

    return createApiBuilderFromCtpClient(
        ctpClient(projectKey, clientID, clientSecret, scopes), 
        baseUrl
    ).withProjectKey({ projectKey });
}