// screens/GroupGameScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import CustomHeaderButton from '../components/CustomHeaderButton';

interface GroupGameScreenProps {
  navigation: any;
}

const GroupGameScreen: React.FC<GroupGameScreenProps> = ({ navigation }) => {
  const [wordInput, setWordInput] = useState<string>('');
  const [selectedDrawing, setSelectedDrawing] = useState<string | null>(null);
  const [mistakesAllowedInput, setMistakesAllowedInput] = useState<string>('');

  const handleNext = () => {
    // Validate that wordInput is not empty before proceeding
    if (wordInput.trim() !== '') {
      // Navigate to the next screen for selecting a drawing
      navigation.navigate('SelectDrawing', { onSelectDrawing: handleSelectDrawing });
    }
  };

  const handleSelectDrawing = (drawing: string) => {
    // Handle the selected drawing
    setSelectedDrawing(drawing);
  };

  const handleStart = () => {
    // Validate that mistakesAllowedInput is a positive number before proceeding
    const mistakesAllowed = parseInt(mistakesAllowedInput, 10);
    if (!isNaN(mistakesAllowed) && mistakesAllowed > 0) {
      // Navigate to the LevelScreen with the selected word, drawing, and mistakes allowed
      navigation.navigate('LevelScreen', {
        word: wordInput,
        drawing: selectedDrawing,
        mistakesAllowed,
      });
    }
  };

  const handleSettingsPress = () => {
    // Handle settings button press
    console.log('Settings button pressed');
  };

  const handleProfilePress = () => {
    // Handle profile button press
    console.log('Profile button pressed');
  };

  const handleChangeImagePress = () => {
    // Implement your logic to change the image
    console.log('Change Image button pressed');
  };

  return (
    <View style={styles.container}>
      <CustomHeaderButton
        onSettingsPress={handleSettingsPress}
        onProfilePress={handleProfilePress}
      />

      {/* ... (rest of your code) */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // ... (other styles)
});

export default GroupGameScreen;
