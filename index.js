// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 4000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const idCounter = 0

const tableInfo = [
    {
        id: 0,
        name: 'name',
        email: 'email',
        phone: 'phone'
    }
]

const waitList = [
    {
        id: 0,
        name: 'name',
        email: 'email',
        phone: 'phone'
    }  
]

app.get("/", function (req, res) {
        res.send("Welcome to the home page!")
        res.sendFile(path.join(__dirname, "home.html"));

    });

app.get("/table", function (req, res) {
    res.send("Table page")
    res.sendFile(path.join(__dirname, "table.html"));

});

app.get("/reservation", function (req, res) {
    res.send("Reservations")
    res.sendFile(path.join(__dirname, "reservation.html"));

});

app.get("/api/tables", function (req, res) {
    return res.json(tableInfo);
});
app.get("/api/waitlist", function (req, res) {
    return res.json(waitList);
});


app.post('/api/tables', function (req, res){
    var newTable = req.body;

    // newTable.id = newTable.name.replace(/\s+/g, "").toLowerCase();

    // console.log(newTable);

    tableInfo.push(newTable)

    res.json(newTable)
});

app.post("/api/waitlist", function (req, res) {
    var newTable = req.body;
    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
    tableInfo.push(newTable);
    res.json(newTable);

});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
