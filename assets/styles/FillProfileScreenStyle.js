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
        alignItems: 'center',
        marginTop: 64
    },

 

    title: {
        fontFamily: fonts[1],
        color: color.black,
        fontSize: 16,
        marginTop: 4
    },

    avt_view: {
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },

    avt_image: {
        width: 140,
        height: 140,
        borderRadius: 140,
    },

    avt_edit: {
        position: 'absolute',
        right: 17,
        bottom: 0
    },

    form: {
        marginBottom: 145,
    },

    form_item: {
        marginTop: 16
    },

    form_item_title: {
        fontFamily: fonts[0],
        fontSize: 14,
        color: color.gray_text
    },

    form_item_input: {
        marginTop: 4,
        width: '100%',
        height: 48,
        borderRadius: 6,
        borderColor: color.gray_text,
        borderWidth: 1,
        paddingLeft: 12,
        color: color.black
    },

    form_item_valid: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
        display: 'none',
    },

    valid_text: {
        fontFamily: fonts[0],
        fontSize: 14,
        color: color.gray_text,
        color: '#C30052',
        marginLeft: 6,
    },

    fill_btn: {
        width: '100%',
        height: 50,
        backgroundColor: color.blue,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        position: 'absolute'
    },

    fill_text: {
        color: color.white,
        fontSize: 16,
        fontFamily: fonts[3]
    }
})
export default styles;
