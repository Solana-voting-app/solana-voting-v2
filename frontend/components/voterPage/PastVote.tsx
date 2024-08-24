import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Check, X } from "lucide-react";
const PastVote = () => {
  return (
    <div>
      {" "}
      <section>
        <h2 className="mb-4 text-2xl font-bold">Past Voting Events</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-start justify-between gap-4 p-6">
              <div>
                <h3 className="text-lg font-semibold">
                  Ecosystem Development Fund Allocation
                </h3>
                <p className="text-muted-foreground">
                  Voted on how to distribute the ecosystem development funds
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">May 1, 2024</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Check className="h-5 w-5" />
                <span>Voted</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-start justify-between gap-4 p-6">
              <div>
                <h3 className="text-lg font-semibold">
                  Treasury Management Proposal
                </h3>
                <p className="text-muted-foreground">
                  Voted on the proposed treasury management changes
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">April 15, 2024</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <X className="h-5 w-5" />
                <span>Did not vote</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-start justify-between gap-4 p-6">
              <div>
                <h3 className="text-lg font-semibold">
                  Token Emission Schedule
                </h3>
                <p className="text-muted-foreground">
                  Voted on the proposed token emission schedule
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">March 30, 2024</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Check className="h-5 w-5" />
                <span>Voted</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PastVote;
