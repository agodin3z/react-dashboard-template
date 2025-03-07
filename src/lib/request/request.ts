import axios from 'axios';

import errorHandler from './error-handler';
import successHandler from './success-handler';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.baseURL = API_BASE_URL;
axios.defaults.withCredentials = true;

const request = {
  /**
   * Creates a new resource using the provided endpoint and JSON data.
   *
   * @param {Object} options - The options for creating the resource.
   * @param {string} options.endpoint - The endpoint to send the POST request to.
   * @param {Object} options.body - The JSON data to send in the request body.
   * @param {AbortSignal} options.signal - The signal to abort the request.
   * @return {Promise} A promise that resolves to the created resource data, or rejects with an error.
   */
  create: async ({
    endpoint,
    body,
    signal,
  }: {
    endpoint: string;
    body: object;
    signal?: AbortSignal;
  }): Promise<any> => {
    try {
      const response = await axios.post(endpoint, body, { signal });
      successHandler(response, {
        notifyOnSuccess: true,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  /**
   * Reads data from the specified endpoint using the provided ID.
   *
   * @param {Object} options - The options object.
   * @param {string} options.endpoint - The endpoint URL.
   * @param {string} options.id - The ID of the data to read.
   * @param {AbortSignal} options.signal - The signal to abort the request.
   * @return {Promise<any>} The response data.
   */
  read: async ({
    endpoint,
    id,
    signal,
  }: {
    endpoint: string;
    id: string | number;
    signal?: AbortSignal;
  }): Promise<any> => {
    try {
      const response = await axios.get(`${endpoint}/${id}`, { signal });
      successHandler(response, {
        notifyOnSuccess: false,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  /**
   * Updates the data at the specified endpoint with the provided JSON data.
   *
   * @param {Object} options - The options for the update operation.
   * @param {string} options.endpoint - The endpoint to update the data.
   * @param {string} options.id - The ID of the data to update.
   * @param {Object} options.body - The JSON data to update.
   * @param {AbortSignal} options.signal - The signal to abort the request.
   * @returns {Promise<any>} The updated data.
   */
  update: async ({
    endpoint,
    id,
    body,
    signal,
  }: {
    endpoint: string;
    id: string | number;
    body: object;
    signal?: AbortSignal;
  }): Promise<any> => {
    try {
      const response = await axios.patch(`${endpoint}/${id}`, body, { signal });
      successHandler(response, {
        notifyOnSuccess: true,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  /**
   * Delete a resource by its ID from the specified endpoint.
   *
   * @param {Object} options - An object containing the endpoint and ID of the resource.
   * @param {string} options.endpoint - The API endpoint to send the delete request to.
   * @param {string} options.id - The ID of the resource to delete.
   * @param {AbortSignal} options.signal - The signal to abort the request.
   * @return {Promise<any>} A promise that resolves to the data returned by the API after the resource is deleted.
   */
  delete: async ({
    endpoint,
    id,
    signal,
  }: {
    endpoint: string;
    id: string | number;
    signal?: AbortSignal;
  }): Promise<any> => {
    try {
      const response = await axios.delete(`${endpoint}/${id}`, { signal });
      successHandler(response, {
        notifyOnSuccess: true,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  /**
   * Retrieves a list of items from the specified API endpoint.
   *
   * @param {Object} options - An object containing the following properties:
   * @param {string} options.endpoint - The URL of the API endpoint.
   * @param {Object} options.options - Additional options for the API request (optional).
   * @param {AbortSignal} options.signal - The signal to abort the request.
   * @return {Promise} A promise that resolves to the list of items from the API.
   */
  list: async ({
    endpoint,
    options = {},
    signal,
  }: {
    endpoint: string;
    options?: object;
    signal?: AbortSignal;
  }): Promise<any> => {
    try {
      const response = await axios.get(endpoint, {
        params: options,
        signal,
      });

      successHandler(response, {
        notifyOnSuccess: false,
        notifyOnFailed: false,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  /**
   * Sends a POST request to the specified endpoint with the provided JSON data.
   *
   * @param {Object} params - An object containing the following parameters:
   * @param {string} params.endpoint - The URL endpoint to send the request to.
   * @param {Object} params.body - The JSON data to send in the request body.
   * @param {Object} params.options - Additional options for the API request (optional).
   * @param {AbortSignal} params.signal - The signal to abort the request.
   * @return {Promise<any>} A promise that resolves with the response data from the server, or rejects with an error.
   */
  post: async ({
    endpoint,
    body,
    options,
    signal,
  }: {
    endpoint: string;
    body: object;
    options?: object;
    signal?: AbortSignal;
  }): Promise<any> => {
    try {
      const response = await axios.post(endpoint, body, { ...options, signal });

      return response;
    } catch (error) {
      return errorHandler(error);
    }
  },

  /**
   * Retrieves data from the server using the GET method.
   *
   * @param {string} endpoint - The URL endpoint to send the request to.
   * @param {AbortSignal} signal - The signal to abort the request.
   * @return {Promise<any>} The response data from the server.
   */
  get: async (endpoint: string, signal?: AbortSignal): Promise<any> => {
    try {
      const response = await axios.get(endpoint, { signal });
      return response;
    } catch (error) {
      return errorHandler(error);
    }
  },

  /**
   * Sends a PUT request to the specified endpoint with the provided JSON data.
   *
   * @param {Object} options - An object containing the following parameters:
   * @param {string} options.endpoint - The URL of the endpoint to send the PATCH request to.
   * @param {Object} options.body - The JSON data to send in the PATCH request body.
   * @param {AbortSignal} options.signal - The signal to abort the request.
   * @return {Promise<any>} A Promise that resolves to the response data if the request is successful, or rejects with an error if the request fails.
   */
  put: async ({
    endpoint,
    body,
    signal,
  }: {
    endpoint: string;
    body: object;
    signal?: AbortSignal;
  }): Promise<any> => {
    try {
      const response = await axios.put(endpoint, body, { signal });
      successHandler(response, {
        notifyOnSuccess: true,
        notifyOnFailed: true,
      });
      return response;
    } catch (error) {
      return errorHandler(error);
    }
  },

  /**
   * Returns an AbortController instance.
   */
  source: (): AbortController => {
    return new AbortController();
  },
};
export default request;
