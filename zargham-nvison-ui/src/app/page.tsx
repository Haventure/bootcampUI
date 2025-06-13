import BreadCumb from "./components/BreadCumb";
import ChatButton from "./components/ChatButton";
import Hero from "./components/Hero";
import LoginForm from "./components/LoginForm";
// import Navbar from "./components/Nav2";
import Navbar from "./components/Navbar";
// import Text from "./components/Text";

export default function Home() {
  return (
    <div className="bg-white">
      {/* <Navbar /> */}
      <Navbar />
      {/* <Text /> */}
      <LoginForm />
      <ChatButton />
      <Hero />
      <BreadCumb />
    </div>
  );
}
