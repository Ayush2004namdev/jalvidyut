import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './App/Screen/LoginScreen';
import { ClerkProvider , SignedIn,SignedOut } from "@clerk/clerk-expo";

import BottonNavigation from './App/Navigation/bottonNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './Lib/AppContext';

export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_Y2xvc2UtcHJpbWF0ZS0yMS5jbGVyay5hY2NvdW50cy5kZXYk'>
      <AppProvider>
      <NavigationContainer>
      <SignedIn>
        <BottonNavigation/>
      </SignedIn>
      <SignedOut>
        <LoginScreen/>
      </SignedOut>
      </NavigationContainer>
      </AppProvider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
