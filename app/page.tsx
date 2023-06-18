import ChatComponent from "@/components/chat";
import AuthForm from "../components/auth-form";

export default function Home() {
  return (
    <div className="w-full md:w-3/4 lg:w-1/2 mx-auto mt-6">
      <div className="auth-widget">
        <AuthForm />
      </div>
      <ChatComponent session={null} />
    </div>
  );
}
