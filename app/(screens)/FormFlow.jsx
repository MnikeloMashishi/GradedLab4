import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import Form from '../Form';
import Form2 from './Form2';
import Form3 from './Form3';

export default function FormFlow() {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  
  const handleNext = (data) => {
    setFormData(prevData => ({ ...prevData, ...data }));
    setCurrentStep(prevStep => prevStep + 1);
  };

  const handleSubmit = () => {
    Alert.alert('Success', 'Order Complete! Thank you for your submission.');
    setFormData({
      userName: '',
      userEmail: '',
      phoneNumber: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      cardNumber: '',
      expDate: '',
      cvv: '',
    });
    setCurrentStep(1);
  };

  return (
    <View>
      {currentStep === 1 && <Form onNext={handleNext} />}
      {currentStep === 2 && <Form2 onNext={handleNext} />}
      {currentStep === 3 && <Form3 onSubmit={handleSubmit} />}
    </View>
  );
}
