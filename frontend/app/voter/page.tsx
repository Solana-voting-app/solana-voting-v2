import ActiveVote from "@/components/voterPage/ActiveVote";
import PastVote from "@/components/voterPage/PastVote";

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="grid gap-8">
        <ActiveVote />
        <PastVote />
      </div>
    </div>
  );
}
