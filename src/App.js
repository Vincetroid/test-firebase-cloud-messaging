import React from "react";
import './App.css';
import firebase from 'firebase';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const firebaseConfig = {
			apiKey: "AIzaSyCOCNeiSUMlHQGBGyAa2kzbLhAUQlDcnyE",
			authDomain: "test-fcm-1fced.firebaseapp.com",
			databaseURL: "https://test-fcm-1fced.firebaseio.com",
			projectId: "test-fcm-1fced",
			storageBucket: "",
			messagingSenderId: "907261740417",
			appId: "1:907261740417:web:60dad2252d2a2bab759480",
			measurementId: "G-PVQYSXXN0K"
		};
		firebase.initializeApp(firebaseConfig);

		const messaging = firebase.messaging();

		messaging.requestPermission().then(() => {
			console.log('Have persmission');
			return messaging.getToken();
		})
		.then(function(token){
			console.log(token);
		})
		.catch(function(err){
			console.log('error: ' + err)
		});

	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<p>Learning push notifications</p>
				</header>
			</div>
		);
	}
}

export default App;
