/**
 * The function uses the React Profiler component to measure the performance of a Form component and
 * logs the results to the console.
 * @returns The `ProfilerExe` component is being returned.
 */
import React, { Profiler } from "react";
import Form from "./Form";

const ProfilerExe = () => {
  const callback = (
    id,
    phase,
    actualDuration,
    startTime,
    baseDuration,
    commitTime,
    interactions
  ) => {
    console.log(
      "id " +
        id +
        " startTime " +
        startTime +
        " actualDuration " +
        actualDuration +
        " baseDuration " +
        baseDuration +
        " commitTime " +
        commitTime +
        " phase " +
        phase +
        " interactions " +
        interactions
    );
  };

  return (
    <>
      <Profiler id="Name" onRender={callback}>
        <Form labelname="Name " />
      </Profiler>
    </>
  );
};

export default ProfilerExe;
