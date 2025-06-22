import axios from 'axios';

const API_BASE_URL = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/albums/top`);
    return response.data;
  } catch (error) {
    console.error("Error fetching top albums:", error);
    throw error;
  }
};

export const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/albums/new`);
    return response.data;
  } catch (error) {
    console.error("Error fetching new albums:", error);
    throw error;
  }
};
