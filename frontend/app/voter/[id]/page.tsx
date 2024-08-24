import {Chart} from "../../../components/voterPage/BarChart"


const Component = () => {
    return (
      <div className="w-full max-w-4xl mx-auto py-12 md:py-16 lg:py-20">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Posted on 2024-08-11</div>
            <div className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-xs font-medium">
              {/* <CalendarIcon className="w-4 h-4" /> */}
              Voting Event
            </div>
          </div>
          <h1 className="text-3xl font-bold">Proposal for New Community Center</h1>
          <div className="text-muted-foreground">
            <p>
              The community is considering a proposal to build a new community center in the downtown area. This center
              would provide a space for local events, classes, and gatherings. The voting will determine whether the
              project moves forward.
            </p>
            <p className="mt-4">
              All eligible community members are encouraged to review the proposal details and cast their vote. The voting
              period will be open for 2 weeks.
            </p>
          </div>
        </div>
        <div className="my-8 border-t" />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="col-span-2">
          <Chart/>
          </div>
          <div className="space-y-4">
            <div>
              <div className="text-sm font-medium">Total Votes</div>
              <div className="text-2xl font-bold">3,456</div>
            </div>
            <div>
              <div className="text-sm font-medium">Approve</div>
              <div className="text-2xl font-bold">72%</div>
            </div>
            <div>
              <div className="text-sm font-medium">Reject</div>
              <div className="text-2xl font-bold">28%</div>
            </div>
          </div>
        </div>
        <div className="my-8 border-t" />
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Voting Activity</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-3 pr-4 font-medium">Address</th>
                  <th className="py-3 pr-4 font-medium">Voted</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 pr-4 flex items-center gap-3">
                    <img
                      src="/placeholder.svg"
                      width="32"
                      height="32"
                      className="rounded-full"
                      alt="Avatar"
                      style={{ aspectRatio: "32/32", objectFit: "cover" }}
                    />
                    0x123...abc
                  </td>
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-500 w-3 h-3 rounded-full" />
                      Voted
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 flex items-center gap-3">
                    <img
                      src="/placeholder.svg"
                      width="32"
                      height="32"
                      className="rounded-full"
                      alt="Avatar"
                      style={{ aspectRatio: "32/32", objectFit: "cover" }}
                    />
                    0x456...def
                  </td>
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-red-500 w-3 h-3 rounded-full" />
                      Not Voted
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 flex items-center gap-3">
                    <img
                      src="/placeholder.svg"
                      width="32"
                      height="32"
                      className="rounded-full"
                      alt="Avatar"
                      style={{ aspectRatio: "32/32", objectFit: "cover" }}
                    />
                    0x789...ghi
                  </td>
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-500 w-3 h-3 rounded-full" />
                      Voted
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 flex items-center gap-3">
                    <img
                      src="/placeholder.svg"
                      width="32"
                      height="32"
                      className="rounded-full"
                      alt="Avatar"
                      style={{ aspectRatio: "32/32", objectFit: "cover" }}
                    />
                    0xabc...def
                  </td>
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-red-500 w-3 h-3 rounded-full" />
                      Not Voted
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  } 

  export default Component;

