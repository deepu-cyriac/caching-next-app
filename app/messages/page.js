import { unstable_noStore } from "next/cache"; //this is recommended by nextjs over dynamic variable after this is stable

import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";

//export const revalidate = 5; //reserved variable name. does the same function as adding revalidate with the request.

// export const dynamic = "force-dynamic"; //reserved variable name. default value is auto: does force caching. 'force-dynamic' same as no-store in request. Tells next.js not to use caching anywhere in this page.
//above code also disables the route cache for this page. ensures always fresh data is there in production build also

export default function MessagesPage() {
  //unstable_noStore(); //disables cache for only this component. useful over dynamic if you have multiple components
  // const response = await fetch(
  //   "http://localhost:8080/messages",
  //   // , {
  //   //   //cache: "no-store", //force-cache is default value. no-store will tell to not cache data here in this request.
  //   //   next: {
  //   //     revalidate: 5, //cached data should be reused for 5 seconds then revalidate data.
  //   //   },
  //   // }
  //   {
  //     next: {
  //       tags: ["msg"], //tags explained in new/page.js
  //     },
  //   }
  // );

  // const messages = await response.json();

  const messages = getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
