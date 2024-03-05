import React from 'react';
import { ScrollView, ImageBackground, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import monImage from '../assets/hero.png'; 
import hero from '../assets/hero.png'; 
import jardin from '../assets/jardin.jpg'; 
import ecole from '../assets/ecole.jpg'; 
import ville from '../assets/ville.png'; 

const { width, height } = Dimensions.get('window');

const Tile = ({ title, desc, subtitle, imageUrl, destination }) => {
  const navigation = useNavigation(); 

  const handlePress = () => {
    navigation.navigate(destination); 
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.tile}>
        <View style={styles.tileContent}>
          <Image source={imageUrl} style={styles.tileImage} />
          <View style={styles.tileText}>
            <Text style={styles.tileTitle}>{title}</Text>
            <Text style={styles.tileSubtitle}>{subtitle}</Text>
             <Text style={styles.tileDesc}>{desc}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const App = () => {
  const tilesData = [
    { title: 'Association Aide aux Sans-Abris (ASA)', subtitle: 'Difficulté: Moyen',  desc: "Recherche de bénévoles pour aider à distribuer des repas chauds aux sans-abris dans le centre-ville. Les bénévoles seront responsables de la préparation des repas...", imageUrl: ville, destination: 'Page1' },
    { title: 'Jardin de la Solidarité', subtitle: 'Difficulté: Facile', desc:"Nous recherchons des bénévoles pour aider à entretenir notre jardin communautaire. Les tâches incluent le désherbage, la plantation, l'arrosage des plantes et la récolte des légumes...", imageUrl: jardin, destination: 'Page2' },
    { title: "Centre d'Éducation pour Tous (CET)", subtitle: 'Difficulté: Avancé', desc: "Nous avons besoin de bénévoles pour donner des cours de soutien scolaire en mathématiques et en sciences à des élèves du primaire et du secondaire...", imageUrl: ecole, destination: 'Page3' },

  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ImageBackground source={monImage} resizeMode="cover" style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Aider, c'est revêtir la cape du héros</Text>
        </View>
      </ImageBackground>
      <View style={styles.contentContainer}>
        {tilesData.map((tile, index) => (
          <Tile
            key={index}
            title={tile.title}
            subtitle={tile.subtitle}
            desc={tile.desc}
            imageUrl={tile.imageUrl}
            destination={tile.destination}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  image: {
    width: width,
    height: height,
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10,
  },
  sideImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  contentContainer: {
    padding: 20,
  },
  tile: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    height: 200, 
  },
  tileContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tileImage: {
    width: 80, 
    height: '100%', 
    resizeMode: 'cover',
  },
  tileText: {
    flex: 1, 
    marginLeft: 10,
  },
  tileTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tileSubtitle: {
    fontSize: 12, 
    fontStyle: 'italic', 
  },
  tileDesc: {
    fontSize: 14,
    textAlign: 'left', 
  },
});

export default App;
