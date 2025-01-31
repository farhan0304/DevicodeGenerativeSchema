const openAI_API_key = process.env.OPENAI_API_KEY;
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
        "route_name": "/user/create",
        "restrictions": [],
        "sendToken": false,
        "tokenName": "",
        "expireInDays": 1
      }},
      {{
        "method": "READ",
        "route_name": "/user/login",
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
  Ensure valid JSON output with restrictions in the correct format. Return detailed fields, JWT token configuration, and methodsList with restrictions.`;

export {
    openAI_API_key,
    prompt
}