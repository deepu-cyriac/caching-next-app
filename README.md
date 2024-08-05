Next.js Caching

- Request Memoization
  .Next.js stores data requests with same configuration
  .This avoides unnecessary duplicate data fetches
  .Cache only persists during request duration

- Data Cache
  .Next.js stores & reuses fetched data until it's revalidated
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
