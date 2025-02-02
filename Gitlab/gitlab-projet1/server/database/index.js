const mongoose = require("mongoose");

if (process.env.NODE_ENV === "production") {
  mongoose
    .connect(
      "mongodb+srv://jean:123@cluster0.urpjt.gcp.mongodb.net/vue3c23?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Connected [DB PROD] !");
    })
    .catch((e) => console.log(e));
} else {
  const { MongoMemoryServer } = require("mongodb-memory-server");

  MongoMemoryServer.create().then(async (mongo) => {
    const uri = mongo.getUri();
    await mongoose.connect(uri);
    console.log("Connected [DB test] !");
  });
}
