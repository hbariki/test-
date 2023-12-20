import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

//Hardcoded user data
app.use(cors());

const users = [
    {id:1, username:'Harshini', firstname:'Harshini'},
    {id:2, username:'Neeraj', firstname:'Neeraj'},
    {id:3, username:'Viraj', firstname:'Viraj'}
]

// Define the root and returns the username and firstname

app.get('/user/:id', (req,res) => {
    const userId = parseInt(req.params.id, 10)

    const user = users.find((u) => u.id === userId);

    if(user) {
        res.json({
            username: user.username,
            firstname: user.firstname,
        });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// start the server

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
})