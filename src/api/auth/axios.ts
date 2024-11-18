import axios from 'axios';
 
let isRefreshing = false;
const cookies = {
  get: (key: string) => {
    
}}

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});


axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response.data;
    },
    async (error: AxiosError) => {
      const originalRequest = error.config as InternalAxiosRequestConfig<any> & { _retry?: boolean };
      if (error.response?.status === RESPONSE_CODE.UNAUTHORIZED && !originalRequest._retry) {
        if (!isRefreshing) {
          if (cookies.get('refreshToken')) {
            await refreshToken();
          } else {
            Router.pathname !== '/' && Router.push({ pathname: '/', query: { isOpenLogin: true } });
          }
          originalRequest._retry = true;
          return axiosInstance(originalRequest);
        } else {
          return new Promise<AxiosResponse>((resolve, reject) => {
            failedRequestsQueue.push({ resolve, reject, config: originalRequest });
          });
        }
      }
      if (error.response?.status === RESPONSE_CODE.SERVER_ERROR) {
        return Promise.reject(error.response);
      }
      return Promise.reject(error.response);
    }
  );

  const refreshToken = async () => {
    isRefreshing = true;
    const refreshToken = cookies.get('refreshToken');
    if (refreshToken) {
      try {
        const response = await axiosInstance.post<{ refreshToken: string }, RefreshTokenResponse>(
          '/auth/refresh-token',
          { refreshToken }
        );
        if (response?.accessToken && response?.refreshToken) {
          cookies.set('access_token', response.accessToken);
          cookies.set('refreshToken', response.refreshToken);
          failedRequestsQueue.forEach((queuedRequest) => {
            if (queuedRequest.config.headers) {
              queuedRequest.config.headers.Authorization = Bearer ${response.accessToken};
              axiosInstance(queuedRequest.config)
                .then((res) => queuedRequest.resolve(res))
                .catch((err) => queuedRequest.reject(err));
            }
          });
          failedRequestsQueue = [];
        }
      } catch (error) {
        Router.push({ pathname: '/', query: { isOpenLogin: true } });
      } finally {
        isRefreshing = false;
      }
    } else {
      Router.push({ pathname: '/', query: { isOpenLogin: true } });
    }
  };

export default axiosInstance;
