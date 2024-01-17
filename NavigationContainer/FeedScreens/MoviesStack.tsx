import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListingMoviesScreen from "../../Screens/Feed/Movies/ListingScreen";
import DetailsMoviesScreen from "../../Screens/Feed/Movies/DetailsScreen";

function MoviesStack (){
    const stack =createNativeStackNavigator();
    return (
        <stack.Navigator initialRouteName="ListingMovies">
            <stack.Screen name="ListingMovies" component={ListingMoviesScreen} options={{headerTitle:"Listing Movies"}} />
            <stack.Screen name = "DetailsMovies" component={DetailsMoviesScreen} options={{headerTitle:"The Movie Selected"}} />
        </stack.Navigator>
    );
}
export default MoviesStack;