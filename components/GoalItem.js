import { StyleSheet, Text, View } from "react-native";

const GoalItem = ({ text }) => {
	return (
		<View style={styles.goalItem}>
			<Text style={styles.goalText}>{text}</Text>
		</View>
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
