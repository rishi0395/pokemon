import axios from "axios";

const API_BASE_URL = "https://note-server-fbej.onrender.com/extension/v1";

export const URLS = {
  fetchItems: `${API_BASE_URL}/fetch`,
  deleteAllItems: `${API_BASE_URL}/deleteAll`,
  saveItem: `${API_BASE_URL}/saveItem`,
};

export const fetchItems = async () => {
  try {
    const response = await axios.get(URLS.fetchItems);
    return response.data;
  } catch (error) {
    return [];
  }
};

export const deleteAllItems = async () => {
  try {
    const response = await axios.delete(URLS.deleteAllItems);
    return response.data;
  } catch (error) {
    return false;
  }
};

export const saveItem = async (reqBody) => {
  try {
    const response = await axios.post(URLS.saveItem, reqBody);
    return response.data;
  } catch (error) {
    return [];
  }
};
