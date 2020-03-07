// PubNub init, listen & subscribe
const PubNub = require('pubnub')

const pubnub = new PubNub({
  subscribe_key: 'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe'
});

export default pubnub