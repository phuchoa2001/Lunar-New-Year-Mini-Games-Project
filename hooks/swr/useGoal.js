import useSWR from 'swr'
import { GOAL } from 'constants/queryKeys';
import { mutate } from 'swr';
import { addGoal, getGoalsList, getGoalDetails, updateGoal } from 'api/goalService';

export const useGoalsList = (filter) => {
  const fetcher = () => getGoalsList(filter);
  const { data, error } = useSWR([GOAL.LIST, JSON.stringify(filter)], fetcher);
  return {
    goalsList: data,
    isLoading: !error && !data,
    isError: error
  };
};

export const useGoalDetails = (goalId, shouldFetch) => {
  const fetcher = shouldFetch ? () => getGoalDetails(goalId) : null;
  const { data, error } = useSWR(shouldFetch ? `${GOAL.ID}_${goalId}` : null, fetcher);

  console.log("data", data);

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

export const useUpdateGoal = () => {
  const updateGoalFuncion = async (goalId, updatedGoalData) => {
    console.log("updateGoal :", goalId, updatedGoalData);
    try {
      const updatedGoal = await updateGoal(goalId, updatedGoalData);
      return {
        isSuccess: true,
        data: updatedGoal
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: error
      };
    }
  };

  return updateGoalFuncion;
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
