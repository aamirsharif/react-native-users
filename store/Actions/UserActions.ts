import { TableEntry } from 'types/globals';

export interface SetUsersAction {
  type: 'SET_USERS';
  payload: TableEntry[];
}

export interface SortUsersAction {
  type: 'SORT_USERS';
  payload: {
    sortBy: 'rank' | 'name';
    sortOrder: 'asc' | 'desc';
  };
}

export interface SearchUsersAction {
  type: 'SEARCH_USERS';
  payload: string;
}

export interface SetSelectedAction {
  type: 'SET_SELECTED_USER';
  payload: TableEntry | null;
}

