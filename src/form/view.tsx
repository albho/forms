import React, { SetStateAction } from 'react';

// Components
import Button, { ButtonVariant } from '../components/button';
import Input from './input';

type ViewType = {
  onSubmit: () => void;
  firstName: string;
  setFirstName: React.Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<SetStateAction<string>>;
  gender: any;
  setGender: React.Dispatch<SetStateAction<string>>;
  hobbies: any;
  setHobbies: React.Dispatch<SetStateAction<string>>;
  checkbox: any;
  setCheckbox: React.Dispatch<SetStateAction<string>>;
  about: any;
  setAbout: React.Dispatch<SetStateAction<string>>;
  isFirstNameErr: boolean;
  isLastNameErr: boolean;
  isEmailErr: boolean;
  isGenderErr: boolean;
  isHobbiesErr: boolean;
  isCheckboxErr: boolean;
  isAboutErr: boolean;
};

// Labels & Helper/Error text
const View = (props: ViewType) => {
  return (
    <form>
      <Input
        id="first-name"
        type="text"
        label="First Name"
        value={props.firstName}
        setValue={props.setFirstName}
        isError={props.isFirstNameErr}
        errorText="Invalid first name"
        helperText="Please enter your first name"
      />
      <Input
        id="last-name"
        type="text"
        label="Last Name"
        value={props.lastName}
        setValue={props.setLastName}
        isError={props.isLastNameErr}
        errorText="Invalid last name"
        helperText="Please enter your last name"
      />
      <Button variant={ButtonVariant.BLUE} onClick={props.onSubmit}>
        Submit
      </Button>
    </form>
  );
};

export default View;
