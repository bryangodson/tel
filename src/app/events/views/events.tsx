import Link from "next/link";
import { useState, useEffect } from "react";
interface eventProps {
  view: string;
}
export interface eventsTypesFromServer {
  eventTitle: string;
  location: string;
  time: string;
  rvsp: string;
  eventId: string;
}

export default function Events({ view }: eventProps) {
  const [events] = useState<Record<number, eventsTypesFromServer>>({
    2: {
      eventTitle: "Educational Seminars or Workshops",
      location: "Office of the Head of Local Government Services,Accra",
      time: "9:00 - 12:00pm",
      rvsp: "0277517902",
      eventId: "aiuehaoiueh",
    },
    6: {
      eventTitle: "Educational Seminars or Workshops",
      location: "Office of the Head of Local Government Services,Accra",
      time: "9:00 - 12:00pm",
      rvsp: "0277517902",
      eventId: "aiuehaoiueh",
    },
    7: {
      eventTitle: "Educational Seminars or Workshops",
      location: "Office of the Head of Local Government Services,Accra",
      time: "9:00 - 12:00pm",
      rvsp: "0277517902",
      eventId: "aiuehaoiueh",
    },
    10: {
      eventTitle: "Educational Seminars or Workshops",
      location: "Office of the Head of Local Government Services,Accra",
      time: "9:00 - 12:00pm",
      rvsp: "0277517902",
      eventId: "aiuehaoiueh",
    },
    13: {
      eventTitle: "Educational Seminars or Workshops",
      location: "Office of the Head of Local Government Services,Accra",
      time: "9:00 - 12:00pm",
      rvsp: "0277517902",
      eventId: "aiuehaoiueh",
    },
    14: {
      eventTitle: "Educational Seminars or Workshops",
      location: "Office of the Head of Local Government Services,Accra",
      time: "9:00 - 12:00pm",
      rvsp: "0277517902",
      eventId: "aiuehaoiueh",
    },
    15: {
      eventTitle: "Educational Seminars or Workshops",
      location: "Office of the Head of Local Government Services,Accra",
      time: "9:00 - 12:00pm",
      rvsp: "0277517902",
      eventId: "aiuehaoiueh",
    },
    16: {
      eventTitle: "Educational Seminars or Workshops",
      location: "Office of the Head of Local Government Services,Accra",
      time: "9:00 - 12:00pm",
      rvsp: "0277517902",
      eventId: "aiuehaoiueh",
    },
    17: {
      eventTitle: "Educational Seminars or Workshops",
      location: "Office of the Head of Local Government Services,Accra",
      time: "9:00 - 12:00pm",
      rvsp: "0277517902",
      eventId: "aiuehaoiueh",
    },
    28: {
      eventTitle: "Educational Seminars or Workshops",
      location: "Office of the Head of Local Government Services,Accra",
      time: "9:00 - 12:00pm",
      rvsp: "0277517902",
      eventId: "aiuehaoiueh",
    },
    29: {
      eventTitle: "Educational Seminars or Workshops",
      location: "Office of the Head of Local Government Services,Accra",
      time: "9:00 - 12:00pm",
      rvsp: "0277517902",
      eventId: "aiuehaoiueh",
    },
    30: {
      eventTitle: "Educational Seminars or Workshops",
      location: "Office of the Head of Local Government Services,Accra",
      time: "9:00 - 12:00pm",
      rvsp: "0277517902",
      eventId: "aiuehaoiueh",
    },
    31: {
      eventTitle: "Educational Seminars or Workshops",
      location: "Office of the Head of Local Government Services,Accra",
      time: "9:00 - 12:00pm",
      rvsp: "0277517902",
      eventId: "aiuehaoiueh",
    },
  });

  const date = new Date();
  const generateCalendar = (
    year: number = date.getFullYear(),
    month: number = date.getMonth() + 1
  ) => {
    const daysInTheMonth = new Date(year, month, 0).getDate();
    const firstDayOfTheWeek = new Date(year, month - 1, 1).getDay();
    const days = [];

    for (let index = 1; index < firstDayOfTheWeek; index++) {
      // empty days before the first day of the first week
      days.push(null);
    }
    // the rest of the days
    for (let index = 1; index <= daysInTheMonth; index++) {
      days.push(index);
    }
    //   empty days of the last week
    while (days.length % 7 !== 0) {
      days.push(null);
    }
    return days;
  };
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [deviceWidth, setDeviceWidth] = useState<number | null>(null);

  useEffect(() => {
    // Function to update width
    const updateWidth = () => {
      setDeviceWidth(window.innerWidth);
    };

    // Initial width
    if (typeof window !== "undefined") {
      updateWidth();
    }

    //  resize listener
    window.addEventListener("resize", updateWidth);

    // Cleaning up the listener on unmount
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  return (
    <div className="w-full">
      {/* days */}

      <div className="w-full h-10 grid grid-cols-7 bg-tel-grey bg-opacity-20 text-tel-grey font-bold">
        {days.map((day, index) => {
          return (
            <span
              className="border-[1px] border-tel-grey border-opacity-20 h-full grid place-items-center"
              key={index}>
              {deviceWidth && deviceWidth >= 768 ? day : day.slice(0, 3)}
            </span>
          );
        })}
      </div>
      <div className="w-full grid grid-cols-7 border-[1px] border-tel-grey border-t-0 border-opacity-20">
        {/* calendar */}
        {generateCalendar().map((day, index) => {
          let currentEvent = null;
          if (day && day in events) {
            currentEvent = events[day];
          }
          return (
            <div
              key={index}
              className={`h-28 md:h-56 overflow-scroll hide-scroll-bar p-3 border-tel-grey border-opacity-20 border-[1px] ${
                index < 7 ? "border-t-0" : ""
              }`}>
              <span className="text-tel-blue text-opacity-70 font-semibold">
                {day}
              </span>
              <div className="flex flex-col gap-y-2 mt-2">
                <h3 className="font-bold text-sm">
                  {currentEvent?.eventTitle}
                </h3>
                <p className="text-xs">{currentEvent?.location}</p>
                <p className="text-xs text-green-500">{currentEvent?.time}</p>
                <p className="font-semibold text-sm">{currentEvent?.rvsp}</p>
              </div>

              {currentEvent !== null && view !== "past events" && (
                <Link href="#" className="text-sm text-blue-400 underline">
                  Click to Register
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
