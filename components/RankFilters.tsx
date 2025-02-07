import {View} from 'react-native';
import {Button} from '@rneui/themed';
import {delay} from '@utils/dummyTimeout';
import {TableEntry} from 'types/globals';

interface OptionsProps {
  search: string;
  sortUsers: (sortBy: 'rank' | 'name', sortOrder: 'asc' | 'desc') => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedUser: (user: TableEntry | null) => void;
}

const Options: React.FC<OptionsProps> = ({
  search,
  sortUsers,
  setLoading,
  setSelectedUser,
}) => {
  const isDisabled = search !== '';
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
      }}>
      <Button
        title="Highest Rank"
        onPress={async () => {
          setSelectedUser(null);
          setLoading(true);
          sortUsers('rank', 'desc');
          await delay(500);
          setLoading(false);
        }}
        disabled={isDisabled}
        containerStyle={{marginHorizontal: 5}}
      />
      <Button
        title="Lowest Rank"
        onPress={async () => {
          setSelectedUser(null);
          setLoading(true);
          sortUsers('rank', 'asc');
          await delay(500);
          setLoading(false);
        }}
        disabled={isDisabled}
        containerStyle={{marginHorizontal: 5}}
      />
    </View>
  );
};

export default Options;
