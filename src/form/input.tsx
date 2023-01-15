import React from 'react';
import FieldWrapper from './field_wrapper';

// Stylesheets
import styles from './form.module.scss';

type InputType = {
  id: string;
  type: 'text' | 'email';
  label: string;
  value: string;
  setValue: (e: string) => void;
  helperText?: string;
  errorText?: string;
  isError?: boolean;
};

const Input = (props: InputType) => {
  return (
    <FieldWrapper
      id={props.id}
      label={props.label}
      isError={props.isError}
      errorText={props.errorText}
      helperText={props.helperText}
    >
      <input
        id={props.id}
        className={styles.input}
        type={props.type}
        value={props.value}
        onChange={e => props.setValue(e.target.value)}
      />
    </FieldWrapper>
  );
};

export default Input;
