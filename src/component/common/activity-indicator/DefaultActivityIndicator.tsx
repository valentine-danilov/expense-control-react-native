import React from "react";
import {Styles} from './styles'
import {View} from "react-native";
import {ActivityIndicator} from "react-native-paper";

export default () =>
    <View style={Styles.activityIndicatorContainer}>
        <ActivityIndicator animating={true} size="large" color="#3F5EFB"/>
    </View>