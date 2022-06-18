import axios from "axios";


export default axios.create({
  baseURL: `https://4d3d-2402-800-63a9-849e-4dd8-2800-cb0c-601c.ngrok.io`,
	headers: {
		'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
		"Access-Control-Allow-Origin": "*",
		'Content-Type': 'application/json'
	}

});