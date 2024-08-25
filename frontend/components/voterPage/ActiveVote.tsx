import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Check, X } from "lucide-react";
import { CardComponent } from "./Card";
const ActiveVote = () => {
  return (
    <div>
      <section>
        <h2 className="mb-4 text-2xl font-bold">Upcoming Voting Events</h2>
        <div className="  p-8 flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <CardComponent
              brand="Decentralized Autonomous Organization (DAO) Proposal"
              title="Vote on the next steps for our DAO"
              categories={["Test", "Business", "Money"]}
              participants="1.77M"
              date="June 15, 2024"
            />
            <CardComponent
              brand="Decentralized Autonomous Organization (DAO) Proposal"
              title="Vote on the next steps for our DAO"
              categories={["Test", "Business", "Money"]}
              participants="1.77M"
              date="June 15, 2024"
            />
            <CardComponent
              brand="Decentralized Autonomous Organization (DAO) Proposal"
              title="Vote on the next steps for our DAO"
              categories={["Test", "Business", "Money"]}
              participants="1.77M"
              date="June 15, 2024"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActiveVote;
