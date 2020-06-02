import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { trimString } from '../../../../utils/stringsHelper';

const ImageItem = (props) => {
  const { image, imageHeight, navigation } = props;
  const { urls, description, alt_description, user } = image;

  const imageDescription = description ? description : alt_description;
  const croppedImageDescription = trimString({ string: imageDescription });
  const { name } = user;
  const croppedName = trimString({ string: name });

  const imageStyles = {
    width: imageHeight,
    height: imageHeight,
  };

  const imageViewContainerStyles = Object.assign({}, styles.view, imageStyles);

  const { thumb } = urls;

  const openDetailedImage = () => {
    navigation.navigate('Modal', { image });
  };

  return (
    <View style={imageViewContainerStyles}>
      <TouchableOpacity onPress={openDetailedImage}>
        <View>
          <Image source={{ uri: thumb }} style={imageStyles} />

          {croppedImageDescription && (
            <View style={styles.descriptionView}>
              <View style={styles.description}>
                <Text>{croppedImageDescription}</Text>
                <Text>Автор: {croppedName}</Text>
              </View>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ImageItem;

const styles = StyleSheet.create({
  view: {
    marginBottom: 10,
    width: 100,
    height: 100,
  },
  descriptionView: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
    flex: 1,
    justifyContent: 'center',
  },
  description: {
    height: 40,
  },
});
