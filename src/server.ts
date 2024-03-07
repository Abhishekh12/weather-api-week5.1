import express from "express";
2
3 // We will create an express app
4 const app = express();
5
6 // The port that the express server will listen on
7 const PORT = 3000;
8
9 app.use(express.json());
10
11 // Start the express server
12 app.listen(PORT, () => {
13 console.log(`Server is listening on port ${PORT}`);
14 });