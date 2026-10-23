import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import StudentCard from "./StudentCard";

const initialStudents = [
  { id: "s1", name: "Ana Cruz", course: "IT313", units: 21, isFullLoad: true },
  { id: "s2", name: "Bea Santos", course: "IT313", units: 15, isFullLoad: false },
  { id: "s3", name: "Cid Ramos", course: "IT313", units: 18, isFullLoad: true },
  { id: "s4", name: "Dex Alonzo", course: "IT313", units: 12, isFullLoad: false },
];

export default function StudentRoster() {
  // State, so the Reverse button can change the order
  const [students, setStudents] = useState(initialStudents);

  return (
    // Single root element wrapping the header and the list
    <View>
      {/* JSX expression + template literal: the count is computed, not hard-coded */}
      <Text style={styles.header}>{`Total students: ${students.length}`}</Text>

      {/* Copy first, then reverse (never mutate state directly) */}
      <Button
        title="Reverse order"
        onPress={() => setStudents((prev) => [...prev].reverse())}
      />

      {/* One card per student, with a stable key */}
     {students.map((student, index) => (
  <StudentCard
    key={index}   // TEMPORARY: index as key, to show the problem
    name={student.name}
    course={student.course}
    units={student.units}
    isFullLoad={student.isFullLoad}
  />
))}
    </View>
  );
}

const styles = StyleSheet.create({
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
});