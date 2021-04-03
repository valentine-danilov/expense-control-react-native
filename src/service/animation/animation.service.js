import {Animated} from "react-native";

export const animationTimeout = (timeout = 200) =>
    new Promise(resolve => setTimeout(resolve, timeout));

export const fadeIn = (opacity, toValue = 1, duration = 200) =>
    Animated.spring(opacity, {
        toValue: toValue,
        useNativeDriver: true
    }).start();

export const fadeOut = (opacity, toValue = 0.4, duration = 200) => {
    Animated.spring(opacity, {
        toValue: toValue,
        useNativeDriver: true
    }).start();
    //await animationTimeout(200)
}

export const animatePressIn = async (value, toValue = 0.8) => {
    Animated.spring(value, {
        toValue: toValue,
        useNativeDriver: true
    }).start()
    await animationTimeout(50)
}

export const animatePressOut = async (value, toValue = 1, friction = 3, tension = 3) => {
    Animated.spring(value, {
        toValue: toValue,
        useNativeDriver: true,
        friction: friction,
        tension: tension
    }).start()
    await animationTimeout(50)
}