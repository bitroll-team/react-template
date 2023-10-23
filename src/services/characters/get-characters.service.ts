import { character } from "@/types/entities";
import { AxiosError } from "axios";

import { axiosInstance } from "../axios-client";

export type getCharactersResponse = {
  message: string;
  info: {
    next: number | null;
  };
  results: character[];
};

export const getCharactersService = async ({
  pageParam = 1
}): Promise<getCharactersResponse> => {
  try {
    const { data } = await axiosInstance.get(`/character/?page=${pageParam}`);

    const parsedResponse: getCharactersResponse = {
      message: "Characters were successfully retrieved",
      info: {
        next: data.info.next.split("=")[1]
      },
      results: [...data.results]
    };

    return parsedResponse;
  } catch (error) {
    let errorToShow = "There was an error getting the characters";

    if (error instanceof AxiosError) {
      const { message } = error.response?.data || "";
      errorToShow = message || errorToShow;
    }

    throw new Error(errorToShow);
  }
};
