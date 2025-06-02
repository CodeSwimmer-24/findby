import React, { use, useEffect, useState } from 'react';
import {
  StyleSheet,
  Alert,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import Login from './screens/Login';
import TabNavigation from './screens';
import useAuthStore from './zustand/userAuth';
import { BASE_URL } from './services';
import axios from 'axios';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '243617124026-ucdj6fh6k5bfs2e91v09lb5lrp2u4lke.apps.googleusercontent.com',
      offlineAccess: true,
    });

    const unsubscribe = auth().onAuthStateChanged(currentUser => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      const { idToken } = userInfo;
      if (!idToken) {
        throw new Error('Google Sign-In failed: No ID token received');
      }

      const credential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(credential);

      const { user } = userInfo;
      const name = user.name;
      const email = user.email;

      // Call backend with axios
      const response = await axios.post(`${BASE_URL}/login`, {
        emailId: email,
        name: name,
      });

      const data = response.data;
      console.log('Backend response:', data);

      // Store in Zustand
      const setUserInfo = useAuthStore.getState().setUserInfo;
      setUserInfo(name, email, data.isNewUser);

    } catch (error) {
      console.error('Google Sign-In Error:', error);

      let errorMessage = 'Login Failed';

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        errorMessage = 'Sign in cancelled';
      } else if (error.code === statusCodes.IN_PROGRESS) {
        errorMessage = 'Sign-in in progress already';
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        errorMessage = 'Play services not available';
      } else if (error.response) {
        // Handle axios response errors here if needed
        errorMessage = error.response.data?.message || 'API call failed';
      }

      Alert.alert('Error', errorMessage);
    }
  };
  const handleLogout = async () => {
    try {
      await auth().signOut();
      await GoogleSignin.signOut();

      // Clear Zustand state
      const clearUserInfo = useAuthStore.getState().clearUserInfo;
      clearUserInfo();

      console.log('User successfully logged out');
    } catch (error) {
      console.error('Logout Error:', error);
      Alert.alert('Logout Failed', error.message);
    }
  };

  // Save this logout function into Zustand
  useAuthStore.getState().setLogoutFunction(handleLogout);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="Home">
            {(props) => (
              <TabNavigation
                {...props}
                handleLogout={handleLogout}
              />
            )}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Login">
            {(props) => (
              <Login
                {...props}
                handleGoogleLogin={handleGoogleLogin}
              />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: '#FF3B30', // Red color for logout
  },
  userInfo: {
    marginBottom: 30,
    alignItems: 'center',
  },
  userText: {
    fontSize: 18,
    color: '#555',
  },
  userEmail: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
});