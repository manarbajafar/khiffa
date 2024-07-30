import { environment } from '../../../src/environments/environment';
const BASEURL = environment.api;

export const AUTH = {
  login: BASEURL + 'login',
  register: BASEURL + 'register',
  logout: BASEURL + 'logout',
  update: BASEURL + 'update',
  users: BASEURL + 'users',
  resetPassword: BASEURL + 'login/reset',
  sendOtp: BASEURL + 'send',
  checkOtp: BASEURL + 'CheckOtp',
}

export const ADMIN_DASHBOARD = {
  countServiceProvidersByCompany: BASEURL + 'countServiceProvidersByCompany',
  countOrderByCompany: BASEURL + 'countOrderByCompany?',
  countAllOrder: BASEURL + 'countAllOrder',
  index: BASEURL + 'index', //?
  timeline: BASEURL + 'Timeline',
  countDelivery: BASEURL + 'countDelivery',
  getAllOrders: BASEURL + 'orders',
}

export const admin = {
  changeAccountStatus: BASEURL + 'changeAccountStatus',
  showInfoAccountReq: BASEURL + 'showInfoAccountReq?user_id=3',
  accountRequests: BASEURL + 'accountRequests',


}

