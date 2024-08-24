import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PastEvent = () => {
  return (
    <div className="bg-background rounded-lg shadow-sm border border-input p-6 space-y-4">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Past Voting Results</h2>
        <p className="text-muted-foreground">
          Events that have completed voting.
        </p>
      </div>
      <div className="grid gap-4">
        <Card>
          <CardContent className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-medium">
                Should we change the logo?
              </h3>
              <p className="text-sm text-muted-foreground">
                Voting closed on Jul 1, 2023
              </p>
            </div>
            <Button variant="outline" size="sm">
              View
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-medium">
                Should we add a new feature?
              </h3>
              <p className="text-sm text-muted-foreground">
                Voting closed on Jun 15, 2023
              </p>
            </div>
            <Button variant="outline" size="sm">
              View
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PastEvent;
