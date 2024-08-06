Next.js Caching

- Request Memoization
  .Next.js stores data requests with same configuration
  .For example, for the requests to the same resource with different request headers, next.js treats it as different requests.
  .This avoides unnecessary duplicate data fetches
  .Cache only persists during request duration

- Data Cache
  .Next.js stores & reuses fetched data until it's revalidated
  .Data is stored in internally managed server side cache. Use revalidatePath() after changing some data to tell Next.js to use fresh data.
  .This avoids unnecessary requests to the data source & speeds up the application
  .The cache persists until it's revalidated(manually or after a set time)

- Full Route Cache
  .Next.js stores teh rendered HTML & RSC at build time
  .This avoids unnecessary HTML render cycles & data fetched
  .The cache persists until the related data cache is revalidated.

- Router Cache
  .This cache is managed on the client side, all others on server side
  .Next.js stores the RSC payload in memory in the browser
  .This ensures extremely fast page transitions since no server request is needed

https://nextjs.org/docs/app/building-your-application/caching
