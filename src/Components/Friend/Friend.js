import React from "react";

const Friend = (props) => {
	const { name, phone, website, address } = props.friend;
	const friendStyle = {
		border: "3px solid #A1A2A3",
		padding: "10px",
		borderRadius: "10px",
		margin: "10px",
	};
	return (
		<div style={friendStyle}>
			<h2>This is a Single Friend</h2>
			<h4>I am {name}</h4>
			<h5>Call Me: {phone}</h5>
			<h5>Visit Me: {website}</h5>
			<p>I live in: {address.city}</p>
		</div>
	);
};

export default Friend;
