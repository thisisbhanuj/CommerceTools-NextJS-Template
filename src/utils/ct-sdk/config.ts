import { config } from "dotenv";

config();

export const enum PREFIX {
    CTP = 'CTP',
    DEV = 'DEV',
    IMPORT = 'IMPORT',
    EXPORT = 'EXPORT',
    ME = 'ME',
    STORE = 'STORE',
}

export const getConfig = (prefix: string) => {
    return {
        projectKey: process.env[prefix + '_PROJECT_KEY'] ?? '',
        clientID: process.env[prefix + '_CLIENT_ID'] ?? '',
        clientSecret: process.env[prefix + '_CLIENT_SECRET'] ?? '',
        scopes: process.env[prefix + '_SCOPES'] ?? '',
        apiUrl: process.env[prefix + '_API_URL'] ?? '',
        authUrl: process.env[prefix + '_AUTH_URL'] ?? ''
    }
}