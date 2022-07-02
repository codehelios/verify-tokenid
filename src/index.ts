export default {
  async fetch(request: Request) {
    console.log(`[request]: `, request);
    return new Response('Hello World!');
  },
};
