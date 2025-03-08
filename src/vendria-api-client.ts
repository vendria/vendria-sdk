import { createAxiosInstance } from './config';
import { BaseClientConfig } from './types';
import { MessageClient } from './modules/message.client';
import { CustomerClient } from './modules/customer.client';


export class VendriaApiClient {
    public messages: MessageClient;
    public customers: CustomerClient;

    constructor(config: BaseClientConfig) {
        const axiosInstance = createAxiosInstance(config.token, config.apiUrl);

        this.messages = new MessageClient(axiosInstance, config.onError);
        this.customers = new CustomerClient(axiosInstance, config.onError);
    }
}
