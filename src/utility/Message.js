class Message {
  
  response(message, data, success = true) {
    return {
      message: message || null,
      data: data || null,
      success: success,
    };
  }
}

module.exports = new Message();
