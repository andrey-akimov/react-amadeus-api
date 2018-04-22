const express = require('express');
require('dotenv').config();
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'client', 'build')));

// allow CORS requests
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	next();
});

app.get('/api', (req, res) => {
    res.send(process.env.KEY);
})

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
