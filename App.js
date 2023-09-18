import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [modalIsVisible, setModalIsVisible] = useState(false);

	const startAddGoalHandler = () => {
		setModalIsVisible(true);
	};

	const addGoalHandler = (enteredGoalText) => {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);

		endAddGoalHandler(false);
	};

	const deleteGoalHandler = (id) => {
		setCourseGoals((currentCourseGoals) => {
			return currentCourseGoals.filter((goal) => goal.id !== id);
		});
	};

	const endAddGoalHandler = () => {
		setModalIsVisible(false);
	};

	return (
		<View style={styles.appContainer}>
			<Button
				title="Add New Goal"
				color="#1e90ff"
				onPress={startAddGoalHandler}
			/>
			<GoalInput
				addGoal={addGoalHandler}
				visible={modalIsVisible}
				onCancel={endAddGoalHandler}
			/>
			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => (
						<GoalItem
							text={itemData.item.text}
							id={itemData.item.id}
							onDeleteItem={deleteGoalHandler}
						/>
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
});
