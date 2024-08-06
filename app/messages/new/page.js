import { redirect } from "next/navigation";

import { addMessage } from "@/lib/messages";
import { revalidatePath, revalidateTag } from "next/cache";

export default function NewMessagePage() {
  async function createMessage(formData) {
    "use server";

    const message = formData.get("message");
    addMessage(message);
    revalidatePath("/", "layout"); //does the same function. but more efficient as caching is done. but data is also revalidated when new data is added.
    revalidateTag("msg"); //you can assign tags to requests that fetch data that will be cached. tags can be assigned to requests in multiple pages and this called to revalidate requests in all those
    redirect("/messages");
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required rows="5" />
        </p>

        <p className="form-actions">
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
