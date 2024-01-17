import { Text, View, FlatList, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { useState } from "react";
import { movies } from "../../../Data/mocks";
import { movieGenres } from "../../../Data/mocks";
import { ItemData,MoviesProps}from'../../../Models/Movies';

type listofmovies = {
    moviesL: MoviesProps;
    onPress: () => void;
};
type ItemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
    <TouchableOpacity onPress={onPress} style={{ backgroundColor }}>
        <Text style={{ color: textColor }}>ID: {item.id}</Text>
        <Text style={{ color: textColor }}>name: {item.name}</Text>
    </TouchableOpacity>
);
function MoviesList ({ moviesL, onPress }: listofmovies){
    return (<TouchableOpacity key={moviesL.id} onPress={onPress} >
        <View style={{flex:1}}>
        <Text >
            ID:{moviesL.id}
        </Text>
        <Text>
            Name: {moviesL.original_title}
        </Text>
        <Text>
            TitleOfMovie:{moviesL.title}
        </Text>
        </View>
    </TouchableOpacity>);
}
function ListingMoviesScreen({navigation}) {
    const [selectedId, setSelectedId] = useState<number>();
    const [selectedMovies, setSelectedMovies] = useState<MoviesProps[]>();
    const rendertem = ({ item }: { item: ItemData }) => {
        const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
        const color = item.id === selectedId ? 'white' : 'black';
        function presshandle(item: ItemData) {
            
            setSelectedId(item.id);
        }
        return (
            <Item
                item={item}
                onPress={presshandle.bind(this, item)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );
    };
    function rendermovies ({ movie }: { movie: MoviesProps }) {
        const selected=movie.genre_ids.includes(selectedId);
        const moviex=movie;
        console.log("moviessss",movie);
        function presshandle() {
            
            navigation.navigator("MoviesDetails",{MovieDetails:movie});
        }
        return (
            <MoviesList moviesL={moviex}
                onPress={presshandle}
            />
        );
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ borderWidth: 3, flex: 1, alignContent: "stretch" }}>
                <FlatList<any> data={movieGenres} renderItem={rendertem} keyExtractor={item => item.id} horizontal={true} style={styles.con}  >
                </FlatList>
            </View>
            <View style={{ flex: 2 }}>
                <FlatList<any> data={movies} renderItem={rendermovies} keyExtractor={item=>item.id.toString()} numColumns={2}></FlatList>
            </View>
        </View>
    );
}
export default ListingMoviesScreen;
const styles = StyleSheet.create({
    con: {
        padding: 16,
    }
});
    

