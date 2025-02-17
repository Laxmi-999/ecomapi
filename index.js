const express = require("express");
const cors = require("cors");

const App = express();

App.use(
    cors({
        origin: "https://e-commerce-psi-sable.vercel.app", // Replace with your actual frontend URL
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);
port = process.env.PORT || 3001;

const apiData = require("./data.json");


App.get("/", (req, res) => {

    res.send("hello server");
});

App.get("/products", (req, res) => {
    const id = req.query.id;
    if (!id) {

        return res.send(apiData);
    }
    const filteredData = apiData.filter(item => item.id.toString() === id);
    if (filteredData.length === 0) {
        return res.status(404).json({ error: 'Data not found for the provided "id"' });

    }

    res.send(filteredData[0]);
});
// App.get('/singleproduct', (req, res) => {
//     const id = req.query.id;
//     // if (!id) {
//     //     return res.status(400).json({ error: 'Please provide an "id" query parameter.' });
//     // }
//     const filteredData = apiData.filter(item => item.id.toString() === id);
//     // if (filteredData.length === 0) {
//     //     return res.status(404).json({ error: 'Data not found for the provided "id"' });

//     // }

//     res.send(filteredData);
// });

App.listen(port, () => {
    console.log("calling the server");

    console.log(" hello server");
});