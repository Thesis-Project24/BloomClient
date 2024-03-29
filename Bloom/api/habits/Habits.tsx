import { useMutation, useQuery } from "react-query";
import axios, { AxiosResponse } from "axios";

// {all habits Fetcher } //
export const useFetchHabits = () => {
  return useQuery("habits", async () => {
    const response = await axios.get(
      `http://${process.env.EXPO_PUBLIC_ipadress}:3000/habits/getAllHabits`
    );
    const data = response.data;
    console.log(data.userHabits);
    return data;
  });
};

export const useAssignHabit = () => {
  const assignHabitMutation = useMutation(
    async ({ habitId, userId }: { habitId: number; userId: number }) => {
      const response = await axios.post(
        `http://${process.env.EXPO_PUBLIC_ipadress}:3000/habits/assignHabit`,
        {
          habitId,
          userId,
        }
      );
      return response.data;
    }
  );
  const assignHabit = async (habitId: number, userId: number) => {
    try {
      await assignHabitMutation.mutateAsync({ habitId, userId });
    } catch (error) {
      console.error("error assigning habit :", error);
    }
  };
  return { assignHabit, isAssigning: assignHabitMutation.isLoading };
};
// { user Habit fetcher } //
export const useFetchHabitsUser = (id:number) => {
  
  return useQuery({
    queryKey: [id],
    queryFn: async () => {
      const response = await axios.get(
        `http://${process.env.EXPO_PUBLIC_ipadress}:3000/habits/getHabits/${id}`
      );
      const data = response.data;

      return data;
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
// {multi habit assigning } //
export const useAssignMultiHabits = () => {
  const assignMultiHabitsMutation = useMutation(
    async ({ userId, habitIds }: { userId: number; habitIds: number[] }) => {
      const response = await axios.post(
        `http://${process.env.EXPO_PUBLIC_ipadress}:3000/habits/assignMultiHabits`,
        {
          userId,
          habitIds,
        }
      );
      return response.data;
    }
  );

  const assignMultiHabits = async (userId: number, habitIds: number[]) => {
    try {
      await assignMultiHabitsMutation.mutateAsync({ userId, habitIds });
    } catch (error) {
      console.error("err assigning multiple habitsssss", error);
    }
  };

  return {
    assignMultiHabits,
    isAssigningMultipleHabits: assignMultiHabitsMutation.isLoading,
  };
};
//  {delete assignement } //

export const useDeleteHabit = () => {
  return useMutation(
    async ({
      userHabitId,
      userId,
    }: {
      userHabitId: number;
      userId: number;
    }) => {
      const response = await axios.delete(
        `http://${process.env.EXPO_PUBLIC_ipadress}:3000/habits/deleteAssignedHabit`,
        {
          data: { userHabitId, userId },
        }
      );
      return response.data;
    }
  );
};
// {Sending tracker} //
export const useSubmitSatisfaction = () => {
  return useMutation(
    async ({
      userHabitId,
      userId,
      rating,
    }: {
      userHabitId: number;
      userId: number;
      rating: number;
    }) => {
      console.log(rating, "test");

      const response = await axios.put(
        `http://${process.env.EXPO_PUBLIC_ipadress}:3000/habits/satisHabit`,
        { userHabitId, userId, rating }
      );
      return response.data;
    }
  );
};
