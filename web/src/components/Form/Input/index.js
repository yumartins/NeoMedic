import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@unform/core';
import { bool, string } from 'prop-types';
import { search } from '../../Icon';
import {
  View,
  Label,
  Error,
  Search,
  Target,
  Wrapper,
} from './styles';

const Input = ({
  name,
  label,
  hasSearch,
  ...rest
}) => {
  const [value, onValue] = useState('');

  const inputRef = useRef(null);

  const {
    error,
    fieldName,
    defaultValue,
    registerField,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <View>
      <Target focus={value.length > 0}>
        <Label htmlFor={fieldName}>{label}</Label>
        <Wrapper
          {...rest}
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          onChange={(e) => onValue(e.target.value)}
        />
        {hasSearch && <Search name={search} />}
      </Target>
      {error && <Error>{error}</Error>}
    </View>
  );
};

Input.propTypes = {
  name: string.isRequired,
  label: string,
  hasSearch: bool,
};

Input.defaultProps = {
  label: '',
  hasSearch: false,
};

export default Input;
