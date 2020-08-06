const express = require('express');
const path = require('path');

const app = express();

// redirections
app.use((req, res, next) => {
    if (process.env.NODE_ENV === 'production') {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect('https://' + req.headers.host + req.url);
        } else {
            return next();
        }
    } else {
        return next();
    }
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/list', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});

module.exports = app;