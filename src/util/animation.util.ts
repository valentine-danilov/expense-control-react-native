import {Animated} from "react-native";

export const fadeIn = (opacity: Animated.AnimatedValue, toValue = 1, duration = 200) =>
    Animated.spring(opacity, {
        toValue: toValue,
        useNativeDriver: true
    }).start();

export const fadeOut = (opacity: Animated.AnimatedValue, toValue = 0.4, duration = 200) => {
    Animated.spring(opacity, {
        toValue: toValue,
        useNativeDriver: true
    }).start();
}