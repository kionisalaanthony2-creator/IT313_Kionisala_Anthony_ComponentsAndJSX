import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import StudentRoster from "./components/StudentRoster";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StudentRoster />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: 56, paddingHorizontal: 16, paddingBottom: 40 },
});
