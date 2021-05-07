require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  databaseUrl: process.env.MONGO_DB_URL,
  mongooseOptions: {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: "indhouse",
  },
  corsOptions: {
    origin: true,
    credentials: true,
    httpOnly: true,
  },
};
