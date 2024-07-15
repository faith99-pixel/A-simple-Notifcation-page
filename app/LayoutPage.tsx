"use client"
import React, { useState, useEffect } from "react";
import { Icons } from "./components/icons";
import CustomImage from "./components/image";
import images from "@/public/images";
import Link from "next/link";

type Notification = {
  description: string;
  date: string;
  read: boolean;
};

type Props = {};

const LayoutPage = (props: Props) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Simulate fetching notifications
    const fetchedNotifications: Notification[] = [
      {
        description: "You successfully created a buffet",
        date: "24th June, 2024",
        read: false,
      },
      {
        description: "You deleted a blog publication",
        date: "28th June, 2024",
        read: true,
      },
      {
        description: "George Harold successfully paid for a buffet",
        date: "24th Aug, 2024",
        read: false,
      },
      {
        description: "You resolved an enquiry from Tasha Enrique",
        date: "25th March, 2024",
        read: true,
      },
      {
        description: "You updated your profile",
        date: "10th Aug, 2024",
        read: false,
      },
      {
        description: "You successfully added a testimonial",
        date: "25th March, 2024",
        read: false,
      },
    ];
    setNotifications(fetchedNotifications);
  }, []);

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  return (
    <div className="flex items-center justify-between gap-8 mb-12">
      <form className="flex items-center justify-center gap-2 border-[#E3E3E3] border p-2 shadow-sm outline-none">
        <Icons.SearchIcon />
        <input
          className="outline-none bg-transparent w-[500px] text-sm"
          type="text"
          name=""
          id=""
          placeholder="Search for a buffet"
        />
      </form>
      <div className="flex items-center gap-4">
        <Link
          href="/notifications"
          className="relative w-10 h-10 grid place-items-center rounded-full cursor-pointer hover:bg-gray-200"
        >
          <span className="absolute top-0 right-0 bg-red-600 text-white w-5 h-5 rounded-full grid place-items-center text-xs">
            {unreadCount}
          </span>
          <Icons.NotificationIcon className="w-6 h-8" />
        </Link>
        <div className="grid place-items-center w-10 h-10 hover:bg-gray-200 rounded-full cursor-pointer">
          <Icons.Settings className="w-6 h-8" />
        </div>
        <div className="relative w-10 h-10 rounded-full overflow-hidden border-primary border-2 cursor-pointer">
          <CustomImage
            src={images.avatar_image}
            alt=""
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
