export const registerUser = async (data) => {
	const body = {
		email: data.get('email'),
		password: data.get('password')
	};
	const response = await fetch('https://reqres.in/api/users', {
		method: 'POST',
		body: JSON.stringify(body),
	});
	response.json().then(json => alert(json));
};

export const loginUser = async (data) => {
	const body = {
		email: data.get('email'),
		password: data.get('password')
	};
	const response = await fetch('https://reqres.in/api/users', {
		method: 'POST',
		body: JSON.stringify(body),
		headers: { 'Content-type': 'application/json' }
	});
	return response.json();
};
