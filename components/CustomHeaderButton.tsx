// components/CustomHeaderButton.tsx
import React from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import { images } from '../assets';

interface CustomHeaderButtonProps {
  onSettingsPress: () => void;
  onProfilePress: () => void;
}

const CustomHeaderButton: React.FC<CustomHeaderButtonProps> = ({ onSettingsPress, onProfilePress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSettingsPress} style={styles.buttonContainer}>
        <Image source={images.settingsSVG} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onProfilePress} style={styles.buttonContainer}>
        <Image source={images.profileSVG} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 15,
  },
  buttonContainer: {
    marginRight: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default CustomHeaderButton;
