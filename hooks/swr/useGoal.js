import useSWR from 'swr'
import { GOAL } from 'constants/queryKeys';
import { mutate } from 'swr';
import { addGoal, getGoalsList, getGoalDetails, updateGoal, deleteGoal, randomGoal, likeGoal } from 'api/goalService';

export const useGoalsList = (filter) => {
  const fetcher = () => getGoalsList(filter);
  const { data, error, mutate } = useSWR([GOAL.LIST, JSON.stringify(filter)], fetcher);
  return {
    goalsList: data,
    isLoading: !error && !data,
    isError: error,
    mutate
  };
};

export const useGoalDetails = (goalId, shouldFetch) => {
  const fetcher = shouldFetch ? () => getGoalDetails(goalId) : null;
  const { data, error, mutate } = useSWR(shouldFetch ? `${GOAL.ID}_${goalId}` : null, fetcher);
  return {
    goalDetails: data,
    isLoading: !error && !data,
    isError: error,
    mutate
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

export const useRandomGoal = () => {
  const randomGoalFuntion = async (newGoalData) => {
    try {
      const res = await randomGoal(newGoalData);
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
  return randomGoalFuntion;
};

export const useLikeGoal = () => {
  const likeGoalFuntion = async (id) => {
    try {
      const res = await likeGoal(id);
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
  return likeGoalFuntion;
};

export const useUpdateGoal = () => {
  const updateGoalFuncion = async (goalId, updatedGoalData) => {
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

export const useDeleteGoal = () => {
  const deleteGoalFunction = async (goalId) => {
    try {
      await deleteGoal(goalId);
      return {
        isSuccess: true
      };
    } catch (error) {
      return {
        isSuccess: false,
        error: error
      };
    }
  };

  return deleteGoalFunction;
};
