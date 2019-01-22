import { ADD, REMOVE } from './actionTypes';
import data from './data';

const INITIAL_STATE = data;

function rootReducer(state = INITIAL_STATE, action) {
  console.log('reducer ran; state & action:', state, action);

  switch (action.type) {
    case ADD: {
      // add payload data of what we're adding to card
      // make a copy, and then push on new item
      let newItemObj = action.payload;
      return { ...state, items: [...state.items, newItemObj] };
    }

    case REMOVE: {
      // add payload data of what we're adding to card
      // make a copy, and then push on new item
      let itemIdToRemove = action.payload.id;

      return {
        ...state,
        items: state.items.filter(item => item.id !== itemIdToRemove)
      };
    }

    default:
      return state;
  }
}
// end

export default rootReducer;
