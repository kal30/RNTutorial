import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Pressable,
} from 'react-native';

const ButtonList = ({setOfFunctions}) => {
  const functionItems = setOfFunctions.map(functionItem);
  const [logText, setLogText] = useState('Log goes here');

  function functionItem(item) {
    return {
      name: item.name,
      fn: item,
    };
  }

  function onPress(itemFunction) {
    setLogText('');
    itemFunction(log);
  }

  function log(item) {
    const logString = JSON.stringify(item);
    // console.log(logString);
    setLogText(prevText => {
      return prevText + '\n' + logString;
    });
  }

  const Item = ({item}) => (
    <View style={styles.item}>
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#ea4335' : 'white',
          },
          styles.wrapperCustom,
        ]}
        onPress={() => onPress(item)}>
        <Text style={styles.title}>{item.name}</Text>
      </Pressable>
    </View>
  );

  const renderItem = ({item}) => <Item item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={setOfFunctions}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
      <Text style={styles.logtext}>{logText}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#cfcfcf',
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 16,
  },
  logtext: {
    fontSize: 12,
    margin: 5,
    fontFamily: 'Roboto',
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
});

export default ButtonList;
