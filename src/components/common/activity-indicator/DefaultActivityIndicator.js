import React from "react";
import styles from "./styles";
import {View} from "react-native";
import {ActivityIndicator} from "react-native-paper";

export default () =>
    <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator animating={true} size="large" color="#3F5EFB"/>
    </View>