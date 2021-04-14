import {Animated} from "react-native";

export const animationTimeout = (timeout = 200) =>
    new Promise(resolve => setTimeout(resolve, timeout));

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
    //await animationTimeout(200)
}

export const animatePressIn = async (value: Animated.AnimatedValue, toValue = 0.95) => {
    Animated.spring(value, {
        toValue: toValue,
        useNativeDriver: true
    }).start()
    await animationTimeout(50)
}

export const animatePressOut = async (value: Animated.AnimatedValue, toValue = 1, friction = 100, tension = 100) => {
    Animated.spring(value, {
        toValue: toValue,
        useNativeDriver: true,
        friction: friction,
        tension: tension
    }).start()
    await animationTimeout(50)
}