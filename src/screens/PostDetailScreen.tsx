import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {FontFamily, FontSize, colors} from '../common/colors';
import {scale, verticalScale} from 'react-native-size-matters';
import {makeAPIRequest} from '../common/API_Call';
import CommonLoader from '../component/CommonLoader';
import PostList from '../component/PostList';
import {images} from '../assets/images';
import {PostDetailScreenProps} from '../interfaces/NavigationProps';

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostDetailScreen = (props: PostDetailScreenProps) => {
  const [isLoading, setLoading] = useState(false);
  const [Post, setPost] = useState<PostProps | {}>({});

  useLayoutEffect(() => {
    setLoading(true);
    makeAPIRequest({
      method: 'GET',
      url: `posts/${props.route?.params?.item?.id}`,
    })
      .then(response => {
        //@ts-ignore
        let result = response?.data;

        setPost(result);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  }, []);

  const Header = () => {
    return (
      <View style={styles.headerView}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.backPress}>
          <Image
            source={images.backArrow}
            style={styles.backArrow}
            resizeMode="center"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Post Detail</Text>
      </View>
    );
  };

  const RenderPostDetails = () => {
    //@ts-ignore
    return <PostList item={Post} onPress={() => {}} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header />
        <RenderPostDetails />
      </View>
      {isLoading && <CommonLoader />}
    </SafeAreaView>
  );
};

export default PostDetailScreen;

const styles = StyleSheet.create({
  backArrow: {width: scale(15), height: scale(15)},
  backPress: {padding: scale(5), position: 'absolute', left: scale(10)},
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
