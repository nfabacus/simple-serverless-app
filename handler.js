'use strict';

module.exports.hello = async (event, context) => {
  console.log(event.pathParameters.name)
  const reply = `Hello ${event.pathParameters.name}`;
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: JSON.stringify(reply),
    }),
  };
};

module.exports.tellTime = async (event, context, callback) => {
  const now = new Date();
  const message = `The time is ${now}.`;

  console.log(message);
  callback(null, message);
};
