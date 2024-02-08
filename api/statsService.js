import axiosClient from "./axiosClient";

export const statsService = async () => {
  try {
    const response = await axiosClient.post('/stats');
    return response;
  } catch (error) {
    console.error('Error logging in:', error.response);
    throw error;
  }
};
