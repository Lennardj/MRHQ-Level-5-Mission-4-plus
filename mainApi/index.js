module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const name = req.query.name || (req.body && req.body.name);
  const responseMessage = name
    ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
  const html = "<h1>Testcase</h1>";
  // context.res = {
  //   // status: 200, /* Defaults to 200 */
  //   body: html,
  // };
  context.res = {
    body: "<!DOCTYPE html> <html> <head> </head> <body> Hello World </body> </html>",
    contentType: "text/html",
  };
};
