# Eldoria Module

This module provides functions to fetch, decipher, and retrieve scrolls from Eldoria.

## Functions

### fetchScrolls

Fetches scroll data from a remote API.

**Usage:**

```javascript
const data = await fetchScrolls();
```

**Returns:**

- `string`: The raw scroll data.

**Throws:**

- `Error`: If the response is not ok or if there is a network error.

### decipherScroll

Extracts data between `{* *}` from the scroll data.

**Usage:**

```javascript
const secrets = decipherScroll(data);
```

**Parameters:**

- `data` (`string`): The raw scroll data.

**Returns:**

- `Array<string>`: An array of extracted secrets.

### retrieveScrollsOfEldoria

Fetches and deciphers scrolls from Eldoria.

**Usage:**

```javascript
const secrets = await retrieveScrollsOfEldoria();
```

**Returns:**

- `Array<string>`: An array of extracted secrets or an empty array if there is an error.

## Example

```javascript
const {
  fetchScrolls,
  decipherScroll,
  retrieveScrollsOfEldoria,
} = require("./app");

retrieveScrollsOfEldoria().then((decipheredScroll) => {
  console.log(decipheredScroll);
});
```
