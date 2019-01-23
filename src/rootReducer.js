import { ADD, REMOVE } from './actionTypes';
import data from './data';

const INITIAL_STATE = { data, boughtItems: {} };

function rootReducer(state = INITIAL_STATE, action) {
  console.log('reducer ran; state & action:', state, action);

  switch (action.type) {
    case ADD: {
      // add payload data of what we're adding to card
      // make a copy, and then push on new item

      let copyState = { ...state };
      let newItemObj = action.payload;
      let updatedBoughtItems = { ...state.boughtItems };
      copyState.boughtItems = updatedBoughtItems;
      copyState.boughtItems[newItemObj.id] =
        updatedBoughtItems[newItemObj.id] + 1 || 1;
      return { ...copyState };
    }

    case REMOVE: {
      // add payload data of what we're adding to card
      // make a copy, and then push on new item
      let copyState = { ...state };
      let itemIdToRemove = action.payload;
      let updatedBoughtItems = { ...state.boughtItems };
      copyState.boughtItems = updatedBoughtItems;
      if (copyState.boughtItems[itemIdToRemove] === 0 || NaN) return state;
      copyState.boughtItems[itemIdToRemove] =
        updatedBoughtItems[itemIdToRemove] - 1;

      return { ...copyState };
    }

    default:
      return state;
  }
}
// end

export default rootReducer;
