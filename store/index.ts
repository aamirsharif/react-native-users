import { createStore, combineReducers } from 'redux';
import { usersReducer } from './Reducers/UserReducer';
import { searchFilterReducer } from './Reducers/SearchFilterReducer';
import { initialUsersState } from './InitialStates/User';
import { initialSearchState } from './InitialStates/SearchFilter';

const rootReducer = combineReducers({
  users: usersReducer,
  search: searchFilterReducer,
});

const store = createStore(rootReducer);

export interface AppState {
  users: typeof initialUsersState;
  search: typeof initialSearchState;
}

export default store;
