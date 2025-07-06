const express = require("express");
// const getpizzas =require('./getpizzas.js')
const Pizzamod = require('./models/pizzamodel');
// const  pizzas = require("./myapp/src/pizzadata");
const db = require("./db");

const app = express();
app.use(express.json());
const port = process.env.PORT || 8000;

// const pizzasRoute = require('./routes/pizzasRoutes')
// app.use('/api/pizzas/',pizzasRoute)




app.get("/", (req, res) => {
   res.send("Server working on port " + port);
});

// app.get("/getpizzas", async (req, res) => {
//    try {
//       const pizzas = await Pizzamod.find({});
//       res.send(pizzas);
//    } catch (error) {
//       console.error(error);
//       res.status(500).send("Error retrieving pizzas");
//    }
// });


// app.get("/getpizzas", (req, res) => {
//    Pizzamod.find({}, (err, docs) => {
//       if (err) {
//          console.log(err);
//          // res.status(500).send("Error retrieving pizzas");
//       } else {
//          res.send(docs);
//       }
//    });
// });
// const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));


















// const express = require("express");
// const Pizza = require('./models/pizzamodel');
// const db = require("./db");

// const app = express();
// app.use(express.json());

// const port = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//    res.send("Server working on port " + port);
// });

// app.get("/getpizzas", (req, res) => {
//    Pizza.find({}, (err, docs) => {
//       if (err) {
//          console.log(err);
//          res.status(500).send("Error retrieving pizzas");
//       } else {
//          res.send(docs);
//       }
//    });
// });

// app.listen(port, () => console.log(`Server running on port ${port}`));
