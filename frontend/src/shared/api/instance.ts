import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const clientApi = axios.create({
  baseURL: process.env.BASE_BACKEND_URL,
  withCredentials: true,
});

clientApi.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      redirect('/login');
    }

    return Promise.reject(error);
  },
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
