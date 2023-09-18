import { useState } from "react";
import {
	Button,
	StyleSheet,
	TextInput,
	View,
	Modal,
	Image,
} from "react-native";

const GoalInput = ({ addGoal, visible, onCancel }) => {
	const [enteredGoalText, setEnterGoalText] = useState("");

	const goalInputHandler = (enteredText) => {
		setEnterGoalText(enteredText);
	};

	const addGoalHandler = () => {
		addGoal(enteredGoalText);
		setEnterGoalText("");
	};

	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require("../assets/images/goal.png")}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={addGoalHandler} />
					</View>
					<View style={styles.button}>
						<Button title="Cancel" onPress={onCancel} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		backgroundColor: "#311b6b",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "grey",
		width: "100%",
		marginRight: 8,
		padding: 8,
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: "row",
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
});
