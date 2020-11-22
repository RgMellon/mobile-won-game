import React, { useCallback, useRef } from 'react';
import { View } from 'react-native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import SignInTemplate from '../../templates/SignInTemplate';
import Button from '../../components/Button';
import Heading from '../../components/Heading';

const SignIn = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSignIn = useCallback(() => {
    console.log('po');
  }, []);

  return (
    <SignInTemplate headingText="Sign in">
      <View>
        <Form ref={formRef} onSubmit={handleSignIn}>
          <Input
            name="email"
            icon="mail"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Email"
            returnKeyType="next"
            // onSubmitEditing={() => {
            //   passwordInputRef.current?.focus();
            // }}
          />

          <Input
            name="password"
            icon="lock"
            secureTextEntry
            placeholder="Digite sua senha"
            returnKeyType="send"
            // ref={passwordInputRef}
            onSubmitEditing={() => {
              formRef.current?.submitForm();
            }}
          />

          <Button fullWidth>Sign in</Button>
        </Form>
      </View>
    </SignInTemplate>
  );
};

export default SignIn;
