import { BrowserRouter } from 'react-router-dom';
import { Router } from '@/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { initAxiosInterceptors } from '@/libs/api/custom/axios.interceptors.ts';
import { ThemeProvider } from '@/libs/providers';

function App() {
  const queryClient = new QueryClient();
  initAxiosInterceptors();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
