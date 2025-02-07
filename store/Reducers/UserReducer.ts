import { UsersState, initialUsersState } from '../InitialStates/User';
import { AppActions } from '../Actions';
import Fuse from 'fuse.js';
export const usersReducer = (
  state: UsersState = initialUsersState,
  action: AppActions
): UsersState => {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, data: action.payload };

    case 'SORT_USERS': {
      const sortedUsers = [...state.dataSet];
      if (action.payload.sortBy === 'rank') {
        sortedUsers.sort((a, b) => {
          if (a.stars === b.stars) {
            return a.name.localeCompare(b.name);
          }
          return action.payload.sortOrder === 'asc' ? a.stars - b.stars : b.stars - a.stars;
        });
      } else if (action.payload.sortBy === 'name') {
        sortedUsers.sort((a, b) =>
          action.payload.sortOrder === 'asc'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        );
      }
      return { ...state, data: sortedUsers };
    }

    case 'SEARCH_USERS': {
      const searchQuery = action.payload.toLowerCase().trim();
      const fuse = new Fuse(state.dataSet, {
        keys: ['name'],
        threshold: 0.3,
      });
      const results = fuse.search(searchQuery);
      const matchingEntry = results.length > 0 ? results[0].item : null;
      if (!matchingEntry) {
        return { ...state, selectedUser: null };
      }
      const refined = state.dataSet
        .sort((a, b) => b.stars - a.stars)
        .slice(0, 10);
      if (!refined.some((entry) => entry.uid === matchingEntry.uid)) {
        refined[9] = matchingEntry;
      }
      return { ...state, data: refined, selectedUser: matchingEntry };
    }

    case 'SET_SELECTED_USER': {
      return { ...state, selectedUser: action.payload };
    }

    default:
      return state;
  }
};
