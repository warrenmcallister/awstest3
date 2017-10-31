# Workday Coding Challenge

Your task is to collect data on the product interests of our message board users, so we can send them targeted ads for our products. You have been given access to a rest API which exposes the resources needed to solve the challenge.

# Endpoints

**Root**: ${endpointRoot}
**Candidate ID**: `${candidateId}`

Always send your candidate ID as a query parameter when accessing any of the endpoints below. 

Example: `?candidate=${candidateId}`

Otherwise, you won't get a proper response.

## GET /users?candidate=${candidateId}

This endpoint returns a list of our users identified by an id and a name. Example:

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

This endpoint returns a list of our available products, which have an id, a name, and an associated color. Example:

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

This endpoint exposes a list of messages on our message board, which we would like to analyse. A message object has an id, a creator id (creatorId), and text. Example:

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
To complete the task, you should POST a JSON array to this URL. You should send an array of objects that contains the users and their respective product interests.

-	A user is considered to be interested in a product if he/she mentions either the product's full name or its color in any of his/her messages on the board.
- You can assume that user messages have no typos, and that the letter casing of product names/colors remains unchanged.
-	Your JSON array should be sorted by user id, and should not contain duplicate users.
- If a user is interested in multiple products, his/her products array should be sorted by product id.
-	A user's products arrays should not contain duplicate products.

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

### When you complete the task, send the source code to the recruiting team in email!
