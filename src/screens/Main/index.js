import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { loadImages } from './store/actions';
import ImageItem from './components/ImageItem';
import { deviceDimensions } from '../../utils/dimensionsHelper';

const Main = (props) => {
  const {
    loadGalleryImagesRequest,
    isLoading,
    galleryImages,
    navigation,
  } = props;
  const [imageHeight, setImageHeight] = useState(100);

  useEffect(() => {
    loadGalleryImagesRequest();
  }, []);

  useEffect(() => {
    const { width } = deviceDimensions();
    setImageHeight(Math.round(width * 0.45));
  }, []);

  const noImages = Array.isArray(galleryImages) && galleryImages.length === 0;

  const renderItems = () => {
    if (isLoading) {
      return <ActivityIndicator />;
    }

    if (noImages) {
      return <Text>Нет загруженных изображений</Text>;
    }

    return (
      <ScrollView>
        <View style={styles.grid}>
          {galleryImages.map((image) => {
            const { id } = image;

            return (
              <ImageItem
                image={image}
                key={id}
                imageHeight={imageHeight}
                navigation={navigation}
              />
            );
          })}
        </View>
      </ScrollView>
    );
  };

  return <View style={styles.view}>{renderItems()}</View>;
};

const mapStateToProps = (state) => {
  const { images } = state,
    { data: galleryImages, isLoading } = images;
  return { galleryImages, isLoading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadGalleryImagesRequest: () => dispatch(loadImages()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

const baseMargin = 10;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginLeft: baseMargin,
    marginRight: baseMargin,
  },
});
