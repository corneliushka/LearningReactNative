# Learning ReactNative

Sources : [Développez une application mobile React Native
](https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native)

* React Native utilise les composants mobiles natifs
* CRNA (Create-React-Native-App) : la solution rapide pour passer au développement, avec peu de configuration (l'inconvénient est qu'elle ne permet pas d'utiliser du code natif et donc d'accéder aux composants du téléphone). + installation applicaion __EXPO__ pour android. 

## 1.1 Initialisation et création de nouveau projet 


- [Installer les outils : Node.js version LTS et packages NPM](https://websiteforstudents.com/install-the-latest-node-js-and-nmp-packages-on-ubuntu-16-04-18-04-lts/)

1) add Node.js PPA : 

sudo apt install curl
curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -

2) install node.js and NPM
   
sudo apt install nodejs
node -v
npm -v

3) expo-cli
   
$(sudo) npm install -g expo-cli --unsafe-perm


* /!\ Where to Set EXPO_DEBUG value in ReactNative app?
When you add some library into your project. then this type of problem occurs. This problem also occur for me when i try to add some navigator library into my react native project it happens then...
so if you are in a Linux OS then type in shell :  export EXPO_DEBUG=true

* /!\ Dans le folder du projet, pour octroyer les droits :
sudo chmod 777 -R /nomduprojet

* /!\ Reinstaller les node modules dans le dossier CRNA (ultimate solution err.code.match is not a function) : 
rm -rf node_modules && npm install 

- Création d'une CRNA

1) Aller dans le dossier de son choix et créer le CRNA
   
(sudo) expo init MoviesAndMe

2) choisir blank : et voilà, le setup est fini. 

## 1.2 Application de styles 


Tous les components React Native possèdent une propriété style. 

Il faut appliquer le style sur le component React Native représentant la vue de votre component (<View/>).

propriété style = component React Native.

Pour externaliser un style avec l'API StyleSheet : 

(dans le component)
import { StyleSheet, View, TextInput, Button } from 'react-native'

(dans le même componenent)

const styles = StyleSheet.create({
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom :10,
        height: 50,
        borderColor: 'grey',
        borderWidth: 1,
        paddingLeft: 5
    }
})

### 1.2.1 [Construire des vues avec Flexbox](https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native/5366161-construisez-vos-vues-avec-flexbox)

Par défaut, tous les components ReactNative ont un style flex : 0. Lorsque c'est le cas, sa taille dépend de height. 
Autrement, le flex du parent fixe la taille des components enfants.

3 choses à définir : 
- flexDirection  du component parent (column ou row)
- justifyContent qui permet de définir comment sont distribués vos components enfants sur l'axe principal.
- alignItems  est comme  justifyContent, sauf qu'il s'applique sur l'axe secondaire.

* Si vous avez un style  flexDirection: 'column' , l'alignement est vertical et l'axe principal est Y. L'axe secondaire est X.
* Si vous avez un style  flexDirection: 'row' , l'alignement est horizontal et l'axe principal est X. L'axe secondaire est Y.


## 1.3 Props

### la Flatlist 

C'est un component natif permettant la création d'une liste de données. Doit obligatoirement contenir : __data__ et __renderItem__.

Lorsqu'on utilise une __Flatlist__, il faut identifier chaque item de manière unique. Donc définir une propriété key sur nos items.
Pour cela on utilise le __keyExtractor__ 
EX: 
    <FlatList
        data={films}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <Text>{item.title}</Text>}
    />


## 1.4 States


## 1.5 React Navigation 

Tout d'abord installer la librairie : 
$ npm install --save react-navigation


### 1.5.1 Creation de StackNavigator 

Créer un dossier Navigation avec un fichier Navigation.js 
à l'intérieur. + import : 
import { createStackNavigator } from 'react-navigation'


* Un StackNavigator s'initialise avec les écrans qu'il va contenir. Cela signifie que vous devez renseigner la vue principale, mais aussi les vues qui vont être poussées et affichées. 