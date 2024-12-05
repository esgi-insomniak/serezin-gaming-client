import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from '@/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { initAxiosInterceptors } from '@/libs/api/custom/axios.interceptors.ts';

function App() {
  const queryClient = new QueryClient();
  initAxiosInterceptors();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
