/* Global Variables */


//the API Key obtained from openweathermap.org after signing up for developer credentials
const apiKey = '0202a56672d361c8755a5f7aabe388be';

//storing the button from the DOM to a variable
const generate = document.getElementById('generate');


//the asynchronous function that will be passed to the event handler
async function addEntry(){
// storing the values for the zip code and feelings entered by the user in variables to include in the url
	const zipCode = document.getElementById('zip').value;
	const content = document.getElementById('feelings').value;
/* the base url obtained from the main documentation page with the values for the zip 
code and api key plugged in as queries */
	const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip="+zipCode+"&appid="+apiKey;
// making a request to the api using await to get the temprature and converting the result to text
	const res = await fetch(baseURL);
	const data = await res.json();
/* extracting only the temprature from the api, we know how to do so by logging out the contents of the variable data
to know what it contains and how it is structured beforehand */
	const temp = data.main.temp;
/* making a post request to the route established in the server file sending the values for temp, date and content 
to be stored in the projectData object */
	await fetch('/postdata', {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			date: newDate,
			temp: temp,
			content: content
		})

	});

// making a get request to get the data from projectData and converting it to text
	const holdData = await fetch('/getdata');
	const finalData = await holdData.json();

// sets the properties of existing HTML elements from the DOM using Vanilla JavaScript
	document.getElementById('date').innerHTML = finalData.date;
	document.getElementById('temp').innerHTML = finalData.temp;
	document.getElementById('content').innerHTML = finalData.content;


};


//creating the event listener 
generate.addEventListener("click", addEntry);

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();