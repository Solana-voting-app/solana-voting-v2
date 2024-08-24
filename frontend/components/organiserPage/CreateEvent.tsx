import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "../ui/button";
import { DatePickerDemo } from "./DatePicker";
import { TabsDemo } from "./Tab";

const CreateEvent = () => {
  return (
    <div className="bg-background rounded-lg shadow-sm border border-input p-6 space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Create Event</h2>
        <p className="text-muted-foreground">
          Set up a new voting event for your community.
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Voting Question/Title</Label>
          <Input id="title" placeholder="What should we build next?" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="start-date">Start Date</Label>
            <DatePickerDemo/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="end-date">End Date</Label>
            <DatePickerDemo/>
          </div>
        </div>
        <div className="space-y-2">
            <Label htmlFor="options">Options</Label>
            <div className="space-y-2">
              <Input id="options" placeholder="Option 1" />
              <Button >Add Option</Button>
            </div>
          </div>
        <div className="space-y-2">
          <TabsDemo/>
        </div>
        <Button className="w-full">Create Event</Button>
      </div>
    </div>
  );
};

export default CreateEvent;
