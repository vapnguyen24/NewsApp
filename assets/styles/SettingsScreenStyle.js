import { StyleSheet } from 'react-native'
import color from '../color';

const fonts = [
  'poppins_regular',
  'poppins_medium',
  'poppins_bold',
  'poppins_semi_bold',
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white,
        paddingHorizontal: 24,
    },

    navigate_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 68
    },

 

    title: {
        fontFamily: fonts[1],
        color: color.black,
        fontSize: 16,
    },

    settings: {
        marginTop: 16
    },

    setting_item: {
        marginBottom: 48,
        height: 24
    },

    setting_custom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    setting_custom_left: {
        flexDirection: 'row',
        alignItems: 'center'

    },

    setting_item_text: {
        fontFamily: fonts[1],
        fontSize: 16,
        color: color.black,
        marginLeft: 8
    }
})

export default styles;
