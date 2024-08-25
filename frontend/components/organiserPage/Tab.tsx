import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabsDemoProps {
  invitedUsers: string[];
  addAdress: () => void;
  removeAddress: (index: number) => void;
  handleinvitedUserChange: (index: number, value: string) => void;
}

export function TabsDemo({
  invitedUsers,
  addAdress,
  removeAddress,
  handleinvitedUserChange,
}: TabsDemoProps) {
  return (
    <Tabs defaultValue="public" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="public">Public</TabsTrigger>
        <TabsTrigger value="private">Private</TabsTrigger>
      </TabsList>

      <TabsContent value="public">
        <div className="space-y-2">
          <p className="text-muted-foreground">
            Share this link with your community to allow them to vote:
          </p>
          <div className="flex items-center gap-2">
            <Input value="https://example.com/vote" readOnly />
            <Button variant="outline">Copy Link</Button>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="private">
        <div className="space-y-2">
          <Label htmlFor="addresses">Add User Addresses</Label>
          <div className="space-y-2">
            {invitedUsers.map((address, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  value={address}
                  onChange={(e) =>
                    handleinvitedUserChange(index, e.target.value)
                  }
                  placeholder={`User Address ${index + 1}`}
                />
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeAddress(index)}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button onClick={addAdress}>Add Address</Button>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
