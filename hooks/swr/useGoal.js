import useSWR from 'swr'
import { GOAL } from 'constants/queryKeys';
import { mutate } from 'swr';
import { addGoal, getGoalsList } from 'api/goalService';

export const useGoalsList = (filter) => {
  const fetcher = () => getGoalsList(filter);
  const { data, error } = useSWR([GOAL.LIST, JSON.stringify(filter)], fetcher);
  return {
    goalsList: data,
    isLoading: !error && !data,
    isError: error
  };
};

export const useGoalDetails = (goalId) => {
  const fetcher = () => goalsService.getGoalDetails(goalId);
  const { data, error } = useSWR(`${GOAL.ID}_${goalId}`, fetcher);
  return {
    goalDetails: data,
    isLoading: !error && !data,
    isError: error
  };
};


export const useAddGoal = () => {
  const addNewGoal = async (newGoalData) => {
    try {
      const res = await addGoal(newGoalData);
      return {
        isSuccess: true,
        data: res
      }
    } catch (error) {
      return {
        isSuccess: false
      };
    }
  };
  return addNewGoal;
};

export const updateGoal = async (goalId, updatedGoalData) => {
  try {
    const updatedGoal = await goalsService.updateGoal(goalId, updatedGoalData);
    mutate(`${GOAL.ID}_${goalId}`);
    mutate(GOAL.LIST);
    return updatedGoal;
  } catch (error) {
    console.error("Failed to update goal:", error);
    throw error;
  }
};

export const deleteGoal = async (goalId) => {
  try {
    await goalsService.deleteGoal(goalId);
    mutate(GOAL.LIST);
  } catch (error) {
    console.error("Failed to delete goal:", error);
    throw error;
  }
};
