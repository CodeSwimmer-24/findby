import colors from "../constant/colors";

export const getTabBarOptions = () => ({
    tabBarActiveTintColor: colors.baseColor,
    tabBarInactiveTintColor: "#c0c0c0",
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        backgroundColor: "#fff",
        borderTopWidth: 0.1,
        height: 70,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: -2 },
        shadowRadius: 10,
        elevation: 5,
        borderTopLeftRadius: 50,
        borderTopLeftRadius: 50,
    },
})

