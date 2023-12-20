import express from 'express';

const app = express();
const port = 3000;

//Hardcoded user data

const userData = {
    firstname: 'Harshini',
    username: 'hbariki'
}

// Define the root and returns the username and firstname

app.get('/user', (req,res) => {
    res.json({
        username: userData.username,
        firstname: userData.firstname
    });
});

// start the server

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
})