const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.json({ success: false, response: "Hello World" }) 
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Server is ignited at ${PORT}`);
});