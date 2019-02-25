const PubSub = {
  publish: function(channel, payload) {
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
  },
  subscribe: function(channel, callback) {
    console.log(`subscriped to channel: ${channel}`);
    document.addEventListener(channel, callback);
  }
}

module.exports = PubSub;
