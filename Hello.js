//  We are grouping this together into a function to which app will be passed to invoke these routes.

// This is the path we need to get from the browser.
// The thing after comma is a lambda fn. It gets the reference of request(meta data from the browser) and response which is the respone to send to the browser
export default function HelloRoutes(app) {
  app.get("/Hello", (req, res) => {
    res.send("Hello World! Life is Beautiful");
  });

  // Another request
  app.get("/", (req, res) => {
    res.send("Welcome to Full Stack Development");
  });
}
