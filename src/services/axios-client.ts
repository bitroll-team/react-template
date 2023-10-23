import { ENVIRONMENT } from "@/config/environment";
import axios, { AxiosInstance } from "axios";

class HttpClient {
  private static axiosInstance: AxiosInstance;

  static getAxiosInstance(): AxiosInstance {
    if (!this.axiosInstance) {
      this.axiosInstance = axios.create({
        baseURL: ENVIRONMENT.API_BASE_URL
        // withCredentials: true
      });
    }

    return this.axiosInstance;
  }
}

export const axiosInstance = HttpClient.getAxiosInstance();
