const express = require('express');
const app = express();
const port = 3000;

// Route for /home
app.get('/home', (req, res) => {
    res.status(200).send('<h1>Welcome to Home Page</h1>');
});

// Route for /aboutus
app.get('/aboutus', (req, res) => {
    res.status(200).json({ "message": "Welcome to About Us" });
});

// Route for /contactus
app.get('/contactus', (req, res) => {
    const contactDetails = {
        name: "Express App ",
        phone: "9995595566",
        
    };
    res.status(200).json(contactDetails);
});


app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});