import React, { useState, useEffect } from "react";
import { checkSubHeading, replaceHeading } from "../subHeading";
// give alternates option to say "good morning"

const DisplayResult = ({ answer, index }) => {
  const [heading, setHeading] = useState("false");
  const [paragraph, setParagraph] = useState(answer);

  useEffect(() => {
    if (checkSubHeading(answer)) {
      setHeading(true);
      setParagraph(replaceHeading(answer));
    }
  }, []);

  return (
    <>
      {index == 0 ? (
        <span className="pt-1 text-xl block text-white">{paragraph}</span>
      ) : heading ? (
        <span className="pt-1 text-lg block text-white">{paragraph}</span>
      ) : (
        <span className="pl-10">{paragraph}</span>
      )}
    </>
  );
};

export default DisplayResult;
