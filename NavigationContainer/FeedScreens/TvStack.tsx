import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListingTVScreen from "../../Screens/Feed/Tv/ListingScreens";
import DetailsTVScreen from "../../Screens/Feed/Tv/DetailsScreen";

function TVStack (){
    const stack =createNativeStackNavigator();
    return (
        <stack.Navigator initialRouteName="List">
            <stack.Screen name="List" component={ListingTVScreen}/>
            <stack.Screen name = "Details" component={DetailsTVScreen}/>
        </stack.Navigator>
    );
}
export default TVStack;