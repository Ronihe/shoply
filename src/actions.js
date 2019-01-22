import { ADD, REMOVE } from './actionTypes';

export function add(newItem) {
  return {
    type: ADD,
    payload: newItem
  };
}

export function remove(itemId) {
  return {
    type: REMOVE,
    payload: itemId
  };
}
