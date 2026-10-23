import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Props are destructured right in the function signature
export default function StudentCard({ name, course, units, isFullLoad }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>Course: {course}</Text>
      <Text>Units: {units}</Text>

      {/* Conditional rendering: only shown when isFullLoad is true */}
      {isFullLoad && <Text style={styles.badge}>Full Load</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  name: { fontSize: 16, fontWeight: "bold", marginBottom: 4 },
  badge: {
    marginTop: 6,
    alignSelf: "flex-start",
    backgroundColor: "#1c1a4f",
    color: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: "hidden",
  },
});