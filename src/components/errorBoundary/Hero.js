/**
 * The Hero function takes in a heroName as a prop and returns an h1 element with the heroName, but
 * throws an error if the heroName is "Joker".
 * @returns The `Hero` component is returning an `h1` element with the `heroName` prop passed as its
 * content. However, if the `heroName` prop is equal to "Joker", an error will be thrown with the
 * message "Not a hero!".
 */
import React from "react";

function Hero({ heroName }) {
  if (heroName === "Joker") {
    throw new Error(" Not a hero!");
  }
  return <h1>{heroName}</h1>;
}

export default Hero;
