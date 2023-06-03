/**
 * The NameList function returns a list of names as h2 elements and a list of persons as Person
 * components.
 * @returns The `NameList` component is returning a `div` element that contains a list of `h2`
 * elements, each displaying an index number and a name from the `names` array.
 */
import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Bruce", "Clark", "Diana", "Bruce"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];

  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));

  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));

  return <div>{nameList}</div>;
}

export default NameList;
