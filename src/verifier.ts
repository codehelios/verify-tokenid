/* eslint-disable prefer-const */

import {
  jwtVerify,
  decodeProtectedHeader,
  importX509,
} from './browser/index.js';

export interface decodedToken {
  header: { alg: string | 'RS256'; kid: string; typ: string | 'JWT' } | unknown;
  payload:
    | {
        iss: string;
        aud: string;
        auth_time: number;
        user_id: string;
        sub: string;
        iat: 1656765300;
        exp: 1656768900;
        email: string;
        email_verified: false;
        firebase: {
          identities: {
            email: [string];
          };
          sign_in_provider: string;
        };
      }
    | unknown;
}

export interface tokenVerification {
  error: string;
  isValid: boolean;
  decoded: decodedToken;
}

export async function verifyTokenId(
  token: string,
  issuer: string,
  audience: string,
): Promise<tokenVerification> {
  let isValid = false;
  let error = null;
  let decoded: decodedToken;
  const header = decodeProtectedHeader(token);

  const data = await fetch(
    'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com',
  );
  const publicKeys = await data.json();
  let secret = publicKeys[header.kid];
  const ecPublicKey = await importX509(secret, header.alg);

  try {
    let { protectedHeader, payload } = await jwtVerify(token, ecPublicKey, {
      issuer,
      audience,
    });
    isValid = true;
    decoded = {
      header: JSON.parse(JSON.stringify(protectedHeader)),
      payload,
    };
  } catch (err) {
    console.error(err.message);
    isValid = false;
    error = err.message;
  }
  return {
    error,
    isValid,
    decoded,
  };
}
