import { environment } from '../../../src/environments/environment';
const BASEURL = environment.api;

//for every module
export const auth = {
  login: BASEURL + 'login',
  register: BASEURL + 'register',
  logout: BASEURL + 'logout',
  update: BASEURL + 'update',
  users: BASEURL + 'users',
}

export const admin_dashboard = {
  // http://192.168.8.197:8000/api/login
}
