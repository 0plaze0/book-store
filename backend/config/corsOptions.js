const whitelist = ["http://localhost:3500", "http://localhost:5173"];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) != -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed"));
    }
  },
  // methods: ["GET", "POST", "PUT", "DELETE"],
  // allowedHeaders: ["Content-Type"],
};

export default corsOptions;
