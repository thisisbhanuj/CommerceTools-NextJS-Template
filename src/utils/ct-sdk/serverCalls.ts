import apiRoot from "@/utils/ct-sdk/client";
import { ClientResponse, Project } from "@commercetools/platform-sdk";
import { getConfig } from "@/utils/ct-sdk/config";

export async function fetchProjects() {
    const {apiUrl, clientID, clientSecret, projectKey, scopes} = getConfig('CTP');
    try {
        if (!apiUrl || !clientID || !clientSecret || !projectKey) {
            throw new Error('CTP configuration is missing');
        }
        const result: ClientResponse<Project> = 
            await apiRoot({
                    projectKey: projectKey,
                    clientID:  clientID,
                    clientSecret:  clientSecret,
                    baseUrl: apiUrl,
                    scopes:  scopes,
                })
            .get()
            .execute();

        if (result instanceof Error) {
            return {
                data: { error: result.message },
                status: 500
            }
        }

        return {
            data: JSON.stringify(result.body),
            status: result.statusCode
        }
    } catch(error: any) {
        console.error('Error occurred while fetching data', error);
        return {
            data: error?.message ?? 'Error occurred while fetching data',
        }
    }
}