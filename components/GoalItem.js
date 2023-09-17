import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ text, id, onDeleteItem }) => {
	return (
		<Pressable style={styles.goalItem} onPress={() => onDeleteItem(id)}>
			<Text style={styles.goalText}>{text}</Text>
		</Pressable>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 10,
		backgroundColor: "#1e90ff",
	},
});
