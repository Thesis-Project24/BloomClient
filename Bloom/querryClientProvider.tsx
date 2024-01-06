import { QueryClient, QueryClientProvider } from 'react-query';
// import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
export const TanstackProvider = ({children}:{children:React.ReactNode}) => {
    const queryClient=new QueryClient(); 
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  );
}