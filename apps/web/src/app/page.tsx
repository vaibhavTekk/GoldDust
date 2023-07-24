"use client"
import { Metadata } from "next";
import { Button, Card, Separator } from "ui";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-row">
      <div className="w-1/5 h-full">
        Side bar navigation
      </div>

      <div className="h-full flex-grow">
        <p className="font-bold text-4xl">
          Dashboard
        </p>
        <Separator />
        <p className="text-xl ">
          Welcome Back
        </p>
        <p className="text-xl font-bold">
        Sharmaximus !
        </p>
      </div>

      <div className="w-1/5">
        Side Panel

        <Card>
          <p className="text-4xl font-bold h-">
            Exchange
          </p>
          
        </Card>
      </div>
    </div>
  );
}
