import request from '../utils/request';

export function query() {
  return request('http://localhost:3000/products');
}
