// Components/Search.js


import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, ActivityIndicator, Text } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' 

class Search extends React.Component {

    constructor(props) {
        super(props)    // Ici on va créer les propriétés de notre component custom Search
        this.page = 0 // compteur pour connaitre la page courante
        this.totalPages = 0 // nombre de pages totales pour savoir si on a tteint la fin des retours de l'API TMDB
        this.searchedText = ""
        this.state = { 
            films: [],
            isLoading: false // par défaut pour éviter le chargement tant qu'on ne lance pas de recherche
        }
    }

    _loadFilms() {
            if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
                this.setState({ isLoading: true })
                getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
                    this.page = data.page
                    this.totalPages = data.total_pages
                    this.setState({ 
                        films: this.state.films.concat(data.results),
                        isLoading: false // arrêt du chargement
                    })
                })
            }
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large'/>
                </View>
            )
        }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text 
    }
    
    _searchFilms() { // c'est ici qu'on remet a zero lors d'une nouvelle recherche
        this.page = 0
        this.totalPages = 0
        this.setState({
            films: []
        })
        console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)
        this._loadFilms()
    }

    render() {
        console.log(this.state.isLoading)
        return (
            <View style={styles.main_container}>
                <TextInput 
                    style={styles.textinput} 
                    placeholder='Titre du film'
                    onSubmitEditing={() => this._searchFilms()} // on remplace _loadFIlms ici et dans le button
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                />
                <Button title='Rechercher' onPress={() => this._searchFilms()}/> 
                <FlatList 
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        console.log("onEndReached")
                        if (this.page < this.totalPages) {
                            this._loadFilms() 
                        }
                    }}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
                {this._displayLoading()}
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