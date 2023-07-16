import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// base url
const secureAuth = axios.create({
  baseURL: "https://job-task-server.onrender.com",
});

// access token send to server and secure to apis
const useSecureAuth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    secureAuth.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    secureAuth.interceptors.response.use(
      (response) => response,
      async (err) => {
        if (
          err.response &&
          (err.response.status === 500 || err.response.status === 403)
        ) {
          navigate("/");
        }
        return Promise.reject(err);
      }
    );
  }, [navigate]);

  return { secureAuth };
};

export default useSecureAuth;
