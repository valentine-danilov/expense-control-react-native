import React, {useState} from "react";
import {TouchableWithoutFeedback, Text, Animated} from 'react-native';
import {animatePressIn, animatePressOut} from '../../../service/animation/animation.service'
import styles from "./styles";

const ActionButton = ({title, onPress, style}) => {
    const [animatedValue] = useState(new Animated.Value(1));

    const handlePressIn = async () => {
        await animatePressIn(animatedValue)
    }

    const handlePressOut = async () => {
        await animatePressOut(animatedValue)
        onPress()
    }

    const animationStyle = {
        transform: [{scale: animatedValue}]
    }

    return (
        <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
            <Animated.View style={[styles.container, animationStyle, style]}>
                <Text style={styles.text}>{title}</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}

export default ActionButton;