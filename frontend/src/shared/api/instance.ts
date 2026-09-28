import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { cookies } from 'next/headers';

export const clientApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_BACKEND_URL,
  withCredentials: true,
});

clientApi.interceptors.response.use(
  response => response,
  error => error,
);

export async function getServerApi() {
  const cookie = await cookies();

  const baseURL =
    process.env.BASE_BACKEND_URL || 'http://localhost:8001/api/v1';

  const serverApi = axios.create({
    baseURL: baseURL,
    headers: {
      Cookie: cookie.toString(),
    },
  });

  return serverApi;
}

export const queryClient = new QueryClient();
