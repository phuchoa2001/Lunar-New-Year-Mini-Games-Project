import axiosClient from "./axiosClient";

// Lấy danh sách mục tiêu với phân trang
export const getGoalsList = async (filter) => {
  try {
    const response = await axiosClient.get('/goals', {
      params: {
        ...filter,
        filter: JSON.stringify(filter.filter)
      }
    });
    return response;
  } catch (error) {
    console.error('Failed to fetch goals list:', error.response);
    throw error;
  }
};

// Lấy chi tiết một mục tiêu cụ thể
export const getGoalDetails = async (goalId) => {
  try {
    const response = await axiosClient.get(`/goals/${goalId}`);
    return response;
  } catch (error) {
    console.error(`Failed to fetch details for goal ${goalId}:`, error.response);
    throw error;
  }
};

// Thêm một mục tiêu mới
export const addGoal = async (newGoalData) => {
  try {
    const response = await axiosClient.post('/goals', newGoalData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Cập nhật mục tiêu
export const updateGoal = async (goalId, updatedGoalData) => {
  try {
    const response = await axiosClient.put(`/goals/${goalId}`, updatedGoalData);
    return response.data;
  } catch (error) {
    console.error(`Failed to update goal ${goalId}:`, error.response);
    throw error;
  }
};

// Xóa mục tiêu
export const deleteGoal = async (goalId) => {
  try {
    const response = await axiosClient.delete(`/goals`, {
      data: {
        ids: [goalId]
      }
    });
    return response;  // Hoặc trả về giá trị cụ thể nếu API không trả về dữ liệu
  } catch (error) {
    console.error(`Failed to delete goal ${goalId}:`, error.response);
    throw error;
  }
};

// mục tiêu ngẫu nhiên
export const randomGoal = async (userId) => {
  try {
    const response = await axiosClient.get(`/goals/random`, {
      params: {
        userId
      }
    });
    return response;
  } catch (error) {
    console.error(`Failed to delete goal ${goalId}:`, error.response);
    throw error;
  }
};

// thích mục tiêu
export const likeGoal = async (id) => {
  try {
    const response = await axiosClient.post(`/goals/${id}/like`);
    return response;
  } catch (error) {
    throw error;
  }
};