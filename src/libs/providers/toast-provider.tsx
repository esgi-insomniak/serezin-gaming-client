import { toast, ToastOptions } from 'react-hot-toast';
import { createContext, PropsWithChildren, useContext, useMemo } from 'react';

type ToastContextType = {
  success: (message: string) => void;
  error: (message: string) => void;
  loading: (message: string) => void;
  closeAll: () => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: PropsWithChildren) {
  const value = useMemo(
    () => ({
      success: (message: string, toastConfig?: ToastOptions) =>
        toast.success(message, toastConfig),
      error: (message: string, toastConfig?: ToastOptions) =>
        toast.error(message, toastConfig),
      loading: (message: string, toastConfig?: ToastOptions) =>
        toast.loading(message, toastConfig),
      closeAll: () => toast.dismiss()
    }),
    []
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useToaster() {
  return useContext(ToastContext);
}
