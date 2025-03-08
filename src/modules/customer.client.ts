import { AxiosInstance } from 'axios';

export type CustomerOrigin = "WHATSAPP" | "INSTAGRAM";

export interface CreateCustomerParams {
    name: string;
    cpf: string;
    phoneNumber: string;
    origin: CustomerOrigin;
}

export interface Customer {
    id: string;
    name: string;
    cpf: string;
    phoneNumber: string;
    origin: CustomerOrigin;
}

export class CustomerClient {
    private client: AxiosInstance;
    private onError?: (error: unknown) => void;

    constructor(client: AxiosInstance, onError?: (error: unknown) => void) {
        this.client = client;
        this.onError = onError;
    }

    async create(params: CreateCustomerParams): Promise<Customer> {
        try {
            const response = await this.client.post<{ customer: Customer }>('/customers', params);
            return response.data.customer;
        } catch (error) {
            if (this.onError) this.onError(error);
            throw error;
        }
    }
}
