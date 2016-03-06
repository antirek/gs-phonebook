var http = require("http");

var fs = require('fs'),
    xml2js = require('xml2js');

var obj1 = {
    LastName: "Enter1",
    FirstName: "QWE",
    Phone: {
      phonenumber: "89899798798",
      accountindex: 1
    },
    Groups: {
      groupid: 1
    }
};

var obj2 = {
    LastName: "Enter2",
    FirstName: "QWE",
    Phone: {
      phonenumber: "89899798798",
      accountindex: 1
    },
    Groups: {
      groupid: 1
    }
};

var book = {
  AddressBook: {
    Contact: [obj1, obj2]
  }
};

var builder = new xml2js.Builder();
var xml = builder.buildObject(book);

console.log(xml);

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/xml"});  
  response.write(xml);
  response.end();
});

server.listen(81);
console.log("Server is listening");