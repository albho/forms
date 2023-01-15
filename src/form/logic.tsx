import React, { useState } from 'react';

// Components
import View from './view';

// Values & Error
const Logic = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [checkbox, setCheckbox] = useState('');
  const [about, setAbout] = useState('');

  const [isFirstNameErr, setIsFirstNameErr] = useState(false);
  const [isLastNameErr, setIsLastNameErr] = useState(false);
  const [isEmailErr, setIsEmailErr] = useState(false);
  const [isGenderErr, setIsGenderErr] = useState(false);
  const [isHobbiesErr, setIsHobbiesErr] = useState(false);
  const [isCheckboxErr, setIsCheckboxErr] = useState(false);
  const [isAboutErr, setIsAboutErr] = useState(false);

  const handleSubmit = () => {
    console.log('Form Submitted');
  };

  const fields = {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    gender,
    setGender,
    hobbies,
    setHobbies,
    checkbox,
    setCheckbox,
    about,
    setAbout,
    isFirstNameErr,
    isLastNameErr,
    isEmailErr,
    isGenderErr,
    isHobbiesErr,
    isCheckboxErr,
    isAboutErr,
  };

  return <View onSubmit={handleSubmit} {...fields} />;
};

export default Logic;
