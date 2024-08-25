"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CardComponent } from "../voterPage/Card";
import axios from "axios";
import { BACKEND_URL } from "@/utils";

interface Event {
  id: number;
  title: string;
  invitedUsers: string[];
  startDate: string;
  endDate: string;
  options: any[];
  isCompleted: boolean;
}

const ActiveEvent = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Fetch active events from the backend
    const fetchActiveEvents = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/v1/event/activeEvents`,
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        );
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching active events:", error);
      }
    };

    fetchActiveEvents();
  }, []);

  console.log(events, "events");

  return (
    <div className="bg-background rounded-lg shadow-sm border border-input p-6 space-y-4">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Active Voting Events</h2>
        <p className="text-muted-foreground">
          Events that are currently open for voting.
        </p>
      </div>

      <div className="p-8 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <CardComponent
              key={event.id}
              id={event.id}
              description="Decentralized Autonomous Organization (DAO) Proposal" // Example description
              title={event.title}
              categories={event.invitedUsers.map(
                (user) => `${user.slice(0, 6)}...${user.slice(-4)}`
              )} // Shortened wallet addresses
              participants={event.invitedUsers.length.toString()} // Number of participants as a string
              date={new Date(event.startDate).toLocaleDateString()}
              entity="organizer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveEvent;
