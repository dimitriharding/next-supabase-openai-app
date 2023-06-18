import {
  Session,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import ChatComponent from "../../components/chat";
import Header from "@/components/header";

export default async function Chat() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div>
      <Header />
      <ChatComponent session={session as Session} />
    </div>
  );
}
