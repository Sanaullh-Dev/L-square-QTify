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

export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/songs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching songs:", error);
    throw error;
  }
};

export const fetchGenres = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/genres`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching genres:", error);
    throw error;
  }
};
