import React, {useEffect, useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Icon, Button} from '@rneui/themed';
import {TableEntry} from 'types/globals';
import {delay} from '@utils/dummyTimeout';
interface SearchProps {
  searchQuery: string;
  setSearch: (query: string) => void;
  setSelectedUser: (user: TableEntry | null) => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  searchUsers: (search: string) => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  selectedUser: TableEntry | null;
}

const SearchComponent: React.FC<SearchProps> = ({
  searchQuery,
  setSearch,
  setSelectedUser,
  setShowModal,
  searchUsers,
  setLoading,
  selectedUser,
}) => {
  const [isSearched, setIsSearched] = useState(false);
  const handleSearch = async () => {
    if (searchQuery === '') {
      setSelectedUser(null);
      setShowModal(true);
      return;
    }
    setLoading(true);
    searchUsers(searchQuery);
    await delay(500);
    setIsSearched(true);
    setLoading(false);
  };

  useEffect(() => {
    if (!selectedUser && isSearched) {
      setIsSearched(!isSearched);
      setShowModal(true);
    }
  }, [selectedUser, setShowModal, isSearched]);

  return (
    <View style={styles.searchContainer}>
      <Icon
        name="search"
        type="font-awesome"
        size={24}
        containerStyle={styles.searchIcon}
      />
      <TextInput
        placeholder="User name.."
        style={styles.textInput}
        onChangeText={setSearch}
        value={searchQuery}
      />
      <Button
        title="Search"
        buttonStyle={styles.searchButton}
        onPress={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 'auto',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    width: '80%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginRight: 8,
    padding: 4,
    color: '#333',
  },
  searchButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 16,
  },
});

export default SearchComponent;
