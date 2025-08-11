# react-native-typical

React native version of react-typical package.

## Change Log

1.2.3
- Minor typing fix

1.2.2
- Making all the props optional in typescript

1.2.1
- Adding typescript support
- Fixed an issue where new steps transition was not happening gracefully but instead flickering

1.2.0
- Added support to gracefully transition to new steps
- Added support to change blinking character using `blinkChar`. Default to '|'

1.1.2
- Fixed a bug for not rendering dynamic steps
- Fixed an issue regarding cursor on center text align

1.1.1
- Updated README.md file.

1.1.0
- Added new property `blinkCursor` to toggle cursor blinking
- Added new property `editDelay` to determine delay while adding text
- Added new property `deleteDelay` to determine delay while deleting text


## Motivation

While working with react native and after few hours into trial and error of making react-typical work, I realized the React.createElement used in the library doesn't work as expected in react native as its not possible to get text from `Text` component (I am new to react native so hey no judjing if its not that hard afterall).
So I wrapped the existing react-typical in react native Text component and ta da...

## Installation

```
npm install --save react-native-typical
or
expo install react-native-typical
```

## Usage

```jsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TypingText from "react-native-typical";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<TypingText
				steps={["Hello there", 1000, "Hello World !!!", 1000]}
				loop={Infinity}
				style={[styles.text]}
			/>
			<TypingText
				steps={[
					"This will run some time only",
					1000,
					"This will run 5 times only",
					1000,
				]}
				loop={5}
				blinkCursor={true}
				blinkChar="_"
				editDelay={80}
				deleteDelay={10}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 14,
	},
});
```

## Properties

| Name        | Type                | Example                                |
|-------------|---------------------|----------------------------------------|
| steps       | Array []            | ["string", 1000, "some more", 1000]    |
| loop        | number              | 5, 10, Infinity etc.                   |
| blinkCursor | boolean             | true (default)                         |
| blinkChar   | string              | "|" (default)                          |
| editDelay   | number              | 60 (default)                           |
| deleteDelay | number              | 60 (default)                           |
| style       | react native styles | `{[styles.text, {fontSize: 50}]}` etc. |

---

### Annotations

This library is inspired from [react-typical](https://github.com/catalinmiron/react-typical) (for web) and logic is based on [@camwiegert](https://github.com/camwiegert/typical)'s light weight library.
