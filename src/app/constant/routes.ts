import { environment } from '../../../src/environments/environment';
const BASEURL = environment.api;

//for every module
export const auth = {
  login: BASEURL + 'login',
  register: BASEURL + 'register',
  logout: BASEURL + 'logout',
  update: BASEURL + 'update',
  users: BASEURL + 'users',
  regeion : BASEURL + 'orders/city'
}

export const Order = {




  getorder: BASEURL + 'orders',

  assign: BASEURL + 'orders/assign',
  //filter: BASEURL + 'orders/filter',


  updateStatus: BASEURL + "orders/status?order_id=",


  details:  BASEURL + "orders/order?order_id="
};

export const transaction ={

  requestTransaaction: BASEURL + "transactions",
  sendTransactions: BASEURL + "sendTransactions",
  showTransactions : BASEURL + "showTransactions"

}

export const driverProfile ={
  profile: BASEURL + "profile",
  wallet : BASEURL + "wallet",
  


}




export const admin_dashboard = {
  // http://192.168.8.197:8000/api/login
}
