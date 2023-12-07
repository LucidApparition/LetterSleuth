// screens/LevelScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { images } from '../assets';

interface LevelScreenProps {
  route: any;
  navigation: any;
}

const LevelScreen: React.FC<LevelScreenProps> = ({ route, navigation }) => {
  const { level } = route.params;
  const [word, setWord] = useState<string>('');
  const calculateMistakesAllowed = (currentLevel: number): number => {
    return Math.max(20 - Math.floor(currentLevel / 15), 1);
  };
  const [mistakesAllowed, setMistakesAllowed] = useState<number>(calculateMistakesAllowed(level));
  const [mistakesMade, setMistakesMade] = useState<number>(0);
  const [imagePath, setImagePath] = useState<string>(images.animal.beaver);

  useEffect(() => {
    // Call the Flask server endpoint when the component mounts
    const fetchImagePieces = async () => {
      try {
        const response = await fetch('http://your-flask-server-ip:5000/split-image', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            imagePath,
            mistakesAllowed: mistakesAllowed,
          }),
        });

        if (!response.ok) {
          throw new Error('Server response was not ok');
        }

        const result = await response.json();
        console.log(result.imagePieces);
        // Handle the image pieces in your React Native app
      } catch (error: any) {
        if (typeof error === 'string') {
          console.error('Error calling Flask API', error);
        } else {
          console.error('Error calling Flask API:', error.message);
        }
      }
    };

    fetchImagePieces();
  }, [level, imagePath, mistakesAllowed]); // Add imagePath as a dependency

  const calculateWordLength = (currentLevel: number): number => {
    return Math.floor(currentLevel / 5) + 3;
  };

  const generateWord = (currentLevel: number, wordLength: number): string => {
    return 'EXAMPLE';
  };

  const handleLetterPress = (letter: string) => {
    if (word.includes(letter)) {
      // Handle correct guess
    } else {
      setMistakesMade((prevMistakes) => prevMistakes + 1);

      if (mistakesMade + 1 >= mistakesAllowed) {
        handleGameEnd(false);
      }
    }
  };

  const handleGameEnd = (isWin: boolean) => {
    Alert.alert(
      isWin ? 'Congratulations!' : 'Game Over',
      isWin ? 'You won!' : 'You lost. Try again!',
      [
        {
          text: 'OK',
          onPress: () => {
            navigation.goBack();
          },
        },
      ]
    );
  };

  const handleSettingsPress = () => {
    // Handle settings button press
    console.log('Settings button pressed');
  };

  const handleProfilePress = () => {
    // Handle profile button press
    console.log('Profile button pressed');
  };

  const handleImageChange = () => {
    // Implement your logic to switch between different images
    // For now, I'm just switching between two images as an example
    setImagePath((prevPath) => (prevPath === images.animal.beaver ? images.animal.buck : images.animal.beaver));
  };

  return (
    <View style={styles.container}>
      {/* Use CustomHeaderButton as the header */}
      <CustomHeaderButton
        onSettingsPress={handleSettingsPress}
        onProfilePress={handleProfilePress}
      />

      {/* Button to switch between images */}
      <TouchableOpacity style={styles.changeImageButton} onPress={handleImageChange}>
        <Text style={styles.changeImageButtonText}>Change Image</Text>
      </TouchableOpacity>

      {/* Display the current image */}
      <Image source={{ uri: imagePath }} style={styles.image} />

      <Text style={styles.title}>{`Level ${level}`}</Text>
      <Text style={styles.info}>{`Mistakes Allowed: ${mistakesAllowed}`}</Text>
      <Text style={styles.info}>{`Word Length: ${word.length}`}</Text>

      <View style={styles.wordContainer}>
        {word.split('').map((letter, index) => (
          <View key={index} style={styles.wordLetter}>
            {letter === ' ' ? <Text style={styles.wordLetterText}>&nbsp;</Text> : <Text style={styles.wordLetterText}>{letter}</Text>}
          </View>
        ))}
      </View>

      <View style={styles.keyboard}>
        <View style={styles.keyboardRow}>
          {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
            <TouchableOpacity key={letter} style={styles.keyboardButton} onPress={() => handleLetterPress(letter)}>
              <Text style={styles.keyboardButtonText}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
  wordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  wordLetter: {
    borderWidth: 1,
    borderColor: '#3498db',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wordLetterText: {
    fontSize: 18,
  },
  keyboard: {
    marginTop: 20,
  },
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  keyboardButton: {
    backgroundColor: '#3498db',
    padding: 15,
    margin: 5,
    borderRadius: 5,
  },
  keyboardButtonText: {
    color: 'white',
    fontSize: 18,
  },
  changeImageButton: {
    backgroundColor: '#3498db',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  changeImageButtonText: {
    color: 'white',
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default LevelScreen;
