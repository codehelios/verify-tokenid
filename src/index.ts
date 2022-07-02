import { verifyTokenId } from './verifier.js';

const token =
  'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk4OTdjZjk0NTllMjU0ZmYxYzY3YTRlYjZlZmVhNTJmMjFhOWJhMTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGRtcy1jb2RlaGVsaW9zIiwiYXVkIjoiZGRtcy1jb2RlaGVsaW9zIiwiYXV0aF90aW1lIjoxNjU2NjcyMzU2LCJ1c2VyX2lkIjoib0hCa20zd2JEOGF5Zmp1RVI3dUJQbUJiODdTMiIsInN1YiI6Im9IQmttM3diRDhheWZqdUVSN3VCUG1CYjg3UzIiLCJpYXQiOjE2NTY3NjUzMDAsImV4cCI6MTY1Njc2ODkwMCwiZW1haWwiOiJzaGl2YW1AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInNoaXZhbUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.d8c39MNg7W_SwSgDIJOnKvjVrDMwVUCuxWEGBj-fxw1q-sSHRVXVYvrPX3o1UTIk6ebfuPr9zFb_AFOw8Y5nVh6e0BOf_q3rNhW7W-Gx0Ywo4hhffHiakpsZ5UnL08jot-qhTl6r5E4d16tQjw84JvpGckpsvhfa0Fbqx1lDFFJgl2V8D4pxRZHtVqc-G1FUq9zHO-ADjmdQKaly343EVS9fS7CCZJewnXKEoWsZTXdAaAHHsR4J3LvRlPk38eggr_acUOva1mFe6KZw6xUNzSzJz6qVqBinyu9LL98MHE2OUFj-2tAm_VkGi1MOJiaAuSU-RnkxSmzIpq96yOkzDw';
export default {
  async fetch() {
    console.log(
      JSON.stringify(
        await verifyTokenId(
          token,
          'https://securetoken.google.com/ddms-codehelios',
          'ddms-codehelios',
        ),
        null,
        2,
      ),
    );
    return new Response('Hello World!');
  },
};
