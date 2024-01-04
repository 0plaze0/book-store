const whitelist = ["http://localhost:3500"];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed"));
    }
  },
};

export default corsOptions;
