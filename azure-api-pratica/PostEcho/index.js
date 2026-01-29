'use strict';

/**
 * Azure Function - Echo API (POST)
 */
module.exports = async function (context, req) {
  if (!req.body) {
    context.res = {
      status: 400,
      body: { message: "Corpo da requisição não enviado" }
    };
    return;
  }

  context.res = {
    status: 200,
    body: {
      received: req.body
    }
  };
};
