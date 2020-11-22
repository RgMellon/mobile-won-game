import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { TextInput, TextInputProps } from 'react-native';

import { useField } from '@unform/core';

import * as S from './styles';
import theme from '../../styles/theme';

type InputProps = {
  name: string;
  icon: string;
} & TextInputProps;

type InputRef = {
  focus(): void;
};

type InputValueReference = {
  value: string;
};

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value', // a onde ele vai buscar o valor do input (dentro da prop value)
      setValue(ref: any, value) {
        inputValueRef.current.value = value; // o value da ref n modifica a tela, pois ele n eé um como um estado por exemplo
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  return (
    <S.Container isFocused={isFocused} isErrored={!!error}>
      <S.Icon
        name={icon}
        size={20}
        color={isFocused || isFilled ? theme.colors.primary : '#666360'}
      />
      <TextInput
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        {...rest}
        defaultValue={defaultValue}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
      />
    </S.Container>
  );
};

export default forwardRef(Input);
