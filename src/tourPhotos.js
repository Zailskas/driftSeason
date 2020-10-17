import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

class tourPhotos extends Component {
  constructor() {
    super();
    this.state = {
      season: [
        {
          tour: 'Kursenai',
          tourID: 1,
          date: 'July 4-5',
          photo: [
            {
              uri: 'https://i.ibb.co/ZdJHTnG/kursenai1png.png',
              key: 1,
              tourID: 1,
            },
            {
              uri: 'https://i.ibb.co/Qj6DjH3/kursenai2png.png',
              key: 2,
              tourID: 1,
            },
            {
              uri: 'https://i.ibb.co/5rJsHvF/kursenai3png.png',
              key: 3,
              tourID: 1,
            },
            {
              uri: 'hhttps://i.ibb.co/2PLRJ8v/kursenai4png.png',
              key: 4,
              tourID: 1,
            },
            {
              uri: 'https://i.ibb.co/Hg415vR/kursenai5png.png',
              key: 5,
              tourID: 1,
            },
            {
              uri: 'https://i.ibb.co/WcjQXRS/kursenai6png.png',
              key: 6,
              tourID: 1,
            },
          ],
        },
        {
          tour: 'Moletai',
          tourID: 2,
          date: 'July 18-19',
          photo: [
            {
              uri:
                'https://www.facebook.com/m0ntyba/photos/a.684362292426880/684357762427333/',
              key: 7,
              tourID: 2,
            },
            {
              uri:
                'https://www.facebook.com/m0ntyba/photos/a.684362292426880/684358505760592/',
              key: 8,
              tourID: 2,
            },
            {
              uri:
                'https://www.facebook.com/m0ntyba/photos/a.683807615815681/683802029149573/',
              key: 9,
              tourID: 2,
            },
            {
              uri:
                'https://www.facebook.com/m0ntyba/photos/a.683807615815681/683802609149515/',
              key: 10,
              tourID: 2,
            },
            {
              uri:
                'https://www.facebook.com/m0ntyba/photos/a.683807615815681/683804859149290/',
              key: 11,
              tourID: 2,
            },
            {
              uri:
                'https://www.facebook.com/m0ntyba/photos/a.683807615815681/683807332482376/',
              key: 12,
              tourID: 2,
            },
          ],
        },
        {
          tour: 'Kacergine',
          tourID: 3,
          date: 'August 7-9',
          photo: [
            {
              uri:
                'https://www.facebook.com/m0ntyba/photos/a.695238568005919/695335754662867/',
              key: 13,
              tourID: 3,
            },
            {
              uri:
                'https://www.facebook.com/m0ntyba/photos/a.695238568005919/695343747995401/',
              key: 14,
              tourID: 3,
            },
            {
              uri:
                'https://www.facebook.com/m0ntyba/photos/a.695238568005919/695339984662444/',
              key: 15,
              tourID: 3,
            },
            {
              uri:
                'https://www.facebook.com/m0ntyba/photos/a.695652987964477/695646924631750/',
              key: 16,
              tourID: 3,
            },
            {
              uri:
                'https://www.facebook.com/m0ntyba/photos/a.695652987964477/695648737964902/',
              key: 17,
              tourID: 3,
            },
            {
              uri:
                'https://www.facebook.com/m0ntyba/photos/a.695652987964477/695649421298167/',
              key: 18,
              tourID: 3,
            },
          ],
        },
        {
          tour: 'Marijampole',
          tourID: 4,
          date: 'September 5-6',
          photo: [
            {
              uri:
                'https://www.facebook.com/m0ntyba/photos/a.718888068974302/718886672307775/',
              key: 19,
              tourID: 4,
            },
            {
              uri:
                'https://www.facebook.com/m0ntyba/photos/a.718888068974302/718883425641433/',
              key: 20,
              tourID: 4,
            },
            {
              uri:
                'https://www.facebook.com/m0ntyba/photos/a.718888068974302/718884938974615/',
              key: 21,
              tourID: 4,
            },
            {
              uri:
                'https://www.facebook.com/m0ntyba/photos/a.719945942201848/719945458868563/',
              key: 22,
              tourID: 4,
            },
            {
              uri:
                'https://cdn.dribbble.com/users/259950/screenshots/4521610/zalgiris.png',
              key: 23,
              tourID: 4,
            },
            {
              uri: 'https://i.ibb.co/mcmCKcf/marijampole6.png',
              key: 24,
              tourID: 4,
            },
          ],
        },
      ],
    };
  }
  render() {
    const tourID = this.props.route.params.tourID;
    const dataPhoto = this.state.season
      .filter(function (item) {
        return item.tourID === tourID;
      })
      .map(function ({photo}) {
        return {photo};
      });
    const imageGrid = (itemData) => {
      const photo = itemData.item.photo.map((item) => (
        <View style={styles.screen}>
          <Text>{item.url}</Text>
          <Image style={styles.logo} source={{uri: item.uri}} />
        </View>
      ));
      console.log(photo);
      return photo;
    };
    return (
      <View>
        <Text>{tourID} tour</Text>
        <FlatList
          data={dataPhoto}
          renderItem={imageGrid}
          keyExtractor={(item, index) => item.key}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  logo: {
    width: '90%',
    height: 240,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default tourPhotos;
