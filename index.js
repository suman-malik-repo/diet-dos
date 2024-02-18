import express from 'express';
import fetch from 'node-fetch';

const app = express();

function sendGetRequest(url) {
    setInterval(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = "hello";
                return data;
            })
            .then(data => {
                console.log('Response:');
                // You can perform any actions with the response data here
            })
            .catch(error => {
                console.error('Error fetching data:');
            });
    }, 1); // 1000 milliseconds = 1 second
}

// Define a route to trigger the sendGetRequest function
app.get('/trigger-request', (req, res) => {
    const url = 'http://www.besdiet.org/';
    sendGetRequest(url);
    res.send('Request triggered successfully!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
