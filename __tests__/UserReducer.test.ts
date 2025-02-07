import {usersReducer} from '@store/Reducers/UserReducer';
import {initialUsersState} from '@store/InitialStates';
import {SortUsersAction, SearchUsersAction} from '@store/Actions/UserActions'; // Import action types
import {TableEntry} from 'types/globals';

describe('usersReducer - SEARCH_USERS', () => {
  const mockDataSet: TableEntry[] = [
    {
      uid: '1',
      name: 'Alice',
      bananas: 100,
      lastDayPlayed: '2023-10-01',
      longestStreak: 5,
      stars: 10,
      subscribed: true,
    },
    {
      uid: '2',
      name: 'Bob',
      bananas: 200,
      lastDayPlayed: '2023-10-02',
      longestStreak: 10,
      stars: 20,
      subscribed: false,
    },
    {
      uid: '3',
      name: 'Charlie',
      bananas: 150,
      lastDayPlayed: '2023-10-03',
      longestStreak: 7,
      stars: 15,
      subscribed: true,
    },
    {
      uid: '4',
      name: 'David',
      bananas: 50,
      lastDayPlayed: '2023-10-04',
      longestStreak: 3,
      stars: 5,
      subscribed: false,
    },
    {
      uid: '5',
      name: 'Eve',
      bananas: 250,
      lastDayPlayed: '2023-10-05',
      longestStreak: 12,
      stars: 25,
      subscribed: true,
    },
    {
      uid: '6',
      name: 'Frank',
      bananas: 300,
      lastDayPlayed: '2023-10-06',
      longestStreak: 15,
      stars: 30,
      subscribed: false,
    },
    {
      uid: '7',
      name: 'Grace',
      bananas: 350,
      lastDayPlayed: '2023-10-07',
      longestStreak: 20,
      stars: 35,
      subscribed: true,
    },
    {
      uid: '8',
      name: 'Hank',
      bananas: 400,
      lastDayPlayed: '2023-10-08',
      longestStreak: 25,
      stars: 40,
      subscribed: false,
    },
    {
      uid: '9',
      name: 'Ivy',
      bananas: 450,
      lastDayPlayed: '2023-10-09',
      longestStreak: 30,
      stars: 45,
      subscribed: true,
    },
    {
      uid: '10',
      name: 'Jack',
      bananas: 500,
      lastDayPlayed: '2023-10-10',
      longestStreak: 35,
      stars: 50,
      subscribed: false,
    },
    {
      uid: '11',
      name: 'Kevin',
      bananas: 550,
      lastDayPlayed: '2023-10-11',
      longestStreak: 40,
      stars: 55,
      subscribed: true,
    },
    {
      uid: '12',
      name: 'Liam',
      bananas: 600,
      lastDayPlayed: '2023-10-12',
      longestStreak: 45,
      stars: 60,
      subscribed: false,
    },
  ];

  const initialState = {
    ...initialUsersState,
    dataSet: mockDataSet,
    data: mockDataSet.slice(0, 10), // Initialize data with the top 10 users
  };

  it('should render the top 10 users with the searched user highlighted (if in top 10)', () => {
    const action: SearchUsersAction = {
      type: 'SEARCH_USERS',
      payload: 'Grace', // Grace is in the top 10
    };

    const newState = usersReducer(initialState, action);

    expect(newState.data).toEqual([
      {
        uid: '12',
        name: 'Liam',
        bananas: 600,
        lastDayPlayed: '2023-10-12',
        longestStreak: 45,
        stars: 60,
        subscribed: false,
      },
      {
        uid: '11',
        name: 'Kevin',
        bananas: 550,
        lastDayPlayed: '2023-10-11',
        longestStreak: 40,
        stars: 55,
        subscribed: true,
      },
      {
        uid: '10',
        name: 'Jack',
        bananas: 500,
        lastDayPlayed: '2023-10-10',
        longestStreak: 35,
        stars: 50,
        subscribed: false,
      },
      {
        uid: '9',
        name: 'Ivy',
        bananas: 450,
        lastDayPlayed: '2023-10-09',
        longestStreak: 30,
        stars: 45,
        subscribed: true,
      },
      {
        uid: '8',
        name: 'Hank',
        bananas: 400,
        lastDayPlayed: '2023-10-08',
        longestStreak: 25,
        stars: 40,
        subscribed: false,
      },
      {
        uid: '7',
        name: 'Grace',
        bananas: 350,
        lastDayPlayed: '2023-10-07',
        longestStreak: 20,
        stars: 35,
        subscribed: true,
      },
      {
        uid: '6',
        name: 'Frank',
        bananas: 300,
        lastDayPlayed: '2023-10-06',
        longestStreak: 15,
        stars: 30,
        subscribed: false,
      },
      {
        uid: '5',
        name: 'Eve',
        bananas: 250,
        lastDayPlayed: '2023-10-05',
        longestStreak: 12,
        stars: 25,
        subscribed: true,
      },
      {
        uid: '2',
        name: 'Bob',
        bananas: 200,
        lastDayPlayed: '2023-10-02',
        longestStreak: 10,
        stars: 20,
        subscribed: false,
      },
      {
        uid: '3',
        name: 'Charlie',
        bananas: 150,
        lastDayPlayed: '2023-10-03',
        longestStreak: 7,
        stars: 15,
        subscribed: true,
      },
    ]);
    expect(newState.selectedUser).toEqual({
      uid: '7',
      name: 'Grace',
      bananas: 350,
      lastDayPlayed: '2023-10-07',
      longestStreak: 20,
      stars: 35,
      subscribed: true,
    });
  });

  it('should replace the last user in the top 10 with the searched user if not in top 10', () => {
    const action: SearchUsersAction = {
      type: 'SEARCH_USERS',
      payload: 'Alice', // Alice is not in the top 10
    };

    const newState = usersReducer(initialState, action);

    expect(newState.data).toEqual([
      {
        uid: '12',
        name: 'Liam',
        bananas: 600,
        lastDayPlayed: '2023-10-12',
        longestStreak: 45,
        stars: 60,
        subscribed: false,
      },
      {
        uid: '11',
        name: 'Kevin',
        bananas: 550,
        lastDayPlayed: '2023-10-11',
        longestStreak: 40,
        stars: 55,
        subscribed: true,
      },
      {
        uid: '10',
        name: 'Jack',
        bananas: 500,
        lastDayPlayed: '2023-10-10',
        longestStreak: 35,
        stars: 50,
        subscribed: false,
      },
      {
        uid: '9',
        name: 'Ivy',
        bananas: 450,
        lastDayPlayed: '2023-10-09',
        longestStreak: 30,
        stars: 45,
        subscribed: true,
      },
      {
        uid: '8',
        name: 'Hank',
        bananas: 400,
        lastDayPlayed: '2023-10-08',
        longestStreak: 25,
        stars: 40,
        subscribed: false,
      },
      {
        uid: '7',
        name: 'Grace',
        bananas: 350,
        lastDayPlayed: '2023-10-07',
        longestStreak: 20,
        stars: 35,
        subscribed: true,
      },
      {
        uid: '6',
        name: 'Frank',
        bananas: 300,
        lastDayPlayed: '2023-10-06',
        longestStreak: 15,
        stars: 30,
        subscribed: false,
      },
      {
        uid: '5',
        name: 'Eve',
        bananas: 250,
        lastDayPlayed: '2023-10-05',
        longestStreak: 12,
        stars: 25,
        subscribed: true,
      },
      {
        uid: '2',
        name: 'Bob',
        bananas: 200,
        lastDayPlayed: '2023-10-02',
        longestStreak: 10,
        stars: 20,
        subscribed: false,
      },
      {
        uid: '1',
        name: 'Alice',
        bananas: 100,
        lastDayPlayed: '2023-10-01',
        longestStreak: 5,
        stars: 10,
        subscribed: true,
      },
    ]);
    expect(newState.selectedUser).toEqual({
      uid: '1',
      name: 'Alice',
      bananas: 100,
      lastDayPlayed: '2023-10-01',
      longestStreak: 5,
      stars: 10,
      subscribed: true,
    });
  });

  it('should handle search when the user does not exist', () => {
    const action: SearchUsersAction = {
      type: 'SEARCH_USERS',
      payload: 'NonExistentUser', // User does not exist
    };

    const newState = usersReducer(initialState, action);

    expect(newState.data).toEqual(initialState.data); // No change in data
    expect(newState.selectedUser).toBeNull();
  });

  it('should handle search with an empty query', () => {
    const action: SearchUsersAction = {
      type: 'SEARCH_USERS',
      payload: '', // Empty query
    };

    const newState = usersReducer(initialState, action);

    expect(newState.data).toEqual(initialState.data); // No change in data
    expect(newState.selectedUser).toBeNull();
  });
});

