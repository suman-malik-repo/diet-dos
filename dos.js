function sendGetRequest(url) {
    setInterval(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data= "hello"
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

// Example usage:
const url = 'http://www.besdiet.org/';
sendGetRequest(url);
