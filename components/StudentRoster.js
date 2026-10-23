import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StudentCard from "./StudentCard";

export default function StudentRoster() {
  const students = [
    { id: "s1", name: "Ana Cruz", course: "IT313", units: 21, isFullLoad: true },
    { id: "s2", name: "Bea Santos", course: "IT313", units: 15, isFullLoad: false },
    { id: "s3", name: "Cid Ramos", course: "IT313", units: 18, isFullLoad: true },
    { id: "s4", name: "Dex Alonzo", course: "IT313", units: 12, isFullLoad: false },
  ];

  return (
    // Single root element wrapping the header and the list
    <View>
      {/* JSX expression + template literal: the count is computed, not hard-coded */}
      <Text style={styles.header}>{`Total students: ${students.length}`}</Text>

      {/* One card per student, with a stable key */}
      {students.map((student) => (
        <StudentCard
          key={student.id}
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