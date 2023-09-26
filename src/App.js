import React, { useState } from "react";
import "./App.css";

function App() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState([]);

	async function handleLogin(credentials) {
		return await fetch("/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(credentials),
		})
			.then((data) => {
				return data.json();
			})
			.catch((error) => console.log("ERROR:", error));
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		setMessage(await handleLogin({ username, password }));
	};

	return (
		<div className="App">
			<div></div>
			<h1>Login App</h1>
			<div>
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>
			<div>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<button onClick={handleSubmit}>Login</button>
			<h2>Welcome {message.message}.</h2>
		</div>
	);
}

export default App;
