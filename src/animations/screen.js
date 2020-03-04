import {
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';

export const AuthScreensAnimation = {
  gestureEnabled: true,
  gestureResponseDistance: {
    vertical: 70,
  },
  gestureDirection: 'vertical',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forNoAnimation,
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -layouts.screen.height / 2],
                })
              : current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [layouts.screen.height, 0],
                }),
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.3],
        }),
      },
    };
  },
};

export const NoteScreensAnimation = {
  gestureEnabled: true,
  gestureResponseDistance: {
    horizontal: 70,
  },
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forNoAnimation,
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -layouts.screen.width / 2],
                })
              : current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [layouts.screen.width, 0],
                }),
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.3],
        }),
      },
    };
  },
};
