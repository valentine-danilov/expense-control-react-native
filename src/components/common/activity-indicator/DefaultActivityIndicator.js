import React from "react";
import styles from "./styles";
import {ActivityIndicator, View} from "react-native";

export default () =>
    <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator size="large" color="#3F5EFB"/>
    </View>