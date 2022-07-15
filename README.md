# Verify TokenId  &nbsp; [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/codehelios/verify-tokenid/blob/main/LICENSE)  [![NPM Verison](https://img.shields.io/npm/v/@codehelios/verify-tokenid)](https://www.npmjs.com/package/@codehelios/verify-tokenid)


Lightweight zero dependency library to verify Firebase ID Token in Cloudflare Workers.


&nbsp;
## Usage/Examples
&nbsp;

#### Verify ID Token
```javascript
import { verifyTokenId } from "@codehelios/verify-tokenid";

const { isValid, decoded, error } = await verifyTokenId(tokenId, "https://securetoken.google.com/<projectId>", "<projectId>");
```

&nbsp;
## API Reference
&nbsp;
#### Verify ID Token

```
  verifyTokenId(token, issure, audience)
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`      | `string` | **Required**. FIrebase ID Token  |
| `issure`      | `string` | **Required**. Must be "https://securetoken.google.com/<projectId>", where <projectId> is the same project ID used for aud above. |
| `audience`      | `string` | **Required**. Must be your Firebase project ID, the unique identifier for your Firebase project, which can be found in the URL of that project's console.  |



## License

[MIT](https://github.com/codehelios/verify-tokenid/blob/main/LICENSE)


## Authors

- [@codehelios](https://www.github.com/codehelios)
- [@pyshivam](https://www.github.com/pyshivam)


## Acknowledgements

 - [Verify ID Token](https://firebase.google.com/docs/auth/admin/verify-id-tokens#verify_id_tokens_using_a_third-party_jwt_library)
 - [JWT Verification Library](https://github.com/panva/jose)