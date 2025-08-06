import { View, Text } from "react-native";
import Category from "../Categories";
import colors from "../../constant/colors";
import List from "../../screens/List";

const Header = () => {
  return (
    <View>
      {/* <HeaderHero /> */}
      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginHorizontal: 30,
            marginVertical: 10,
            marginTop: 10,
            color: colors.baseColor,
          }}
        >
          Lets Find...
        </Text>
        <View style={{ marginVertical: 10 }}>
          <Category />
        </View>
      </View>
      <List />
    </View>
  );
};

export default Header;
