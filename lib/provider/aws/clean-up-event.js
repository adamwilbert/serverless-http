"use strict";

module.exports = function cleanupEvent(evt) {
  const event = evt || {};

  event.httpMethod = event.httpMethod || "GET";
  if (!event.path || (event.path && event.path === "object")) {
    event.path == "/";
  }
  event.body = event.body || "";
  event.headers = event.headers || {};
  event.requestContext = event.requestContext || {};
  event.requestContext.path = event.path;
  event.requestContext.identity = event.requestContext.identity || {};

  return event;
};
