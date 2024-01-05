import { useQuery } from 'react-query';

export const useFetchHabits = () => {
  return useQuery('habits', async () => {
    const response = await fetch('http://192.168.1.97:3000/habits/getHabits/1')
    const data = await response.json();
    console.log(data.userHabits);
    
    return data;
    
  });
};