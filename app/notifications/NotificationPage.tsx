"use client";
import React from "react";
import { Icons } from "../components/icons";
import { useRouter } from "next/navigation";

type Props = {};

const NotificationPage = (props: Props) => {
  const router = useRouter();

  const notifications = [
    {
      description: "You successfully created a buffet",
      date: "24th June, 2024",
    },
    {
      description: "You deleted a blog publication",
      date: "28th June, 2024",
    },
    {
      description: "George Harold successfully paid for a buffet",
      date: "24th Aug, 2024",
    },
    {
      description: "You resolved an enquiry from Tasha Enrique",
      date: "25th March, 2024",
    },
    {
      description: "You updated your profile",
      date: "10th Aug, 2024",
    },
    {
      description: "You successfully added a testimonial",
      date: "25th March, 2024",
    },
  ];

  const getBackgroundColor = (description: string) => {
    switch (description) {
      case "You successfully created a buffet":
        return "bg-green-600";
      case "You deleted a blog publication":
        return "bg-red-600";
      case "George Harold successfully paid for a buffet":
        return "bg-gray-600";
      case "You resolved an enquiry from Tasha Enrique":
        return "bg-green-600";
      case "You updated your profile":
        return "bg-gray-600";
      case "You successfully added a testimonial":
        return "bg-green-600";
      default:
        return "bg-white";
    }
  };

  return (
    <div className="!w-[700px] m-auto bg-slate/50 h-[900px]">
      <div className="flex items-center justify-between p-10">
        <h3 className="text-black/70 font-semibold text-2xl">Notification</h3>
        <Icons.Close className="cursor-pointer" onClick={() => router.back()} />
      </div>
      <div className="border-[#eff0f1] border w-[95%] m-auto"></div>
      <p className="flex items-center justify-end p-6 text-[#B1883D]">
        Clear All
      </p>
      {/* <div className="h-[calc(100vh-200px)] overflow-y-auto"> */}
      <div className="">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className={`flex flex-col m-4 p-3 rounded-xl ${getBackgroundColor(
              notification.description
            )}`}
          >
            <p className="text-base tracking-wide">
              {notification.description}
            </p>
            <span className="!text-white text-xs mt-2">
              {notification.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
