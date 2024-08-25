"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DatePickerDemo } from "./DatePicker";
import { TabsDemo } from "./Tab";
import axios from "axios";
import { z } from "zod";
import { BACKEND_URL } from "@/utils";

// Define validation schema using Zod
const eventSchema = z.object({
  title: z.string().min(1, "Title is required"),
  startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid start date",
  }),
  endDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid end date",
  }),
  options: z.array(z.string()).min(1, "At least one option is required"),
  invitedUsers: z.array(z.string()).optional(),
});

const CreateEvent = () => {
  const initialState = {
    title: "",
    startDate: null as Date | null,
    endDate: null as Date | null,
    options: [""],
    invitedUsers: [] as string[],
  };
  const [formState, setFormState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { title, startDate, endDate, options, invitedUsers } = formState;

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof formState
  ) => {
    setFormState({ ...formState, [field]: e.target.value });
  };

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = options.map((option, i) =>
      i === index ? value : option
    );
    setFormState({ ...formState, options: updatedOptions });
  };

  const addOption = () => {
    setFormState({ ...formState, options: [...options, ""] });
  };

  const removeOption = (index: number) => {
    const updatedOptions = options.filter((_, i) => i !== index);
    setFormState({ ...formState, options: updatedOptions });
  };

  const addAdress = () => {
    setFormState({ ...formState, invitedUsers: [...invitedUsers, ""] });
  };

  const removeAddress = (index: number) => {
    const updatedinvitedUsers = invitedUsers.filter((_, i) => i !== index);
    setFormState({ ...formState, invitedUsers: updatedinvitedUsers });
  };

  const handleinvitedUserChange = (index: number, value: string) => {
    const updatedinvitedUsers = invitedUsers.map((option, i) =>
      i === index ? value : option
    );
    setFormState({ ...formState, invitedUsers: updatedinvitedUsers });
  };

  const resetForm = () => {
    setFormState(initialState);
  };

  // Handle form submission
  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      // Validate form data with Zod
      const validatedData = eventSchema.parse({
        title,
        startDate: startDate ? startDate.toISOString() : "",
        endDate: endDate ? endDate.toISOString() : "",
        options,
        invitedUsers,
      });

      const response = await axios.post(
        `${BACKEND_URL}/v1/event/createEvent`,
        validatedData,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("Event created:", response.data);
      resetForm();
      // Handle successful response (e.g., show success message, redirect)
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        // Handle validation errors
        setError(err.errors[0].message); // Display the first validation error
      } else {
        setError(
          err?.response?.data?.message ||
            "An error occurred while creating the event."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  console.log(formState);

  return (
    <div className="bg-background rounded-lg shadow-sm border border-input p-6 space-y-6">
      <header className="space-y-2">
        <h2 className="text-2xl font-bold">Create Event</h2>
        <p className="text-muted-foreground">
          Set up a new voting event for your community.
        </p>
      </header>

      {error && <p className="text-red-600">{error}</p>}

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Voting Question/Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => handleInputChange(e, "title")}
            placeholder="What should we build next?"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="start-date">Start Date</Label>
            <DatePickerDemo
              selectedDate={startDate}
              onSelectDate={(date) =>
                setFormState({ ...formState, startDate: date })
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="end-date">End Date</Label>
            <DatePickerDemo
              selectedDate={endDate}
              onSelectDate={(date) =>
                setFormState({ ...formState, endDate: date })
              }
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="options">Options</Label>
          {options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Input
                id={`option-${index}`}
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
              />
              {index > 0 && (
                <Button
                  variant="destructive"
                  onClick={() => removeOption(index)}
                >
                  Remove
                </Button>
              )}
            </div>
          ))}
          <Button variant="outline" onClick={addOption}>
            Add Option
          </Button>
        </div>

        <TabsDemo
          invitedUsers={invitedUsers}
          addAdress={addAdress}
          removeAddress={removeAddress}
          handleinvitedUserChange={handleinvitedUserChange}
        />

        <Button className="w-full" onClick={handleSubmit} disabled={loading}>
          {loading ? "Creating..." : "Create Event"}
        </Button>
      </div>
    </div>
  );
};

export default CreateEvent;
