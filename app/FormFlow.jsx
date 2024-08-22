import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import Form from './Form';
import Form2 from './Form2';
import Form3 from './Form3';

export default function FormFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    // Merge form data with existing data
    setFormData((prevData) => ({ ...prevData, ...data }));

    // Move to the next step
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    // Final submission logic
    Alert.alert('Form Submitted', 'Thank you for completing the form!');
    // Optionally, clear form data or navigate to another screen
  };

  return (
    <View style={styles.container}>
      {currentStep === 1 && <Form onNext={handleNext} />}
      {currentStep === 2 && <Form2 onNext={handleNext} onPrevious={handlePrevious} />}
      {currentStep === 3 && <Form3 onPrevious={handlePrevious} onSubmit={handleSubmit} />}

      {currentStep > 1 && (
        <Button title="Back" onPress={handlePrevious} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
