import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ addGoal }) => {
	const [enteredGoalText, setEnterGoalText] = useState("");

	const goalInputHandler = (enteredText) => {
		setEnterGoalText(enteredText);
	};

	const addGoalHandler = () => {
		addGoal(enteredGoalText);
		setEnterGoalText("");
	};

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.textInput}
				placeholder="Your course goal!"
				onChangeText={goalInputHandler}
				value={enteredGoalText}
			/>
			<Button title="Add Goal" onPress={addGoalHandler} />
		</View>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 24,
		borderBottomWidth: 1,
		borderColor: "grey",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "grey",
		width: "70%",
		marginRight: 8,
		padding: 8,
	},
});
