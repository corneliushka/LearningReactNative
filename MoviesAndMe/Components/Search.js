// Components/Search.js


import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, ActivityIndicator, Text } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' 
/* import films from '../Helpers/filmsData' 
 */

class Search extends React.Component {

    constructor(props) {
        super(props)    // Ici on va créer les propriétés de notre component custom Search
        this.state = { 
            films: [],
            isLoading: false // par défaut pour éviter le chargement tant qu'on ne lance pas de recherche
        }
    }

    _searchTextInputChanged(text) {
        this.setState({ searchedText: text })
    }

    _loadFilms() {
        console.log(this.state.searchedText) // Un log pour vérifier qu'on a bien le texte du TextInput
        if (this.state.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
            getFilmsFromApiWithSearchedText(this.state.searchedText).then(data => {
                this.setState({ 
                    films: data.results,
                    isLoading: false // arrêt du chargement
                })
        })
        }
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' /> {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
                </View>
            )
        }
    }

    render() {
        console.log(this.state.isLoading)
        return (
            <View style={styles.main_container}>
                <TextInput 
                    style={styles.textinput} 
                    placeholder='Titre du film'
                    onSubmitEditing={() => this._loadFilms()}
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                />
                <Button title='Rechercher' onPress={() => this._loadFilms()}/>
                <FlatList 
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },

    main_container: {
        flex: 1 ,
        marginTop: 40
    },
    textinput: {
        height: 400,
        marginLeft: 5,
        marginRight: 5,
        marginBottom :10,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
}) 


export default Search