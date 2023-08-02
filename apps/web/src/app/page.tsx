"use client";
import { Bitcoin, Ethereum, Tether, USD_COIN } from "ui";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Check, ChevronsUpDown } from "lucide-react";

const sample_crypto_coins_list = [
  {
    name: "Bitcoin",
    value: "btc",
    label: "BTC",
    percent: 37,
    performance: +2.5,
    icon: Bitcoin,
  },
  {
    name: "Tether",
    value: "usdt",
    label: "USDT",
    percent: 37,
    performance: -1.5,
    icon: Tether,
  },
  {
    name: "Ethereum",
    value: "eth",
    label: "ETH",
    percent: 37,
    performance: -2.5,
    icon: Ethereum,
  },
  {
    name: "USD Coin",
    value: "usdc",
    label: "USDC",
    percent: 37,
    performance: +2.5,
    icon: USD_COIN,
  },
];

export default function Home() {
  const [userName, setUserName] = React.useState("Sharmaximus");
  const [accountNo, setAccountNo] = React.useState(
    "0xLbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71"
  );
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("btc");
  const [open2, setOpen2] = React.useState(false);
  const [value2, setValue2] = React.useState("usdt");
  const [exchangeType, setExchangeType] = React.useState<"buy" | "sell">("buy");

  return (
    <div className="flex min-h-screen flex-row">
      {/* Side Bar */}
      <div className="w-1/5 h-full">Side bar navigation</div>

      {/* Dashboard */}
      <div className="h-full flex-grow">
        <p className="font-bold text-4xl mt-5">Dashboard</p>

        <p className="text-xl ">Welcome Back</p>
        <p className="text-xl font-bold">{userName} !</p>
      </div>

      {/* Side Panel Navigation */}
      <div className="w-1/4 p-3">
        {/* User Information Panel */}
        <div className="w-full flex flex-row mb-4 justify-end items-center">
          <span className="bg-primary text-primary-foreground text-sm py-3 px-4 rounded-[50px] mr-3 whitespace-nowrap">
            Premium Account
          </span>

          <div className="text-sm w-1/2">
            <div className="flex flex-row">
              <p className="font-bold w-fit ml-1">Name: </p>
              <p className="text-ellipsis">{userName}</p>
            </div>
            <div className="flex flex-row">
              <p className="font-bold w-fit">Account: </p>
              <p className="truncate">{accountNo}</p>
            </div>
          </div>

          <Skeleton className="h-14 w-14 rounded-full bg-slate-400" />
        </div>

        {/* Exchange Card  */}
        <Card className="p-5 flex flex-col mb-10 shadow-2xl">
          <div className="flex flex-row w-full">
            <p className="text-4xl font-bold mb-5 ">Exchange</p>

            <div className="flex float-right grow justify-end ">
              <div className="bg-gray-50-100 px-2 py-1 flex flex-row rounded-sm gap-x-1 justify-center items-center h-min">
                <Toggle
                  className="h-min py-1 px-3"
                  onClick={() => setExchangeType("buy")}
                  pressed={exchangeType === "buy"}
                >
                  <p className="font-bold">Buy</p>
                </Toggle>
                <Toggle
                  className="h-min py-1 px-3"
                  onClick={() => setExchangeType("sell")}
                  pressed={exchangeType === "sell"}
                >
                  <p className="font-bold">Sell</p>
                </Toggle>
              </div>
            </div>
          </div>

          {/* Origin Currency Input */}
          <p className="font-bold text-secondary-foreground">From</p>
          <div className="flex flex-row mb-10">
            {/* The popover mechanism for currency selection */}
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  <p className="font-bold">
                    {value
                      ? sample_crypto_coins_list.find(
                          (framework) => framework.value === value
                        )?.label
                      : "Select framework..."}
                      
                  </p>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search framework..." />
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {sample_crypto_coins_list.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        onSelect={(currentValue) => {
                          setValue(framework.value);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={`mr-2 h-4 w-4 ${
                            value === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                        {framework.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>

            <Input type="number" placeholder="Enter Amount"></Input>
          </div>

          {/* Conversion Currency */}
          <p className="font-bold text-secondary-foreground">To</p>
          <div className="flex flex-row mb-5">
            {/* The popover mechanism for currency selection */}
            <Popover open={open2} onOpenChange={setOpen2}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open2}
                  className="w-[200px] justify-between"
                >
                  <p className="font-bold">
                    {value
                      ? sample_crypto_coins_list.find(
                          (framework) => framework.value === value2
                        )?.label
                      : "Select framework..."}
                  </p>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search framework..." />
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {sample_crypto_coins_list.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setValue2(currentValue);
                          setOpen2(false);
                        }}
                      >
                        <Check
                          className={`mr-2 h-4 w-4 ${
                            value2 === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                        {framework.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>

            <Input type="number" placeholder="Enter Amount"></Input>
          </div>

          <p className="text-sm mb-5">1 USD = $22,741.01</p>
          <Button className="py-7">Exchange Now</Button>
        </Card>

        {/* Wallet Card */}
        <Card className="p-5 flex flex-col shadow-2xl">
          <p className="text-4xl font-bold mb-5 ">Wallets</p>

          {sample_crypto_coins_list.map((coin) => (
            <div className="mb-1 flex p-3 flex-row">
              <div className="bg-slate-200 drop-shadow-lg rounded-lg mr-3 p-1 h-min">
                {<coin.icon className="fill-primary" />}
              </div>
              <p className="text-lg grow"> {coin.name} </p>

              <div className="flex flex-col justify-self-end h-full">
                <p className="text-lg"> {coin.percent}% </p>
                <p className={`text-md ${coin.performance > 0 ?  "text-green-500" :"text-red-500" }`}> {coin.performance}% </p>
              </div>
            </div>
          ))}
        </Card>

      </div>
    </div>
  );
}
