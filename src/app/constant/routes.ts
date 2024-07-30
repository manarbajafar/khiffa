import { environment } from '../../../src/environments/environment';
const BASEURL = environment.api;

//for every module
export const auth = {
  login: BASEURL + 'login',
  register: BASEURL + 'register',
  logout: BASEURL + 'logout',
  update: BASEURL + 'update',
  users: BASEURL + 'users',
  resetPassword: BASEURL + 'login/reset',
  sendOtp: BASEURL + 'send',
  checkOtp: BASEURL + 'CheckOtp',
}

export const admin_dashboard = {
  countServiceProvidersByCompany: BASEURL + 'countServiceProvidersByCompany',
  countOrderByCompany: BASEURL + 'countOrderByCompany?',
  countAllOrder: BASEURL + 'countAllOrder',
  index: BASEURL + 'index', //?
  timeline: BASEURL + 'Timeline',
  countDelivery: BASEURL + 'countDelivery',
  getAllOrders: BASEURL + 'orders',
}
