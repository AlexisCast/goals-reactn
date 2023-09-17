import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
	Button,
	FlatList,
	StyleSheet,
	Text,
	TextInput,
	View,
	ScrollView,
} from "react-native";

export default function App() {
	const [enteredGoalText, setEnterGoalText] = useState("");
	const [courseGoals, setCourseGoals] = useState([]);

	const goalInputHandler = (enteredText) => {
		setEnterGoalText(enteredText);
	};

	const addGoalHandler = () => {
		setEnterGoalText("");
		setCourseGoals((prev) => [
			...prev,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
	};

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<Button title="Add Goal" onPress={addGoalHandler} />
			</View>
			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => (
						<View style={styles.goalItem}>
							<Text style={styles.goalText}>
								{itemData.item.text}
							</Text>
						</View>
					)}
					keyExtractor={(item, index) => item.id}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 60,
		paddingHorizontal: 16,
	},
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
	goalsContainer: {
		flex: 5,
	},
	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 10,
		backgroundColor: "#1e90ff",
	},
	goalText: {
		color: "white",
	},
});
