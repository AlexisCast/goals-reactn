import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ text, id, onDeleteItem }) => {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: "#dddddd" }}
				onPress={() => onDeleteItem(id)}
				style={(pressedData) =>
					pressedData.pressed && styles.pressedItem
				}
			>
				<Text style={styles.goalText}>{text}</Text>
			</Pressable>
		</View>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 10,
		backgroundColor: "#1e90ff",
	},
	pressedItem: {
		opacity: 0.5,
	},
	goalText: {
		color: "white",
		padding: 8,
	},
});
