'use strict';

/**
 * Azure Function - API de exemplo (status)
 */
module.exports = async function (context, req) {
  context.res = {
    status: 200,
    body: {
      service: "azure-api-pratica",
      status: "online",
      timestamp: new Date().toISOString()
    }
  };
};
