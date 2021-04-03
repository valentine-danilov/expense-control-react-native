import {fadeIn, fadeOut} from "../service/animation/animation.service";

export const isSubmitting = status => status === 'loading'

export const manageFade = (status, opacity) => {
    if (isSubmitting(status)) {
        fadeOut(opacity)
    }

    if (!isSubmitting(status)) {
        fadeIn(opacity)
    }
}
