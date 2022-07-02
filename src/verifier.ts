/* eslint-disable prefer-const */
import { decode } from '@tsndr/cloudflare-worker-jwt';

export function verifyTokenId(token: string) {
  let isValid = false;
  let decoded = {};
  let error = null;

  console.log(`[token]: `, decode(token));

  return {
    error,
    isValid,
    decoded,
  };
}
