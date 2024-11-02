import PantipHighlights from "./ui/pantip-highlights";
import PantipHitz from "./ui/pantip-hitz/pantip-hitz";
import PantipPick from "./ui/pantip-pick/pantip-pick";
import PantipRealtime from "./ui/pantip-realtime/pantip-realtime";
import RecommendedRoom from "./ui/recommended-room";
import SearchBar from "./ui/searchbar";

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-10">
      <SearchBar/>
      <RecommendedRoom />
      <PantipHighlights />
      <PantipRealtime />
      <PantipPick />
      <PantipHitz />
    </div>
  );
}
