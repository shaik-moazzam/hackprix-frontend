"use client";

import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker({ dedlinedate, deadline }) {
  const [date, setDate] = useState();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  useEffect(() => {
    console.log(date);
    if (date?.toString().includes("NaN") || !date) {
      return;
    }
    dedlinedate(date);
  }, [date]);

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
    setIsPopoverOpen(false); // Close the popover after selecting a date
  };

  return (
    <Popover
      onOpenChange={(open) => {
        setIsPopoverOpen(open);
      }}
      open={isPopoverOpen}
    >
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-between font-circular bg-[#FAFBFC] h-[53px] leading-none font-medium text-left",
            !date && "text-muted-foreground",
            isPopoverOpen ? "border-[#205FFF]" : ""
          )}
        >
          {deadline ? deadline : <span>Pick a date</span>}
          <CalendarIcon className="mr-2 mb-0.5 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          className={"border-none"}
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
