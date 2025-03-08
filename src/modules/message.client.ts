import { AxiosInstance } from 'axios';
import { MessageResponse } from '../types';

export interface SendMessageParams {
    customerId: string
    messages: Message[]
}

export type MessageType = "text"

export interface Message {
    type: MessageType;
    content: string;
}

export class MessageClient {
    private client: AxiosInstance;
    private onError?: (error: unknown) => void;

    constructor(client: AxiosInstance, onError?: (error: unknown) => void) {
        this.client = client;
        this.onError = onError;
    }

    /**
     * Sends a text message.
     */
    async sendMessage(params: SendMessageParams): Promise<MessageResponse> {
        try {
            const response = await this.client.post<MessageResponse>('/messages', params);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    // Error handling utility (can be expanded)
    private handleError(error: unknown) {
        if (this.onError) {
            this.onError(error);
        } else {
            console.error('Error:', error);
        }
    }
}