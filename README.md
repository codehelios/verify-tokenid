# Verify TokenId  &nbsp; [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/codehelios/verify-tokenid/blob/main/LICENSE)  [![NPM Verison](https://img.shields.io/npm/v/@codehelios/verify-tokenid)](https://www.npmjs.com/package/@codehelios/verify-tokenid)


Lightweight zero dependency library to verify Firebase ID Token in Cloudflare Workers.


&nbsp;
## Usage/Examples


#### Verify ID Token

```javascript
import { verifyTokenId } from "@codehelios/verify-tokenid";

const tokenId = "<ID_TOKEN>"

const { isValid, decoded, error } = await verifyTokenId(tokenId, "https://securetoken.google.com/<projectId>", "<projectId>");
```

&nbsp;

## API Reference

### Verify ID Token
Verifies Firebase ID Token and returns  `object` containing `{ isValid, decoded, error }` 

```
  verifyTokenId(token, issure, audience)
```

#### Arguments

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`      | `string` | **Required**. Firebase ID Token  |
| `audience`      | `string` | **Required**. Must be your Firebase project ID, the unique identifier for your Firebase project, which can be found in the URL of that project's console.  |
| `issure`      | `string` | **Required**. Must be `https://securetoken.google.com/<projectId>`, where `<projectId>` is the same project ID used for aud above. |

#### Returns
`object` containing `{ isValid, decoded, error }` 

| Property | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `isValid`      | `boolen` | Indicates whether given Firebase ID Token is valid or not  |
| `decoded`      | `object` or `null` | If ID Token is valid this will be decoded JWT Object `{ header, payload }` |
| `error`      | `string` or `null` | If `isValid` is `false` then this will be error message saying why `isValid` is `false` otherwise `null`  |


&nbsp;
## License

[MIT](https://github.com/codehelios/verify-tokenid/blob/main/LICENSE)

&nbsp;
## Authors

- [@codehelios](https://www.github.com/codehelios)
- [@pyshivam](https://www.github.com/pyshivam)

&nbsp;
## Acknowledgements

 - [Verify ID Token](https://firebase.google.com/docs/auth/admin/verify-id-tokens#verify_id_tokens_using_a_third-party_jwt_library)
 - [JWT Verification Library](https://github.com/panva/jose)