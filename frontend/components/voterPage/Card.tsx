import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

import { Calendar, Check, X } from "lucide-react";

import { Star,BadgeCheck } from 'lucide-react';

interface CardProps {
  logo: string;
  brand: string;
  title: string;
  categories: string[];
  participants: string;
  date:string;
}

export const CardComponent: React.FC<CardProps> = ({
  logo,
  brand,
  title,
  categories,
  participants,
  date
}) => {
  return (
    <>
    <Card className="bg-[#141416]">
            <CardContent className=" flex flex-col items-start justify-between gap-4 p-6">
              <div>
                
                <h3 className="text-lg font-semibold">
                  {brand}
                </h3>
                <p className="text-muted-foreground">
                    {title}
                </p>
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {categories.map((category) => (
                <Badge key={category} variant="secondary">
                    {category}
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
                <Button>Participate</Button>
              </div>

            </CardContent>
    </Card>

    </>
  );
};
