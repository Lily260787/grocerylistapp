const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let groceryItems = [];//empty object in which we will push created objects

io.on("connection", socket => {
    //check if connection is OK
    console.log("connected!!!");

    /* Adding items */
    socket.on("addGroceryItem", groceryItem => {
        groceryItems.push({groceryItem});
        io.sockets.emit('groceryItems', groceryItems);// send updated items list
    });

    /* Removing items */
    socket.on("removeFromGroceryList", groceryItemId => {
        console.log(groceryItemId);
        for(var i = groceryItems.length - 1; i >= 0; i--) {
            if(groceryItems[i].groceryItem.id === groceryItemId.groceryItemId) {
                groceryItems.splice(i, 1);
            }
        }
        io.sockets.emit('groceryItems', groceryItems);
    });

    io.sockets.emit('groceryItems', groceryItems);
});

http.listen(4400, () => {
    console.log('Listening on port 4400');
});