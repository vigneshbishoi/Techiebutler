import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PostProps} from './PostScreenProps';

export type NavigationProps = {
  PostScreen: undefined;
  PostDetailScreen: {item: PostProps} | undefined;
};

export type PostScreenProps = NativeStackScreenProps<
  NavigationProps,
  'PostScreen'
>;
export type PostDetailScreenProps = NativeStackScreenProps<
  NavigationProps,
  'PostDetailScreen'
>;
