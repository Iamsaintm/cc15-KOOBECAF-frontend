const ACCESS_TOKEN = "ACCESS_TOKEN";
const PATHNAME = "PATHNAME";

export const addAccessToken = (token) => localStorage.setItem(ACCESS_TOKEN, token);
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);

export const addPath = (path) => localStorage.setItem(PATHNAME, path);
export const getPath = () => localStorage.getItem(PATHNAME);
export const removePath = () => localStorage.removeItem(PATHNAME);
