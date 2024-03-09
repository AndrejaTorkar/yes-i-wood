import { TouchableOpacity, Text } from "react-native";
import {styles} from "./styles";


const ShopCell = ({ navigation, name, address, description }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ShopDetail", { name, address, description })
      }
      style={styles.shopCellContainer}
    >
      <Text style={styles.shopName}>{name}</Text>
      <Text style={styles.shopAddress}>{address}</Text>
    </TouchableOpacity>
);

export default ShopCell;