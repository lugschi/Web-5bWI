const express = require('express');
const app = express();
const PORT = 3000;

const people = [
    { id: 1, name: 'Alice', age: 25, job: 'Engineer' },
    { id: 2, name: 'Bob', age: 30, job: 'Designer' },
    { id: 3, name: 'Charlie', age: 35, job: 'Manager' }
];


app.use(express.json());

app.get('/people', (req, res) => {
    res.json(people);
});

app.get('/people/:id', (req, res) => {
    const person = people.find(p => p.id === parseInt(req.params.id));    
    res.json(person);
});

app.post('/people', (req, res) =>{
    const {name, age, job} = req.body;
    const newPerson = {id: people.length + 1, name, age, job };
    people.push(newPerson);
})


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
