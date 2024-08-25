"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

import { Calendar, Check, X } from "lucide-react";

import { Star, BadgeCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface CardProps {
  id: Number;
  description: string;
  title: string;
  categories: string[];
  participants: string;
  date: string;
  entity: string;
}

const truncateString = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) return str;
  const start = str.slice(0, 6); // Show the first 6 characters
  const end = str.slice(-4); // Show the last 4 characters
  return `${start}...${end}`;
};

export const CardComponent: React.FC<CardProps> = ({
  id,
  description,
  title,
  categories,
  participants,
  date,
  entity,
}) => {
  const router = useRouter();
  const handleButtonClick = () => {
    if (entity === "organizer") {
      router.push(`/organizer/${id}`);
    }
  };

  console.log(title, "title");
  return (
    <>
      <Card className="bg-[#141416]">
        <CardContent className=" flex flex-col items-start justify-between gap-4 p-6">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge key={category} variant="secondary">
                {truncateString(category, 7)}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-muted-foreground" />
            <span className="text-muted-foreground ">{date}</span>
          </div>

          <Separator />

          <div className="mt-4 flex items-center justify-between w-full">
            <div className="text-gray-400 text-sm items-center">
              <Star className="inline-block mr-1" />
              {participants} Participants
            </div>
            {entity == "voter" ? (
              <Button>Participate</Button>
            ) : (
              <Button onClick={handleButtonClick}>Results</Button>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
};
