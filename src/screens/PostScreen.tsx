import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {FontFamily, FontSize, colors} from '../common/colors';
import {scale, verticalScale} from 'react-native-size-matters';
import {makeAPIRequest} from '../common/API_Call';
import CommonLoader from '../component/CommonLoader';
import PostList from '../component/PostList';
import {PostScreenProps} from '../interfaces/NavigationProps';
import {PostProps} from '../interfaces/PostScreenProps';

const PostScreen = (props: PostScreenProps) => {
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [Post, setPost] = useState<PostProps[]>([]);

  useLayoutEffect(() => {
    setLoading(true);
    makeAPIRequest({
      method: 'GET',
      url: `posts?_page=${page}&_limit=20`,
    })
      .then(response => {
        //@ts-ignore
        let result = response?.data;

        if (result?.length > 0) {
          Post.length > 0 ? setPost([...Post, ...result]) : setPost(result);
        }
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  }, [page]);

  const Header = () => {
    return (
      <View style={styles.headerView}>
        <Text style={styles.headerTitle}>Techiebutler</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header />
        <FlatList
          data={Post}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <PostList
              item={item}
              onPress={() => {
                props.navigation.navigate('PostDetailScreen', {item});
              }}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            setPage(page + 1);
          }}
        />
      </View>
      {isLoading && <CommonLoader />}
    </SafeAreaView>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: FontSize.Bold,
    fontFamily: FontFamily.Bold,
    color: colors.black,
  },
  headerView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(12),
    backgroundColor: 'rgb(232,241,254)',
    marginBottom: verticalScale(10),
  },
  container: {flex: 1, backgroundColor: colors.white},
});
