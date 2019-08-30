const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.Port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': "https://placeimg.com/64/64/1",
            'name': "윤수빈",
            'birthday': "941207",
            'gender': "여자"
        },
        {
            'id': 2,
            'image': "https://placeimg.com/64/64/2",
            'name': "박정규",
            'birthday': "920713",
            'gender': "남자"
        },
        {
            'id': 3,
            'image': "https://placeimg.com/64/64/3",
            'name': "김희람",
            'birthday': "930705",
            'gender': "여자"
        }
    ]);
})

app.listen(port, () =>
    console.log(`Listening on port ${port}`));
