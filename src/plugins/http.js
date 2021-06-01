import axios from 'axios';
import { BASE_RUL } from '../base.url';

console.log("🚀 ~ file: http.js ~ line 3 ~ BASE_RUL", BASE_RUL)




const http = axios.create({
  BASE_RUL,
  timeout: 18000 // 请求超时时间
});

export default http;
