# Learning ReactNative

Sources : [Développez une application mobile React Native
](https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native)

* React Native utilise les composants mobiles natifs
* CRNA (Create-React-Native-App) : la solution rapide pour passer au développement, avec peu de configuration (l'inconvénient est qu'elle ne permet pas d'utiliser du code natif et donc d'accéder aux composants du téléphone). + installation applicaion __EXPO__ pour android. 

## 1. Initialisation et création de nouveau projet 


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