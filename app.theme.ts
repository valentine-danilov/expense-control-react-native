import {DefaultTheme} from "react-native-paper";

const AppTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#ffccff',
        text: '#8c8c8c',
        accent: '#ff80ff',
        error: '#800080'
    }
}

export default AppTheme;