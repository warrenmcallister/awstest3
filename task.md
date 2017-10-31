# Workday Coding Challenge

Your task is to find out about the interests of the users of our messaging board, so we can show them more accurate ads to them. You have been given access to a rest API which exposes the resources needed to solve the challenge.  

# Endpoints

**Root**: ${endpointRoot}
**Candidate ID**: `${candidateId}`

Always send your candidate ID as a query parameter - `?candidate=${candidateId}` - when accessing any of the endpoints below, otherwise you won't get a proper response.

## GET /users?candidate=${candidateId}

This endpoint returns a list of our `user`s identified by an `id` and a `name`, similar to this:

```json
[
  {
    "id": "Utqhn",
    "name": "Ursula Runolfsdottir IV"
  },
  {
    "id": "FNgm8",
    "name": "Moshe Collier"
  },
  {
    "id": "psIpy",
    "name": "Rosie Batz"
  }
]
```

## GET /products?candidate=${candidateId}

This endpoint returns a list of our available `product`s, which have an `id`, a `name` and an associated `color`:

```json
[
  {
    "id": "MTdh4",
    "name": "Practical Steel Chips",
    "color": "olive"
  },
  {
    "id": "CWbmC",
    "name": "Rustic Fresh Shirt",
    "color": "tan"
  },
  {
    "id": "HP6EQ",
    "name": "Awesome Soft Ball",
    "color": "tan"
  }
]
```  

## GET /messages?candidate=${candidateId}

This endpoint exposes a list of messages on our message board, which we would like to analyse. A `message` object has an `id`, the identifier of it's creator (`creatorId`) and the `text`:

```json
[
  {
    "id": "u4X08",
    "creatorId": "FNgm8",
    "text": "The Practical Steel Chips looks good, but I'm not buying it yet."
  },
  {
    "id": "2eSfE",
    "creatorId": "FNgm8",
    "text": "I'm in love with the new Awesome Soft Ball!!"
  },
  {
    "id": "eUJBe",
    "creatorId": "Utqhn",
    "text": "Do you like the Awesome Soft Ball?"
  }
]
```

## POST /solution?candidate=${candidateId}
To complete the task you should `POST` a JSON array to this URL. You should send an array of objects, that contain the users, and their respective interests in products.

- A user is considered to be interested in a product, if he/she mentions either the products full `name` or it's `color` in any of his/her messages on the board. 
- You can assume that the users have no typos in the names/colors and they use the same case as in the product listing.
- The array should be sorted by the users `id` and should not contain duplicates.
- In case the user is interested in multiple `products`, his/her `products` array should be sorted by product `id`.
- The array `products` should not contain duplicates.

**Example solution** (using the input above):

```json
[
  {
    "user": {
      "id": "FNgm8",
      "name": "Moshe Collier"
    },
    "products": [
      {
        "id": "HP6EQ",
        "name": "Awesome Soft Ball",
        "color": "tan"
      },
      {
        "id": "MTdh4",
        "name": "Practical Steel Chips",
        "color": "olive"
      }
    ]
  },
  {
    "user": {
      "id": "Utqhn",
      "name": "Ursula Runolfsdottir IV"
    },
    "products": [
      {
        "id": "HP6EQ",
        "name": "Awesome Soft Ball",
        "color": "tan"
      }
    ]
  },
  {
    "user": {
      "id": "psIpy",
      "name": "Rosie Batz"
    },
    "products": []
  }
]
```