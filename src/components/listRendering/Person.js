/**
 * This is a React component that renders a person's name, age, and skill.
 * @returns The `Person` component is being returned, which renders a `div` containing an `h2` element
 * with information about a person's name, age, and skill.
 */
import React from "react";

function Person({ person, key }) {
  return (
    <div>
      <h2>
        I am {person.name}. I am {person.age} years old. I know {person.skill}
      </h2>
    </div>
  );
}

export default Person;
