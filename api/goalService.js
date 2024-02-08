import axiosClient from "./axiosClient";

export const getList = async ({ idUser, confirmUser }) => {
  try {
    const response = await axiosClient.post('/idgame', {
      idUser,
      confirmUser
    });
    return response;
  } catch (error) {
    console.error('Error logging in:', error.response);
    throw error;
  }
};
