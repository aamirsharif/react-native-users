import { TableEntry } from 'types/globals';
import users from '../../assets/leaderboard.json';

export interface UsersState {
  data: TableEntry[];
  dataSet: TableEntry[];
  selectedUser: TableEntry | null;
}

export const initialUsersState: UsersState = {
  data: [],
  dataSet: Object.values(users),
  selectedUser: null,
};
