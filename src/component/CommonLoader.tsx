import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {colors} from '../common/colors';

const CommonLoader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <ActivityIndicator size="large" color={colors.lightBlack} />
      </View>
    </View>
  );
};

export default CommonLoader;
const styles = StyleSheet.create({
  mainView: {
    width: scale(80),
    height: scale(80),
    borderRadius: scale(10),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    top: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
});
