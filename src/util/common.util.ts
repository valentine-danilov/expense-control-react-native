import {fadeIn, fadeOut} from "./animation.util";
import {Animated} from "react-native";
import {Statuses} from "./status.util";

export const isSubmitting = (status: string) => status === Statuses.PENDING

export const manageFade = (status: string, opacity: Animated.AnimatedValue) => {
    if (isSubmitting(status)) {
        fadeOut(opacity)
    }

    if (!isSubmitting(status)) {
        fadeIn(opacity)
    }
}
