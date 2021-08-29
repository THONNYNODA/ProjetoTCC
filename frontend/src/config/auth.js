

export const TOKEN_KEY = "sistemToken";
export const USUARIO = "sistemUsuario";
export const PERMISSON = "sistemPermisson";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUsuario = () => localStorage.getItem(USUARIO);
export const getPermisson = () => localStorage.getItem(PERMISSON);



export const login = (token,usuario,permission) => { 

  localStorage.setItem(USUARIO, usuario);
  localStorage.setItem(PERMISSON, permission);
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USUARIO);
  localStorage.removeItem(PERMISSON);
};