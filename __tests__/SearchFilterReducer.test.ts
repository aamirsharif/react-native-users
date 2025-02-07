import {SetSearchAction} from '@store/Actions';
import {searchFilterReducer} from '@store/Reducers/SearchFilterReducer';

const initialState = '';

describe('search filter reducer: SET_SEARCH', () => {
  it('should correctly set the search item', () => {
    const action: SetSearchAction = {
      type: 'SET_SEARCH',
      payload: 'search-item',
    };

    const newSearchState = searchFilterReducer(initialState, action);

    expect(newSearchState).toEqual(action.payload);
  });
});
