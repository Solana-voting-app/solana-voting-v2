"use client";
import React, { useEffect, useState } from "react";
import { CardComponent } from "./Card";
import { BACKEND_URL } from "@/utils";
import axios from "axios";
import { useWalletContext } from "@/contexts/WalletContext";
import { Button } from "../ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface Event {
  id: number;
  title: string;
  invitedUsers: string[];
  startDate: string;
  endDate: string;
  options: Array<{
    id: number;
    option: string;
    voteCount: number;
    votedUsers: string[];
  }>;
  isCompleted: boolean;
}

const ActiveVote = () => {
  const { publicKey } = useWalletContext();
  const [events, setEvents] = useState<Event[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    // Fetch active events from the backend
    const fetchActiveEvents = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/v1/voter/getActiveVote?address=${publicKey}`,
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
  }, [publicKey]);

  useEffect(() => {
    const container = document.getElementById("event-container");
    if (container) {
      setMaxScroll(container.scrollWidth - container.clientWidth);
    }
  }, [events]);

  const handleScroll = (direction: string) => {
    const container = document.getElementById("event-container");
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setScrollPosition(container.scrollLeft + scrollAmount);
    }
  };

  console.log(events, "ActiveVotes");

  return (
    <div>
      <section>
        <h2 className="mb-4 text-2xl font-bold">Upcoming Voting Events</h2>
        <div className="p-8 flex justify-center items-center">
          <div
            id="event-container"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto"
          >
            {events.map((event) => (
              <CardComponent
                key={event.id}
                id={event.id}
                description="Decentralized Autonomous Organization (DAO) Proposal"
                title={event.title}
                categories={event.invitedUsers}
                participants={event.invitedUsers.length.toString()}
                startDate={new Date(event.startDate).toLocaleDateString()}
                endDate={new Date(event.endDate).toLocaleDateString()}
                options={event.options}
                entity="voter"
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <Button
            onClick={() => handleScroll("left")}
            disabled={scrollPosition <= 0}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            <ChevronLeftIcon className="w-5 h-5" />
            Prev
          </Button>
          <Button
            onClick={() => handleScroll("right")}
            disabled={scrollPosition >= maxScroll}
            className="bg-gray-700 hover:bg-gray-600 text-white"
          >
            Next
            <ChevronRightIcon className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ActiveVote;
