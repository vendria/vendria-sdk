import axios, { AxiosInstance } from 'axios';

/**
 * Configuration for Axios client.
 */
export const createAxiosInstance = (token: string, apiUrl?: string): AxiosInstance => {
    if (!token) {
        console.error("TOKEN IS REQUIRED");
    }

    return axios.create({
        baseURL: apiUrl || `https://vendria.com.br/api/v1`,
        headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json',
        },
    });
};
