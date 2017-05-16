// Create a Node.js application that is the beginning of a user management system. Your users are all saved in a "users.json" file, and you can currently do the following:
// - search for users
// - add new new users to your users file.
// - get your starter file here: users.json

// Part 0
// Create one route:
// - route 1: renders a page that displays all your users.
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
var app = express();


app.use('/', bodyParser())

app.set('views', './');
app.set('view engine', 'pug');

app.get('/', function(request, response) {
  fs.readFile('./users.json', function(err, data) {
    if (err) {
      console.log(err);
    }

    var parsedData = JSON.parse(data);
    console.log(parsedData);
    response.render("index", {
      users: parsedData,
    });
  });
});

// Part 1
// Create two more routes:
// - route 2: renders a page that displays a form which is your search bar.


app.get('/search', (request,response) =>{
	response.render('./views/form')
		// '<form action="/" method="post">\
		// 	<input name="email">\
		// 	<br/>\
		// 	<input type="submit" value="submit your email">\
		// </form>')
});


// - route 3: takes in the post request from your form, then displays matching users on a new page. 
// Users should be matched based on whether either their first or last name contains the input string.

// app.post('/login', (request, response) => {
// 	console.log(request.body);
// 	fs.readFile('./users.json', function(err, data) {
//     	if (err) {
//       		console.log(err);
//     	}
//         var parsedData = JSON.parse(data);
//     	for (var i=0; i < parsedData.length; i++) {
//     		if(request.body.email===parsedData[i].email) {
//     			response.render('./views/users', {
//     				users: parsedData,
//     			}); 
//     		}
// 		}
// 	})
// });

app.post('/search', (request, response) => {
    console.log(request.body);
    fs.readFile('./users.json', function(err, data) {
        if (err) {
            console.log(err);
        }
        var parsedData = JSON.parse(data);
        for (var i=0; i < parsedData.length; i++) {
            if(request.body.name===parsedData[i].firstname || request.body.name===parsedData[i].lastname) {
                var usersFirstName= parsedData[i].firstname;
                var usersLastName= parsedData[i].lastname;
                var usersEmail= parsedData[i].email;
                response.render('./views/users', {
                    usersFirstName: usersFirstName,
                    usersLastName: usersLastName,
                    usersEmail: usersEmail,
                }); 
            }; 
        };
        response.end("No user known with that name boss.")
    });
});

// app.get('/users', (request,response) => {
// 	var parsedData = JSON.parse(data);
// 	fs.readFile('./users.json', function(err, data) {
// 		var parsedData = JSON.parse(data);
//     	if (err) {
//       		console.log(err);
//       	}
// 		if (request.body===parsedData.email) {
// 			response.render("users", {
// 				users:parsedData
// 			})
// 		}
// 	})
// });

// Part 2
// Create two more routes:
// - route 4: renders a page with three forms on it (first name, last name, and email) that allows you to add new users to the users.json file.
// - route 5: takes in the post request from the 'create user' form, 
// then adds the user to the users.json file. 
// Once that is complete, redirects to the route that displays all your users (from part 0).

app.get('/register', (request,response) =>{
    response.render('./views/register')
});

// app.post('/', (request, response) => {
//     console.log(request.body);
//     newData= JSON.stringify(request.body);
//     console.log(request.body)
//     fs.appendFile(parsedData.push('./users.json', newData, function (err) {
//         if (err) {
//             throw err;
//         }
//         console.log('Registered!')
//     }));
//     response.end('post request received')
// });

app.post('/register', (request, response) => {
    // console.log(request.body);;
    fs.readFile('./users.json', function(err, data) {
        if (err) {
            console.log(err);
        }
        var parsedData = JSON.parse(data);
        parsedData.push(request.body);
        console.log(parsedData); 
        newData= JSON.stringify(parsedData);
        console.log(newData);
        fs.writeFile('./users.json', newData);
        response.render("index", {
            users: parsedData,
        });
    })
    // response.end('Thank you for your personal information....Moron....');
});

// app.post('/register', (request, response) => {
//     console.log(request.body);;
//     newUser= request.body;
//     newData= JSON.stringify(newUser);
//     fs.appendFile.push('./users.json', newData);
//     response.end('Thank you for your personal information....Moron....');
// });

var server = app.listen(3000, function() {
  console.log('http//:localhost:' + server.address().port);
});