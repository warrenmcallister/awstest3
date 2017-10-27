# Workday Coding Challenge

Your task is to find out about the interest of the users of our messaging board, so we can show them more accurate ads to these users. 

You have been given access to a rest API which exposes the resources needed to solve the challenge. The API contains the following endpoints:

## /users

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

## /products

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

## /messages

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

## Task
To complete the task you should `POST` a JSON array to the URL `/solution`. You should send an array of objects, that contain the users, and their respective interests in our products.

- A user is considered to be interested in a product, if he/she mentions either the products full `name` or it's `color` in any of his/her messages on our board. 
- You can assume that the users have no typos in the names/colors and they use the same case as in the product listing.
- The list should be sorted by the users `id`
- In case the user is interested in multiple `products`, his/her `products` array should be sorted by the `id` of the product.

Example solution:

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