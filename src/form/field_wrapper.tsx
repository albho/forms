import React from 'react';

// Stylesheets
import styles from './form.module.scss';

type FieldWrapperType = {
  id: string;
  label: string;
  children: JSX.Element;
  helperText?: string;
  errorText?: string;
  isError?: boolean;
};

const FieldWrapper = (props: FieldWrapperType) => {
  return (
    <div className={styles.field}>
      <label htmlFor={props.id} className={styles.label}>
        {props.label}
      </label>
      {props.children}
      {props.isError ? (
        <div className={`${styles.helper_text} ${styles.error_text}`}>
          {props.errorText}
        </div>
      ) : (
        props.helperText && (
          <div className={`${styles.helper_text}`}>{props.helperText}</div>
        )
      )}
    </div>
  );
};

export default FieldWrapper;
