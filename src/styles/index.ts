import { StyleSheet } from "react-native"
const colors = {
    primaryColor: "#B6CDBD",
    secondaryColor: "#667850",
    primaryBg: "#F2F9F1",
    lightColor: "#ECECEC",
    greyLight50Color: "#9AAABE",
    greyLight100Color: "#949494",
    greyLight150Color: "#384459",
    greyLight125Color: "#72849A",
    greenColor: "#83D79A",
    blueColor: "#839AD7",
    redColor: "#D78383",
    blackColor: "#191B21",
    whiteColor: "#FFF",
}

const theme = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: colors.primaryColor,

    },

    card: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.primaryBg,
        borderRadius: 40,
    },
    drawImg: {
    }


})


export { colors, theme }