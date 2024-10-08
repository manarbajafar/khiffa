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
  assign: BASEURL + 'orders/assign?order_id=',
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
   getOldestOrderDate: BASEURL + 'minDate',
}

export const ADMIN_MANAGING_DELIVERYMANS = {
  changeAccountStatus: BASEURL + 'changeAccountStatus',
  showInfoAccountReq: BASEURL + 'showInfoAccountReq?user_id=',
  getAccountRequests: BASEURL + 'accountRequests?',
  getDeliverymanList: BASEURL + 'users',  //users?page=1&perPage=2
  rejectAccount: BASEURL + 'users/reject',

}


export const ADMIN_WALLET = {
  sendTransactions: BASEURL + 'sendTransactions',
  showTransactions: BASEURL + 'showTransactions',
  getLatestTransaction : BASEURL + 'paginatingLsTrsn',
  walletAmount: BASEURL + 'wallet',
}


export const ADMIN_TECHNICAL_SUPPORT = {
  countTicketStatuses : BASEURL + 'ticketStatuses',
  countAllTicket : BASEURL + 'countAllTicket',
  showAllTickets: BASEURL + 'paginatingTicket',
  showTicket: BASEURL + 'showTicket?id=',
  changeTicketStatus: BASEURL + 'changeTicketStatus',
}
