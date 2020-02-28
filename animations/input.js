import {Animated} from 'react-native';

export default (from, to) => {
  Animated.spring(from, {
    toValue: to,
    duration: 300,
  }).start();
};
