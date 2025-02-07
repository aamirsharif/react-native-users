import React, {useEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  useColorScheme,
  StyleSheet,
  Modal,
  ActivityIndicator,
  View,
} from 'react-native';
import {Overlay, Icon, Button} from '@rneui/themed';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import Options from '../components/RankFilters';
import {connect, ConnectedProps} from 'react-redux';
import {AppState} from '@store/index';
import {Dispatch} from 'redux';
import {TableEntry} from 'types/globals';

const mapStateToProps = (state: AppState) => ({
  users: state.users?.data,
  searchQuery: state.search,
  selectedUser: state.users.selectedUser,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setSearch: (query: string) => dispatch({type: 'SET_SEARCH', payload: query}),
  setUsers: (users: TableEntry[]) =>
    dispatch({type: 'SET_USERS', payload: users}),
  searchUsers: (search: string) =>
    dispatch({type: 'SEARCH_USERS', payload: search}),
  setSelectedUser: (user: TableEntry | null) =>
    dispatch({type: 'SET_SELECTED_USER', payload: user}),
  sortUsers: (sortBy: 'rank' | 'name', sortOrder: 'asc' | 'desc') =>
    dispatch({type: 'SORT_USERS', payload: {sortBy, sortOrder}}),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type HomeScreenProps = ConnectedProps<typeof connector>;

const HomeScreen: React.FC<HomeScreenProps> = ({
  users,
  searchQuery,
  setSearch,
  selectedUser,
  setSelectedUser,
  sortUsers,
  searchUsers,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [showModal, setShowModal] = useState(false);
  const [sort, setSort] = useState<'asc' | 'desc'>('desc');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    sortUsers('name', sort);
  }, [sort, sortUsers]);

  const handleSearch = (query: string) => {
    if (query.trim() === '') {
      setShowModal(true);
      setSearch('');
      return;
    }

    setLoading(true);
    searchUsers(query);
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1,
      }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? Colors.darker : Colors.lighter}
      />
      {loading && (
        <Modal transparent={true} animationType="fade">
          <View style={styles.modalContainer}>
            <ActivityIndicator size="large" color="#007BFF" />
          </View>
        </Modal>
      )}

      <Overlay isVisible={showModal} overlayStyle={{padding: 30, gap: 10}}>
        <Icon
          name="warning"
          type="font-awesome"
          size={20}
          containerStyle={{marginBottom: 8}}
          color="red"
        />
        <Text>
          {searchQuery !== ''
            ? `User ${searchQuery} not found`
            : "Username can't be empty"}
        </Text>
        <Button
          title="Close"
          size="sm"
          color="secondary"
          onPress={() => {
            setShowModal(false);
            setSearch('');
          }}
        />
      </Overlay>

      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <SearchBar
          searchQuery={searchQuery}
          setSearch={setSearch}
          searchUsers={handleSearch}
          setShowModal={setShowModal}
          setLoading={setLoading}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
        <Options
          search={searchQuery}
          sortUsers={sortUsers}
          setLoading={setLoading}
          setSelectedUser={setSelectedUser}
        />
        <Table
          users={users}
          selectedUser={selectedUser}
          sort={sort}
          setSort={setSort}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default connector(HomeScreen);
