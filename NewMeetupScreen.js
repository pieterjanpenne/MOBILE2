// NewMeetupScreen.js
import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const NewMeetupScreen = ({ navigation }) => {
  const initialValues = {
    title: "",
    address: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(4, "Title must be at least 4 characters")
      .required("Title is required"),
    address: Yup.string()
      .min(4, "Address must be at least 4 characters")
      .required("Address is required"),
    description: Yup.string()
      .min(8, "Description must be at least 8 characters")
      .required("Description is required"),
  });

  const handleSubmit = (values) => {
    const newMeetup = {
      id: Math.random().toString(),
      title: values.title,
      address: values.address,
      description: values.description,
      isFavorite: false, // Set initial favorite status here
    };

    navigation.navigate("AllMeetups", { newMeetup });
  };

  const handleCancel = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Meetup</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Title"
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
            />
            {errors.title && <Text style={styles.error}>{errors.title}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Address"
              onChangeText={handleChange("address")}
              onBlur={handleBlur("address")}
              value={values.address}
            />
            {errors.address && (
              <Text style={styles.error}>{errors.address}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Description"
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
              value={values.description}
              multiline
              numberOfLines={4}
            />
            {errors.description && (
              <Text style={styles.error}>{errors.description}</Text>
            )}

            <Button title="Add Meetup" onPress={handleSubmit} />
            <Button title="Cancel" onPress={handleCancel} />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... (existing styles)
});

export default NewMeetupScreen;
