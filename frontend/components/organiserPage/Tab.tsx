import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="public" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="public">Public</TabsTrigger>
              <TabsTrigger value="private">Private</TabsTrigger>
            </TabsList>
            <TabsContent value="public">
              <div className="space-y-2">
                <p className="text-muted-foreground">Share this link with your community to allow them to vote:</p>
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
                  <Input id="addresses" placeholder="0x123..., 0x456..., 0x789..." />
                  <Button >Add Address</Button>
                </div>
                <div className="flex flex-wrap gap-2" />
              </div>
            </TabsContent>
          </Tabs>

  )
}
