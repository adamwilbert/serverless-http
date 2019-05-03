"use strict";

const http = require("http");

module.exports = class ServerlessRequest extends http.IncomingMessage {
  constructor({
    method,
    baseUrl,
    originalUrl,
    url,
    headers,
    body,
    remoteAddress
  }) {
    super({
      encrypted: true,
      readable: false,
      remoteAddress,
      address: () => ({ port: 443 }),
      end: Function.prototype,
      destroy: Function.prototype
    });
    console.log("method", method);
    console.log("baseUrl", baseUrl);
    console.log("originalUrl", originalUrl);
    console.log("url", url);
    console.log("body", body);
    console.log("remoteAddress", remoteAddress);
    if (typeof headers["content-length"] === "undefined") {
      headers["content-length"] = Buffer.byteLength(body);
    }

    Object.assign(this, {
      ip: remoteAddress,
      complete: true,
      httpVersion: "1.1",
      httpVersionMajor: "1",
      httpVersionMinor: "1",
      method,
      headers,
      body,
      baseUrl,
      originalUrl,
      url
    });

    this.push(body);
    this.push(null);
  }
};
