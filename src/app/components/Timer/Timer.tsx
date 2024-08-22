import { addMinutes, getFormattedTime } from "@/utils/time";
import { useEffect, useState } from "react";

const TEST_TIME_MINUTES = 30;
export default function Timer() {
  const [time, setTime] = useState(new Date());
  const [finishTime, setFinishTime] = useState(new Date());

  useEffect(() => {
    setFinishTime(addMinutes(new Date(), TEST_TIME_MINUTES));
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      const diff = finishTime.getTime() - new Date().getTime();
      if (diff > 0) {
        setTime(new Date(diff));
      }
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [finishTime]);

  return <div>{getFormattedTime(time)}</div>;
}
