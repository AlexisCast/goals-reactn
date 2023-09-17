import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);

	const addGoalHandler = (enteredGoalText) => {
		setCourseGoals((prev) => [
			...prev,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
	};

	return (
		<View style={styles.appContainer}>
			<GoalInput addGoal={addGoalHandler} />
			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => (
						<GoalItem text={itemData.item.text} />
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

	goalsContainer: {
		flex: 5,
	},

	goalText: {
		color: "white",
	},
});
