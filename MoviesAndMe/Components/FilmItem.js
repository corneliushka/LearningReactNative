import React from 'react'
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native'

class FilmItem extends React.Component {
    render() {
        console.log(this.props);
        const film = this.props.film
        return (
            <View style={styles.main_container}>
                <View style={styles.view_globale}>
                    <Image 
                        style={styles.img}
                        source={{uri: "image"}}
                    />
                    <View style={styles.view_content}>
                        <View style={styles.view_header}>
                            <Text style={styles.title_text}>{film.title}</Text>
                            <Text style={styles.vote}>{film.vote_average}</Text>
                        </View>
                        <ScrollView style={styles.view_description}>
                            <Text style={styles.text_description} numberOfLines={10}>
                                {film.overview}
                            </Text>
                        </ScrollView>
                        <View style={styles.view_date}>
                            <Text>Sorti le 05/00/0000</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row'
    },

    view_globale : {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'black'
    },
    
    img: {
        height: 180,
        width: 120,
        margin: 4,
        backgroundColor: 'blue',
    },

    view_content : {
            backgroundColor: 'green',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
            margin: 4,
    },
    view_header: {
        height: 30,
        borderRadius: 4,
        borderWidth: 0.5,
        backgroundColor: 'orange',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 4,

    },
    title_text: {
        margin: 2,
    },
    vote: {
        margin: 2,
        fontSize: 16
    },
    view_description: {
        borderRadius: 4,
        borderWidth: 0.5,
        backgroundColor: 'red',
        margin: 2,
    },
    text_description: {

    },
    view_date: {
        borderRadius: 4,
        borderWidth: 0.5,
        backgroundColor: 'purple',
        margin: 2,
        height: 30
    },
})

export default FilmItem