import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
// import Logo from '../components/Login/Logo';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import LoginUsername from '../components/LoginUsername';
import LoginPassword from '../components/LoginPassword';
import LoginButton from '../components/LoginButton';
import Wallpaper from '../components/Wallpaper';
// import ButtonLogin from '../components/LoginButton';
import SignupSection from '../components/SignupSection';

export default class LoginScreen extends Component {
  render() {
    return (
      <Wallpaper>
        {/* <Logo /> */}
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <LoginUsername />
          <LoginPassword />
          <LoginButton />
        </KeyboardAvoidingView>
        <SignupSection />
      </Wallpaper>
    );
  }
}

const DEVICE_WIDTH = Layout.window.width;
const DEVICE_HEIGHT = Layout.window.height;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    top: 30,
    width: DEVICE_WIDTH,
    padding: 20,
    justifyContent: "space-around",
  }
});
