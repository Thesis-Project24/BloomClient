import { useMutation, useQuery } from "react-query";
import axios from "axios";

export const useFetchHabits = () => {
  return useQuery("habits", async () => {
    const response = await axios.get(
      "http://172.20.0.79:3000/habits/getAllHabits"
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
        "http://172.20.0.79:3000/habits/assignHabit",
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

export const useFetchHabitsUser = ()=>{
  try{
    return useQuery('habitsUser', async () => {
      const response = await axios.get(
        "http://172.20.0.79:3000/habits/getHabits/1"
      );
      const data = response.data;
      console.log(data.userHabits);
  
      return data;
    })
  }catch  (error) {
    console.error("error  habit :", error);
  }
}