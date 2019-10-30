import axios from 'axios';
import { AxiosInstance } from 'axios';
import { ErrorHandler } from '@angular/core';
import { Injectable } from '@angular/core';

export interface Params {
    [ key: string ]: any;
}

export interface GetOptions {
    url: string;
    params?: Params;
}

export interface ErrorResponse {
    id: string;
    code: string;
    message: string;
}

@Injectable({
    providedIn: 'root'
})
export class ApiClient {

    private axiosClient: AxiosInstance;
    private errorHandler: ErrorHandler;

    // I initialize the ApiClient.
    constructor( errorHandler: ErrorHandler ) {

        this.errorHandler = errorHandler;

        // The ApiClient wraps calls to the underlying Axios client.
        this.axiosClient = axios.create({
            timeout: 3000,
            headers: {
              'Access-Control-Allow-Origin': '*',
			        'Accept': 'application/json',
			        'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: function(obj) {
              var str = [];
              for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
              debugger;
              return str.join("&");
			      }
        });

    }

    // ---
    // PUBLIC METHODS.
    // ---

    // I perform a POST request with the given options.
    public async post<T>(options: GetOptions): Promise<T> {
        try {
            const axiosResponse = await this.axiosClient.post<T>(
              options.url,
              options.params,
            );
            return(axiosResponse.data);
        } catch (error) {
            return(Promise.reject(this.normalizeError(error)));
        }

    }

    // ---
    // PRIVATE METHODS.
    // ---
    private normalizeError(error: any ): ErrorResponse {

        this.errorHandler.handleError( error );

        // NOTE: Since I'm not really dealing with a production API, this doesn't really
        // normalize anything (ie, this is not the focus of this demo).
        return({
            id: '-1',
            code: 'UnknownError',
            message: 'An unexpected error occurred.'
        });

    }

}
