import { QueryClient } from "@tanstack/react-query";

// Create QueryClient with global error handling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
    mutations: {
      onError: (error) => {
        console.error("Global Mutation Error:", error.message);
      },
    },
  },
});

export default queryClient;
