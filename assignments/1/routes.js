const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment</title></head>");
    res.write(
      "<body><form action='/create-user' method='POST'><input type='text' name='username'/><button type='submit'>Create</button></form></body>",
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    const users = ["User 1", "User 2", "User 3"];

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Users</title></head>");
    res.write("<body><h1>Users</h1><ul>");
    users.forEach((user) => res.write(`<li>${user}</li>`));
    res.write("</ul></body></html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];

      console.log("Username:", username);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
};

exports.handler = requestHandler;
