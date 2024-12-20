# Node.js Server Hang on Request

This repository demonstrates a subtle bug in a Node.js HTTP server where the server hangs indefinitely if a request is made and the connection is not immediately closed.  The issue is resolved by adding a listener to the 'end' event of the request object.

## Bug Description

The provided `bug.js` file contains a simple HTTP server.  Without the crucial `req.on('end', ...)` block, the server fails to properly process requests when the client doesn't immediately close the connection. This results in the server hanging and not responding.

## Bug Solution

The `bugSolution.js` file shows the corrected version. By adding the `req.on('end', ...)` event listener, we ensure the server properly processes the request and sends a response before closing the connection.