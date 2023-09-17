import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
				/>
				<Button title="Add Goal" />
			</View>
			<View>
				<Text>List of goals...</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		paddingTop: 60,
		paddingHorizontal: 16,
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingBottom: 24,
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
