import * as React from "react";
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Layout from '../constants/Layout';
import Colors from "../constants/Colors";
import login from "../Fire";

export interface LoginButtonProps {}
export interface LoginButtonState {
  username: string;
  password: string;
}

const onPressLogin = (state) => {
  const {username, password} = state;
}

class LoginButton extends React.Component<LoginButtonProps, LoginButtonState> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.loginButton}
        onPress={onPressLogin(this.state)}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    );
  }
}

const DEVICE_WIDTH = Layout.window.width;
const DEVICE_HEIGHT = Layout.window.height;

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: Colors.darkBlue,
    padding: 20,
  },
  loginText: {
    color: Colors.white,
    textAlign: 'center',
  }
});

export default LoginButton;
