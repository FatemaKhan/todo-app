import jwtDecode from "jwt-decode";
import http from "./httpService";
// import { apiUrl } from "../config.json";

const apiUrl = "http://localhost:5000";
const userApi = apiUrl + "/user";
const tokenKey = "sessionToken";

http.setJwt(getJwt());

export function login(email, password) {
  const apiEndpoint = userApi + "/login";
  return http.post(apiEndpoint, { email, password });
}

export function getCurrentUserById(_id) {
  const apiEndpoint = userApi + "/id";
  return http.post(apiEndpoint, { _id });
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function signup(user) {
  console.log(user);
  const apiEndpoint = userApi + "/register";
  return http.post(apiEndpoint, user);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
  getCurrentUserById,
  signup,
};
