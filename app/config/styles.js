import { Platform } from "react-native"

import colors from "./colors"

export default {
    text: {
        fontSize: 18,
        color: colors.dark,
        ...Platform.select({
            ios: {
                fontFamily: 'Courier'
            },
            android: {
                fontFamily: 'Roboto'
            }
        })
    }
}