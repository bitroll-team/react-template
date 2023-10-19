import { ENVIRONMENT } from "@/config/environment";
import axios, { AxiosInstance } from "axios";

export class HttpClient {
  private static axiosInstance: AxiosInstance;

  static getAxiosInstance(): AxiosInstance {
    if (!this.axiosInstance) {
      this.axiosInstance = axios.create({
        baseURL: ENVIRONMENT.API_BASE_URL,
        withCredentials: true
      });
    }

    return this.axiosInstance;
  }
}
