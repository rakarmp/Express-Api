# Express-Api Docs

This API provides endpoints to manage quotes, including creating, updating, deleting, and fetching quotes.

## Base URL

The base URL for all endpoints is `http://localhost:3000/api/`

### 1.Create a New Quote
- Endpoint: `POST /quotes`
- Description: Add a new quote to the collection.
- Request Body:
  - `text`(string, required): The text of the quote.
  - `author`(string, required): The author of the quote.
- Response:
  - Status: 201 Created
  - Body: The newly created quote object, including `_id`, `text`, and `author` properties.

### 2. Update a Quote
- Endpoint: `PUT /quotes/:id`
- Description: Update an existing quote with the given ID.
- URL Parameters:
  - `id` (string, required): The unique ID of the quote to be updated.
- Request Body:
  - `text` (string, required): The updated text of the quote.
  - `author` (string, required): The updated author of the quote.
- Response:
  - Status: 200 OK
  - Body: The updated quote object.
 
### 3. Delete a Quote
- Endpoint: `DELETE /quotes/:id`
- Description: Delete a quote with the given ID.
- URL Parameters:
  - `id` (string, required): The unique ID of the quote to be deleted.
- Response:
  - Status: 200 OK
  - Body: A message confirming the successful deletion.

### 4. Get a Quote by ID
- Endpoint: `GET /quotes/:id`
- Description: Get a quote by its unique ID.
- URL Parameters:
  - `id` (string, required): The unique ID of the quote to be fetched.
- Response:
  - Status: 200 OK
  - Body: The quote object with the given ID.
 
### 5. Get All Quotes
- Endpoint: `GET /quotes`
- Description: Get all quotes available in the collection.
- Response:
  - Status: 200 OK
  - Body: An array of quote objects.
 
## Error Handling

If an error occurs while processing a request, the API will respond with an appropriate HTTP status code and an error message in the response body.

- Status: 404 Not Found
- Body: `{ "message": "Quote not found" }`
- Status: 500 Internal Server Error
- Body: `{ "message": "Error fetching quotes" }`

## Usage

You can use any HTTP client, such as Postman or Axios, to interact with this API.

- Example to fetch all quotes using Axios:
```javascript
import axios from 'axios';

async function fetchAllQuotes() {
  try {
    const response = await axios.get('http://localhost:3000/api/quotes');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching quotes:', error);
  }
}

fetchAllQuotes();
```

- Example to create a new quote using Axios:
```javascript
import axios from 'axios';

async function createNewQuote() {
  try {
    const newQuote = {
      text: 'This is a new quote.',
      author: 'Anonymous',
    };
    const response = await axios.post('http://localhost:3000/api/quotes', newQuote);
    console.log(response.data);
  } catch (error) {
    console.error('Error creating quote:', error);
  }
}

createNewQuote();
```

## Note

- Replace `http://localhost:3000` with the actual base URL of your API server if different.
- Always ensure that the server is running and accessible before making requests to the API.

This documentation provides a basic overview of the available endpoints and how to interact with the API. Feel free to extend the API and documentation to fit your specific use case and requirements.

