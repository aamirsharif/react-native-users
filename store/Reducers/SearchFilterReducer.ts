import { initialSearchState } from '../InitialStates/SearchFilter';
import { AppActions } from '../Actions';

export const searchFilterReducer = (
  state: string = initialSearchState,
  action: AppActions
): string => {
  switch (action.type) {
    case 'SET_SEARCH':
      return action.payload;
    default:
      return state;
  }
};
