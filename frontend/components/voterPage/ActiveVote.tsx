"use client";
import React, { useEffect, useState } from "react";

import { CardComponent } from "./Card";
import { BACKEND_URL } from "@/utils";
import axios from "axios";

import { useWalletContext } from "@/contexts/WalletContext";

const ActiveVote = () => {
  const { publicKey } = useWalletContext();
  const [events, setEvents] = useState([]);

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

  console.log(events);

  return (
    <div>
      <section>
        <h2 className="mb-4 text-2xl font-bold">Upcoming Voting Events</h2>
        <div className="  p-8 flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {events.map((event) => (
              <CardComponent
                //@ts-ignore
                key={event.id}
                description="Decentralized Autonomous Organization (DAO) Proposal"
                //@ts-ignore

                title={event.title}
                //@ts-ignore

                categories={event.invitedUsers}
                //@ts-ignore

                participants={event.invitedUsers.length}
                //@ts-ignore

                date={new Date(event.startDate).toLocaleDateString()}
                entity="voter"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActiveVote;
