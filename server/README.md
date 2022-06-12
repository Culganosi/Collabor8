## How to use

- `npm start` to run server
- `npm db:reset` to reset database

### Backend Requirements

- Mongoose
- Express
- bcryptjs

_--Save-dev_

- Nodemon
- Dotenv

### Notes for later

- When deployed, the script should be 'node', not 'nodemon'

### Todo (not crucial)

- Changing filter of sought roles in get /proposals
- More thorough authorization of only the logged in owner being able to see full data of some things
- Handling different error cases and sending back correct error codes and messages
