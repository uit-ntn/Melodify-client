import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Sửa tên biến instance thành axiosInstance
const token = localStorage.getItem('token');
if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Sửa tên api thành axiosInstance
axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status === 401) {
            // Xử lý trường hợp lỗi 401 (Unauthorized) ở đây
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
