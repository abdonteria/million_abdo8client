import axios from "axios";

// تعيين رابط الـ API بناءً على بيئة التشغيل
const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL, // يحدد العنوان الأساسي للطلبات
  headers: {
    "Content-Type": "application/json",
  },
});

// إضافة Interceptors لإدارة الأخطاء أو التوكن تلقائيًا
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
