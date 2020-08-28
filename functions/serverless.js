const qs = require('qs');
exports.handler = function(event, context, callback) {
  let {redirectUrl, ...params} = event.queryStringParameters
  let queryString = qs.stringify(params)
  console.log(params)
  let body;
  let bodyStyle = "text-align: center; margin-top: 100px;";
  let linkStyle = "font-size: 24px; background: green; color: white; padding: 20px; text-decoration: none;"
  if (redirectUrl)
    body = `<div style="${bodyStyle}"><a style="${linkStyle}" href="${redirectUrl.concat("?"+queryString)}">Back to App</a></div>`
  else
    body = "Redirect Url is missing" 
  callback(null,{
    statusCode: 200,
    body: body
  })
}
