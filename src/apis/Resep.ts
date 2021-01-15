import axios from "axios";
import { Masakan, DetilMasakan, KategoriResep } from "../types/Resep";

const baseUrl = "https://masak-apa.tomorisakura.vercel.app/api";

export const getResepByPage = (page: number = 1): Promise<Masakan[]> => {
  return new Promise(async (resolve, rejects) => {
    try {
      const res = await axios.get(`${baseUrl}/recipes/${page}`);
      const masakans: Masakan[] = res.data.results.map((rs: Masakan) => rs);
      resolve(masakans);
    } catch (error) {
      rejects(error);
    }
  });
};

export const getDetailResepByKey = (key: string): Promise<DetilMasakan> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${baseUrl}/recipe/${key}`);
      const detailMasakan: DetilMasakan = res.data.results;
      resolve(detailMasakan);
    } catch (error) {
      reject(error);
    }
  });
};

export const getCategoriResep = (): Promise<KategoriResep> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${baseUrl}/categorys/recipes`);
      const categories: KategoriResep = res.data.results;
      resolve(categories);
    } catch (error) {
      reject(error);
    }
  });
};

export const getResepByFilter = (filter: string): Promise<Masakan[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${baseUrl}/search/?q=${filter}`);
      const masakans: Masakan[] = res.data.results.map((rs: Masakan) => rs);
      resolve(masakans);
    } catch (error) {
      reject(error);
    }
  });
};
