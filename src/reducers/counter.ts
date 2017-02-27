import * as Immutable from 'immutable';

import * as ActionTypes from '../actionTypes';

const initialState = Immutable.Map({
  count: 0
});

export const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.COUNTER_ADD_COUNT: {
      return state.update('count', (count) => {
        return ++count;
      });
    }
    case ActionTypes.COUNTER_RESET_COUNT: {
      var i=1
      i++
      var j=i
      return state.set('count', 0);
    }
    default: {
      return state;
    }
  }
};

export default counterReducer;
