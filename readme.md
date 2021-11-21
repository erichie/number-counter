# Number Counter Server

## Install and Setup

### Docker

Run `docker pull mackirony/number-counter` 

Run `docker run -p 8080:8080 -d mackirony/number-counter` (or use whatever port you'd like for the first port number)

Navigate to `localhost:8080/numbers` in your browser (or make a GET request using curl or Postman)

### Local

In the root of the directory:

Copy `.env.example` to a new `.env` file

Run `npm install`

Run `npx prisma migrate dev` (if the *dev.db* file does not exist)

Run `npm run dev`

Navigate to `localhost:8080/numbers` in your browser (or make a GET request using curl or Postman)

## API endpoints

**GET**  `/numbers`
Returns an array of all existing number objects as a JSON response. Each number object contains the number and the count of how many times the number has been sent to the server.

Example Response
`{ numbers: [ { number: 1, count: 2 }, { number: 4, count: 7 } ] }`

**POST**  `/numbers/increment`
Accepts a number sent in the POST body. Returns a number object as a JSON response containing the number and the count of how many times the number has been sent to the server.

Example POST body
`{ number: 5 }`

Example Response
`{ number: 5, count: 1 }`

## Run Tests (Local Setup)

In the root directory:

Run `npm test`