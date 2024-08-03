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

  requestTransaaction: BASEURL + "transactions1",
  sendTransactions: BASEURL + "sendTransactions",
  showTransactions : BASEURL + "showTransactions"
}

export const DRIVERPROFILE ={
  profile: BASEURL + "profile",
  wallet : BASEURL + "wallet",
  tickets : BASEURL + "tickets"

}


export const ADMIN_DASHBOARD = {
  getAllOrders: BASEURL + 'orders',
  getDashboardData: BASEURL + 'dashboard?',
}

export const ADMIN_MANAGING_DELIVERYMANS = {
  changeAccountStatus: BASEURL + 'changeAccountStatus',
  showInfoAccountReq: BASEURL + 'showInfoAccountReq?user_id=',
  getAccountRequests: BASEURL + 'accountRequests?',
  getDeliverymanList: BASEURL + 'users',  //users?page=1&perPage=2
}


export const ADMIN_WALLET = {
  sendTransactions: BASEURL + 'sendTransactions',
  showTransactions: BASEURL + 'showTransactions',
  getLatestTransaction : BASEURL + 'paginatingLsTrsn',
}


export const ADMIN_TECHNICAL_SUPPORT = {
  countTicketStatuses : BASEURL + 'ticketStatuses',
  countAllTicket : BASEURL + 'countAllTicket',
  showAllTickets: BASEURL + 'paginatingTicket',
  filterTickets: BASEURL + 'showTicket',
  changeTicketStatus: BASEURL + 'changeTicketStatus',
}
