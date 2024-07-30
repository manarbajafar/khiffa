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
  regeion : BASEURL + 'orders/city'
}


export const Order = {




  getorder: BASEURL + 'orders',

  assign: BASEURL + 'orders/assign',
  //filter: BASEURL + 'orders/filter',


  updateStatus: BASEURL + "orders/status?order_id=",


  details:  BASEURL + "orders/order?order_id="
};

export const TRANSACTION ={

  requestTransaaction: BASEURL + "transactions",
  sendTransactions: BASEURL + "sendTransactions",
  showTransactions : BASEURL + "showTransactions"

}

export const DRIVERPROFILE ={
  profile: BASEURL + "profile",
  wallet : BASEURL + "wallet",
  tickets : BASEURL + "tickets"
  
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

