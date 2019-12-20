export default {
    "definitions": {},
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://example.com/root.json",
    "type": "object",
    "title": "The Root Schema",
    "required": [
      "isAuthenticated",
      "comments"
    ],
    "properties": {
      "isAuthenticated": {
        "$id": "#/properties/isAuthenticated",
        "type": "integer",
        "title": "The Isauthenticated Schema",
        "default": 0,
        "examples": [
          1
        ]
      },
      "comments": {
        "$id": "#/properties/comments",
        "type": "array",
        "title": "The Comments Schema",
        "items": {
          "$id": "#/properties/comments/items",
          "type": "string",
          "title": "The Items Schema",
          "default": "",
          "examples": [
            "com1",
            "com2"
          ],
          "pattern": "^(.*)$"
        }
      }
    }
  }
  