describe('usersReducer - SORT_USERS', () => {
  const mockDataSet: TableEntry[] = [
    {
      uid: '1',
      name: 'Alice',
      bananas: 100,
      lastDayPlayed: '2023-10-01',
      longestStreak: 5,
      stars: 10,
      subscribed: true,
    },
    {
      uid: '2',
      name: 'Bob',
      bananas: 200,
      lastDayPlayed: '2023-10-02',
      longestStreak: 10,
      stars: 20,
      subscribed: false,
    },
    {
      uid: '3',
      name: 'Charlie',
      bananas: 150,
      lastDayPlayed: '2023-10-03',
      longestStreak: 7,
      stars: 15,
      subscribed: true,
    },
    {
      uid: '4',
      name: 'David',
      bananas: 50,
      lastDayPlayed: '2023-10-04',
      longestStreak: 3,
      stars: 5,
      subscribed: false,
    },
  ];

  const initialState = {
    ...initialUsersState,
    dataSet: mockDataSet,
    data: mockDataSet,
  };

  it('should sort users by rank (stars) in ascending order', () => {
    const action: SortUsersAction = {
      type: 'SORT_USERS',
      payload: {sortBy: 'rank', sortOrder: 'asc'},
    };

    const newState = usersReducer(initialState, action);

    expect(newState.data).toEqual([
      {
        uid: '4',
        name: 'David',
        bananas: 50,
        lastDayPlayed: '2023-10-04',
        longestStreak: 3,
        stars: 5,
        subscribed: false,
      },
      {
        uid: '1',
        name: 'Alice',
        bananas: 100,
        lastDayPlayed: '2023-10-01',
        longestStreak: 5,
        stars: 10,
        subscribed: true,
      },
      {
        uid: '3',
        name: 'Charlie',
        bananas: 150,
        lastDayPlayed: '2023-10-03',
        longestStreak: 7,
        stars: 15,
        subscribed: true,
      },
      {
        uid: '2',
        name: 'Bob',
        bananas: 200,
        lastDayPlayed: '2023-10-02',
        longestStreak: 10,
        stars: 20,
        subscribed: false,
      },
    ]);
  });

  it('should sort users by rank (stars) in descending order', () => {
    const action: SortUsersAction = {
      type: 'SORT_USERS',
      payload: {sortBy: 'rank', sortOrder: 'desc'},
    };

    const newState = usersReducer(initialState, action);

    expect(newState.data).toEqual([
      {
        uid: '2',
        name: 'Bob',
        bananas: 200,
        lastDayPlayed: '2023-10-02',
        longestStreak: 10,
        stars: 20,
        subscribed: false,
      },
      {
        uid: '3',
        name: 'Charlie',
        bananas: 150,
        lastDayPlayed: '2023-10-03',
        longestStreak: 7,
        stars: 15,
        subscribed: true,
      },
      {
        uid: '1',
        name: 'Alice',
        bananas: 100,
        lastDayPlayed: '2023-10-01',
        longestStreak: 5,
        stars: 10,
        subscribed: true,
      },
      {
        uid: '4',
        name: 'David',
        bananas: 50,
        lastDayPlayed: '2023-10-04',
        longestStreak: 3,
        stars: 5,
        subscribed: false,
      },
    ]);
  });

  it('should sort users by name in ascending order', () => {
    const action: SortUsersAction = {
      type: 'SORT_USERS',
      payload: {sortBy: 'name', sortOrder: 'asc'},
    };

    const newState = usersReducer(initialState, action);

    expect(newState.data).toEqual([
      {
        uid: '1',
        name: 'Alice',
        bananas: 100,
        lastDayPlayed: '2023-10-01',
        longestStreak: 5,
        stars: 10,
        subscribed: true,
      },
      {
        uid: '2',
        name: 'Bob',
        bananas: 200,
        lastDayPlayed: '2023-10-02',
        longestStreak: 10,
        stars: 20,
        subscribed: false,
      },
      {
        uid: '3',
        name: 'Charlie',
        bananas: 150,
        lastDayPlayed: '2023-10-03',
        longestStreak: 7,
        stars: 15,
        subscribed: true,
      },
      {
        uid: '4',
        name: 'David',
        bananas: 50,
        lastDayPlayed: '2023-10-04',
        longestStreak: 3,
        stars: 5,
        subscribed: false,
      },
    ]);
  });

  it('should sort users by name in descending order', () => {
    const action: SortUsersAction = {
      type: 'SORT_USERS',
      payload: {sortBy: 'name', sortOrder: 'desc'},
    };

    const newState = usersReducer(initialState, action);

    expect(newState.data).toEqual([
      {
        uid: '4',
        name: 'David',
        bananas: 50,
        lastDayPlayed: '2023-10-04',
        longestStreak: 3,
        stars: 5,
        subscribed: false,
      },
      {
        uid: '3',
        name: 'Charlie',
        bananas: 150,
        lastDayPlayed: '2023-10-03',
        longestStreak: 7,
        stars: 15,
        subscribed: true,
      },
      {
        uid: '2',
        name: 'Bob',
        bananas: 200,
        lastDayPlayed: '2023-10-02',
        longestStreak: 10,
        stars: 20,
        subscribed: false,
      },
      {
        uid: '1',
        name: 'Alice',
        bananas: 100,
        lastDayPlayed: '2023-10-01',
        longestStreak: 5,
        stars: 10,
        subscribed: true,
      },
    ]);
  });
});
