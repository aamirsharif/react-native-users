import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from '@rneui/themed';
import {Icon} from '@rneui/base';
interface TableEntry {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
}

interface TableProps {
  users: TableEntry[];
  selectedUser: TableEntry | null;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<'desc' | 'asc'>>;
}

const TableComponent: React.FC<TableProps> = ({
  users,
  selectedUser,
  sort,
  setSort,
}) => {
  async function toggleSort() {
    setSort((prevSort: string) => (prevSort === 'asc' ? 'desc' : 'asc'));
  }
  return (
    <Card containerStyle={styles.tableContainer}>
      <View style={styles.tableHeader} onTouchEnd={toggleSort}>
        <Text style={styles.headerCell}>
          Name
          {sort !== 'asc' ? (
            <Icon
              name="arrow-up"
              type="font-awesome"
              size={12}
              iconStyle={{marginLeft: 6, alignSelf: 'center'}}
              color="#0CC"
            />
          ) : (
            <Icon
              name="arrow-down"
              type="font-awesome"
              size={12}
              iconStyle={{marginLeft: 6, alignSelf: 'center'}}
              color="#0CC"
            />
          )}
        </Text>
        <Text style={styles.headerCell}>Rank</Text>
        <Text style={styles.headerCell}>Number of bananas</Text>
      </View>
      {users.map((value: TableEntry, index: number) => (
        <View
          key={index}
          style={[
            styles.tableRow,
            index % 2 !== 0 && styles.evenRow,
            selectedUser &&
              value.uid === selectedUser.uid &&
              styles.selectedRow,
          ]}>
          <Text style={styles.cell}>{value.name}</Text>
          <Text style={styles.cell}>{value.stars}</Text>
          <Text style={styles.cell}>{value.bananas}</Text>
        </View>
      ))}
    </Card>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    width: '88%',
    borderRadius: 8,
    padding: 0,
    marginHorizontal: 'auto',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#d9e8a7',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    color: '#333',
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  evenRow: {
    backgroundColor: '#dfe6e9',
  },
  selectedRow: {
    backgroundColor: '#fdcb6e',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: '#555',
  },
});

export default TableComponent;
