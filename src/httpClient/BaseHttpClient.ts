import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export class BaseHttpClient {
  private http: AxiosInstance

  constructor(baseUri: string) {
    this.http = axios.create({
      baseURL: baseUri,
      timeout: 30000,
      responseType: 'json'
    })

    this.http.interceptors.response.use(this.handleSuccess, this.handleError)
  }

  public get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    return this.http.get<T>(url, options).then(this.getData)
  }

  public getResponse<T>(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.http.get<T>(url, options)
  }

  public postResponse<T>(url: string, data?: unknown, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.http.post<T>(url, data, options)
  }

  public post<T>(url: string, data?: unknown, options?: AxiosRequestConfig): Promise<T> {
    return this.http.post(url, data, options).then(this.getData)
  }

  public createAuthHeader = (token: string): AxiosRequestConfig => {
    return {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }
  }

  private getData<T>(response: AxiosResponse<T>): T {
    return response.data
  }

  private handleSuccess(response: AxiosResponse): AxiosResponse {
    return response
  }

  private handleError = (error: AxiosError): Promise<AxiosError> => {
    if (error && error.response) {
      const { data } = error.response
      if (data) return Promise.reject(data)
    }

    return Promise.reject(error)
  }
}