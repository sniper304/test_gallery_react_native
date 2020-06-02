import React, { useState } from 'react';
import { ActivityIndicator, Text, View, Image, StyleSheet } from 'react-native';

const Modal = ({ route }) => {
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const { params = {} } = route;

  const { image } = params;
  const { urls } = image;
  const { full } = urls;

  const hideActivityIndicator = () => {
    setLoading(false);
  };

  const showActivityIndicator = () => {
    setLoading(true);
  };

  const showError = () => {
    setLoading(false);

    setErrorMessage('Произошла ошибка при загрузке изображения');
  };

  return (
    <View style={styles.view}>
      <Image
        source={{ uri: full }}
        onLoadStart={showActivityIndicator}
        onLoadEnd={hideActivityIndicator}
        onError={showError}
        style={styles.image}
      />
      {isLoading && (
        <View style={styles.activityIndicator}>
          <ActivityIndicator />
        </View>
      )}
      {errorMessage && (
        <View style={styles.activityIndicator}>
          <Text>{errorMessage}</Text>
        </View>
      )}
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: '100%',
  },
  activityIndicator: {
    zIndex: 5,
    height: '100%',
    width: '100%',
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
  },
});
