function handler(event) {
  var request = event.request;
  var headers = request.headers;

  var expected = "${basic_auth_header}";

  if (headers.authorization && headers.authorization.value === expected) {
    return request;
  }

  return {
    statusCode: 401,
    statusDescription: 'Unauthorized',
    headers: {
      'www-authenticate': { value: 'Basic realm="Preview"' }
    }
  };
}
