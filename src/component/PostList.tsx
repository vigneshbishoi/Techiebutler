import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {FontFamily, FontSize, colors} from '../common/colors';

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostList = ({item, onPress}: {item: PostProps; onPress: () => void}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress && onPress();
      }}
      style={styles.mainView}>
      <View style={styles.innerView}>
        <Text style={styles.title}>Id :- </Text>
        <Text style={styles.titleText}>{item?.id}</Text>
      </View>
      <View style={styles.innerView}>
        <Text style={styles.title}>Title :- </Text>
        <Text style={styles.titleText}>{item?.title}</Text>
      </View>
      <View style={styles.innerView}>
        <Text style={styles.title}>Body :- </Text>
        <Text style={styles.titleText}>{item?.body}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(PostList);

const styles = StyleSheet.create({
  titleText: {
    flex: 1,
    fontSize: FontSize.Small,
    fontFamily: FontFamily.Regular,
    color: 'rgb(111,129,154)',
  },
  title: {
    width: scale(50),
    fontSize: FontSize.Small,
    fontFamily: FontFamily.Medium,
    color: colors.black,
  },
  mainView: {
    backgroundColor: 'rgba(232,241,254,0.4)',
    marginHorizontal: scale(15),
    flex: 1,
    marginBottom: scale(10),
    borderRadius: scale(12),
    padding: scale(10),
  },
  innerView: {flexDirection: 'row', flex: 1},
});
