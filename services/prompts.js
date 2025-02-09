const prompt = `Generate a JSON object for a schema with the following attributes:
  - Schema Name: {schemaName}
  - Details: {details}
  Format:
  {{
    "schemaName": {schemaName},
    "fields": [
      {{
        "name": "fieldName",
        "type": "String",
        "isRequired": false,
        "isUnique": false,
        "isHashed": false
      }}
    ],
    "jwtToken": {{
      "isEnabled": false,
      "tokenName": ""
    }},
    "methodsList": [
      {{
        "method": "CREATE",
        "route_name": "/create",
        "restrictions": [],
        "sendToken": false,
        "tokenName": "",
        "expireInDays": 1
      }},
      {{
        "method": "READ",
        "route_name": "/login",
        "restrictions": [
          {{
            "type": "SAME_SCHEMA",
            "related_schema_name": null,
            "field_name": "username",
            "location": "body",
            "attribute_name": "username",
            "related_schema_id": null
          }},
          {{
            "type": "SAME_SCHEMA",
            "related_schema_name": null,
            "field_name": "password",
            "location": "body",
            "attribute_name": "password",
            "related_schema_id": null
           }}
        ],
        "sendToken": true,
        "tokenName": "authToken",
        "expireInDays": 7
      }}
    ]
  }}
  Ensure valid JSON output with restrictions in the correct format.Note the each fields type could be: ["String", "Number", "Boolean", "Date", "Object"] and method could be: ["CREATE", "READ", "UPDATE", "DELETE"]. Return detailed fields, JWT token configuration, and methodsList with restrictions.`;

const jsonSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "schemaName": {
      "type": "string"
    },
    "fields": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": { "type": "string" },
          "type": { "type": "string", "enum": ["String", "Number", "Boolean", "Date", "Object"] },
          "isRequired": { "type": "boolean" },
          "isUnique": { "type": "boolean" },
          "isHashed": { "type": "boolean" }
        },
        "required": ["name", "type", "isRequired", "isUnique", "isHashed"]
      }
    },
    "jwtToken": {
      "type": "object",
      "properties": {
        "isEnabled": { "type": "boolean" },
        "tokenName": { "type": "string" }
      },
      "required": ["isEnabled", "tokenName"]
    },
    "methodsList": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "method": { "type": "string", "enum": ["CREATE", "READ", "UPDATE", "DELETE"] },
          "route_name": { "type": "string" },
          "restrictions": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "type": { "type": "string", "enum": ["SAME_SCHEMA", "DIFFERENT_SCHEMA"] },
                "related_schema_name": { "type": ["string", "null"] },
                "field_name": { "type": "string" },
                "location": { "type": "string", "enum": ["body", "query"] },
                "attribute_name": { "type": "string" },
                "related_schema_id": { "type": ["string", "null"] }
              },
              "required": ["type", "field_name", "location", "attribute_name"]
            }
          },
          "sendToken": { "type": "boolean" },
          "tokenName": { "type": "string" },
          "expireInDays": { "type": "integer", "minimum": 1 }
        },
        "required": ["method", "route_name", "restrictions", "sendToken", "tokenName", "expireInDays"]
      }
    }
  },
  "required": ["schemaName", "fields", "jwtToken", "methodsList"]
};


export {
    prompt,
    jsonSchema
}