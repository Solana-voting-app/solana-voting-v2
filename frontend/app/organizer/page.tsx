import ActiveEvent from "@/components/organiserPage/ActiveEvent";
import CreateEvent from "@/components/organiserPage/CreateEvent";
import PastEvent from "@/components/organiserPage/PastEvent";

export default function Component() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-8 p-6 md:p-10">
      <CreateEvent />
      <div className="space-y-6">
        <ActiveEvent />
        <PastEvent />
      </div>
    </div>
  );
}
