const constants = require("./constants.js");
const errorHandler = (err, req, res, next) => {
  const statuscode = res.statusCode ? res.statusCode : 500;
  switch (statuscode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "validation",
        meassage: err.meassage,
        stackTrace: err.stack,
      });
      break;

    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        meassage: err.meassage,
        stackTrace: err.stack,
      });

    case constants.UNAUTHORIZED_ERROR:
      res.json({
        title: "Unauthorized",
        message: err.meassage,
        stackTrace: err.stack,
      });
    case constants.FORBIDDEN:
      res.json({
        title: "forbidden",
        message: err.meassage,
        stackTrace: err.stack,
      });
    case constants.SERVER_ERROR:
      res.json({
        title: "server error",
        message: err.meassage,
        stackTrace: err.stack,
      });
    default:
      console.log("NO Error,All good !");
      break;
  }
};
module.exports = { errorHandler };
