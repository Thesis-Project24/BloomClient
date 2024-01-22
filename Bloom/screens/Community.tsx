import React from "react";
import { View, FlatList, StyleSheet, Button } from "react-native";
// import PostForum from "../components/forum/PostForum";

const Community = () => {
  const posts = [
    { id: 1, title: "First Post", content: "This is the first post content" },
    { id: 2, title: "Second Post", content: "This is the second post content" },
    {
      id: 3,
      title: "STAPS",
      content:
        "STAPS est une revue multidisciplinaire publiée depuis 1980 sous l’égide de l’AFRAPS (Association Francophone pour la Recherche en Activités Physiques et Sportives). Elle publie des recherches dans le domaine des sciences sociales et des sciences humaines du sport et de l’éducation physique : histoire, sociologie, psychologie, études culturelles, sciences de l’éducation, didactique et intervention, ethnologie, anthropologie, épistémologie, management, etc. La revue STAPS suscite une analyse scientifique du phénomène sportif et/ou de l’éducation physique dans la réalité de leurs pratiques, de leurs institutions et de leurs acteurs. Revue francophone internationale à comité de lecture, elle publie des articles de sciences sociales et humaines du sport, en français et en anglais, de chercheurs du monde entier",
    },
    {
      id: 4,
      title: "Revue historique des Armées",
      content:
        "Éditée par le Service historique de la Défense, la Revue historique des Armées offre au chercheur comme au passionné des articles et des dossiers thématiques couvrant tous les domaines de l’histoire militaire, de l’Ancien Régime aux opérations les plus actuelles. Richement illustrée grâce, notamment, aux collections iconographiques du SHD, elle publie des articles variés, des dossiers centrés autour d’une thématique, diverses chroniques bibliographiques, des comptes-rendus de travaux universitaires, de colloques ou de tout autre manifestation intéressant l’histoire militaire. Fondée en 1945 sous le titre de Revue historique de l’Armée, elle fut couronnée par l’Académie française en 1954.",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        // renderItem={({ item }) => <PostForum post={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        title="Create New Post"
        onPress={() => {
          /* Navigate to New Post Screen */
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

export default Community;
