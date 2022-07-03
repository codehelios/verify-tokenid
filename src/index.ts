export async function verifyTokenId(
  token: string,
  issuer: string,
  audience: string,
) {
  if (typeof crypto === 'undefined' || !crypto.subtle) {
    return {
      isValid: false,
      error: 'SubtleCrypto not supported!',
    };
  } else {
    const { verifyTokenIdWorker } = await import('./verifier.js');
    return await verifyTokenIdWorker(token, issuer, audience);
  }
}
