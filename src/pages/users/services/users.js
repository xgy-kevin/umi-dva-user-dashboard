import { PAGE_SIZE } from '../constants';
import request from '../../../utils/request';

export function fetch({ page = 2 }) {
  return request(`/api/users?page=${2}&pageSize=${3}`);
}

export function remove(id) {
  return request(`/api/users/${id}`, {
    method: 'DELETE',
  });
}

export function patch(id, values) {
  return request(`/api/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request('/api/users', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}

export function test(values) {
  return request(`/api/test/?id=${values}`);
}