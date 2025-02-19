// Auth helpers 
// src/utils/auth.js (Authentication Utility Functions)
export const setToken = (token) => {
    localStorage.setItem("authToken", token);
  };
  
  export const getToken = () => {
    return localStorage.getItem("authToken");
  };
  
  export const removeToken = () => {
    localStorage.removeItem("authToken");
  };
  
  export const isAuthenticated = () => {
    return !!getToken();
  };
// End of Auth helpers