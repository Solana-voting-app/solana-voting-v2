"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Check, X } from "lucide-react";
import { BACKEND_URL } from "@/utils";
import axios from "axios";

const PastEvent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch active events from the backend
    const fetchActiveEvents = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/v1/event/pastEvents`, {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        });
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching active events:", error);
      }
    };

    fetchActiveEvents();
  }, []);

  console.log("pastEvent", events);

  return (
    <div className="bg-background rounded-lg shadow-sm border border-input p-6 space-y-4">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Past Voting Results</h2>
        <p className="text-muted-foreground">
          Events that have completed voting.
        </p>
      </div>
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
        {events.map((event) => (
          //@ts-ignore
          <Card key={event.id}>
            <CardContent className="flex flex-col items-start justify-between gap-4 p-6">
              <div>
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-muted-foreground">
                  Voted on how to distribute the ecosystem development funds
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  {new Date(event.startDate).toLocaleDateString()}
                </span>
              </div>
              {/* <div className="flex items-center gap-2 text-primary">
                <Check className="h-5 w-5" />
                <span>Voted</span>
              </div> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PastEvent;
