import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Pressable,
} from 'react-native';

const ButtonList = ({ setOfFunctions }) => {
  const [functionItems, setFunctionIems] = useState(
    setOfFunctions.map(functionItem, { activeFunction: '' }),
  );
  const [logText, setLogText] = useState('Log goes here');

  function functionItem(item) {
    return {
      name: item.name,
      fn: item,
      active: this.activeFunction === item.name,
    };
  }

  function onPress(item) {
    setLogText('');
    item.fn(log);
    setFunctionIems(
      setOfFunctions.map(functionItem, { activeFunction: item.name }),
    );
  }

  function log(item) {
    const logString = JSON.stringify(item);
    // console.log(logString);
    setLogText((prevText) => {
      return prevText + '\n' + logString;
    });
  }

  function Item({ item }) {
    return (
      <View style={styles.item}>
        <Pressable
          style={[
            {
              backgroundColor: item.active ? '#ea4335' : 'white',
            },
            styles.wrapperCustom,
          ]}
          onPress={() => onPress(item)}
        >
          <Text style={styles.title}>{item.name}</Text>
        </Pressable>
      </View>
    );
  }

  function renderItem({ item }) {
    return <Item item={item} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={functionItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
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
