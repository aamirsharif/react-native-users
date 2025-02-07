import { SetUsersAction, SortUsersAction, SearchUsersAction, SetSelectedAction } from './UserActions';
import { SetSearchAction } from './SearchFilterActions';
export type AppActions =
  | SetUsersAction
  | SortUsersAction
  | SearchUsersAction
  | SetSelectedAction
  | SetSearchAction;

export * from './UserActions';
export * from './SearchFilterActions';
