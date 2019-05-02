const cleanUpEvent = require("./clean-up-event");

const createRequest = require("./create-request");
const formatResponse = require("./format-response");

module.exports = options => {
  return getResponse => async (event_, context = {}) => {
    console.log("event_", event_);
    console.log(context);
    const event = cleanUpEvent(event_);
    console.log("event", event);

    const request = createRequest(event, options);
    const response = await getResponse(request, event, context);

    return formatResponse(response, options);
  };
};
