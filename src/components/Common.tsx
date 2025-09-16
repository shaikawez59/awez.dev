import Navbar from "./Navbar";
import Profile from "./Profile";
import Social from "./Social";

export default function Common() {
  return (
    <div className="w-full max-w-3xl">
      <Profile />
      <Social />
      <div className="border-b border-card-border w-full my-8" />
      <Navbar />
    </div>
  );
}