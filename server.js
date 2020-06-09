const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': 'John',
            'birthday': '961222',
            'gender': 'Male',
            'job': 'Student'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': 'Chris',
            'birthday': '950309',
            'gender': 'Male',
            'job': 'Advisor'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': 'Ellie',
            'birthday': '931028',
            'gender': 'Female',
            'job': 'Designer'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

