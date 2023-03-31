import React, { useEffect, useRef, useState } from "react";
import { useIntersection } from "react-use";
import classNames from "classnames";
import { auth } from "../config/firebase";

function UserCount() {

    getUsers(auth)
  .then(function(userRecords) {
    // `userRecords` contains an array of `UserRecord` objects
    const numUsers = userRecords.length;
    console.log("Number of registered users:", numUsers);
  })
  .catch(function(error) {
    console.error("Error getting user list:", error);
  });

  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(false);
  const [countComplete, setCountComplete] = useState(false);
  const ref = useRef(null);

  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      setStartCount(true);
    }
  }, [intersection]);

  useEffect(() => {
    let timer;
    if (startCount && !countComplete) {
      timer = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount === 100) {
            clearInterval(timer);
            setCountComplete(true);
            return prevCount;
          }
          return prevCount + 1;
        });
      }, 50);
    }
    return () => clearInterval(timer);
  }, [startCount, countComplete]);

  const countClass = classNames("relative w-36 h-36 rounded-full flex justify-center items-center text-6xl font-bold", {
    "text-blue-500": startCount && !countComplete,
    "text-green-500": countComplete,
  });

  const circleClass = classNames("absolute top-0 left-0 w-full h-full rounded-full border-4 border-blue-500", {
    "border-green-500": countComplete,
  });

  return (
    <div ref={ref} className="py-8 flex justify-center items-center">
      <div className={countClass}>
        <div className={circleClass}></div>
        {count}
      </div>
    </div>
  );
}

export default UserCount;
