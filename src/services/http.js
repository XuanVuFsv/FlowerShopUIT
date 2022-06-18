import axios from "axios";


export default axios.create({
  baseURL: `http://localhost:9000`,
	headers: {
		'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
		"Access-Control-Allow-Origin": "*",
		'Content-Type': 'application/json'
	}

});