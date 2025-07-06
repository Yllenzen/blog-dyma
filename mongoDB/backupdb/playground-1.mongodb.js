use("testdb");

db.users.findOneAndDelete({
  name: "Franck",
});
