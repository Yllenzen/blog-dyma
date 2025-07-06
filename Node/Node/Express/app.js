const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const morgan = require("morgan");
const { name } = require("ejs");
const api = require("./routes/api");
const index = require("./routes/index");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "scripts")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
// app.use(
//   morgan(":method :url :status :res[content-length] - :response-time ms")
// );

app.engine("pug", (path, options, callback) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      callback(err);
    }
    const template = data.toString().replace("%name", options.name);
    callback(null, template);
  });
});

const getCurrentUser = (req, res, next) => {
  req.user = {
    name: "Nelly",
    authenticated: true,
  };
  next();
};

const isAuthenticated = (req, res, next) => {
  if (req.user.authenticated) {
    console.log("Utilisateur connecté");
    next();
  } else {
    next("route");
  }
};

app.get("/", getCurrentUser, isAuthenticated, (req, res) => {
  res.render("index", {
    name: "<span>Nelly</span>",
    authenticated: true,
    Livres: 11,
    books: [
      { title: "Livres en cours", content: "Indécise" },
      {
        title: "Livres lus",
        content: [
          " Adopted Love - Tome 1 ",
          " Adopted Love - Tome 2 ",
          " Adopted Love - Tome 3 ",
        ],
      },
      {
        title: "Livres à lire",
        content: [" Insatiable ", " Sensible ", " Intrépide "],
      },
      {
        title: "Livre à acheter",
        content: [
          " Rebel University - Tome 1 ",
          " Rebel University - Tome 2 ",
          " Rebel University - Tome 3 ",
          " Rebel University - Tome 4 ",
        ],
      },
      { title: "Livre en cours de livraison", content: "Aucun" },
    ],
  });
});

app.get("/", (req, res) => {
  res.sendStatus(403);
});

app.get(["/foo", "/index"], (req, res) => {
  console.log("match");
  res.end();
});

app.param(["userId", "companyId"], (req, res, next, value, name) => {
  const user = {
    id: value,
    name: "Nelly",
  };
  console.log("in fn");
  req.user = user;
  next();
});

app
  .route("/user/:userId/:companyId", (req, res, next) => {
    next();
  })
  .get((req, res) => {
    res.end("user");
  })
  .put((req, res) => {
    res.end("user");
  })
  .delete((req, res) => {
    res.end("user");
  });

app.all("/user", (req, res) => {
  res.end();
});

app.all("/user", (req, res) => {
  console.log("user middleware trigger");
  res.end();
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  //   let body = "";
  //   req.on("data", (data) => {
  //     body += data;
  //   });
  //   req.on("end", () => {
  console.log(req.body);
  //   console.log(typeof req.body);
  res.render("index");
});
// });

app.use("/api", api);
app.use(index);

app.listen(3000);
