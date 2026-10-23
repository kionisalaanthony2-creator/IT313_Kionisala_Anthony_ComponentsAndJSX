import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// Props are destructured right in the function signature
export default function StudentCard({ name, course, units, isFullLoad }) {
  // Local state for each card
  const [present, setPresent] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>Course: {course}</Text>
      <Text>Units: {units}</Text>

      {/* Conditional rendering: only shown when isFullLoad is true */}
      {isFullLoad && <Text style={styles.badge}>Full Load</Text>}

      {/* Button and label that depend on the card's own state */}
      <Button title="Mark present" onPress={() => setPresent(true)} />
      {present && <Text style={styles.present}>✔ Present</Text>}
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
  present: { marginTop: 6, color: "#2e7d32", fontWeight: "bold" },
});