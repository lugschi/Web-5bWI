import Link from "next/link";
import React from "react";
import Card from "../components/ui/cars/Card";
import { Car } from "../lib/types/types";

type Props = {};

const cars: Car[] = [
  {
    name: "Super car",
    type: "BMW X3",
    color: "green",
    motor: {
      serialNumber: 1234,
      hp: 200,
    },
  },
  {
    name: "Speedster",
    type: "Ferrari 488",
    color: "red",
    motor: {
      serialNumber: 5678,
      hp: 700,
    },
  },
  {
    name: "Luxury Cruiser",
    type: "Mercedes-Benz S-Class",
    color: "black",
    motor: {
      serialNumber: 91011,
      hp: 450,
    },
  },

  {
    name: "Sport Beast",
    type: "Lamborghini Aventador",
    color: "yellow",
    motor: {
      serialNumber: 1213,
      hp: 730,
    },
  },
  {
    name: "Electric Dream",
    type: "Tesla Model S",
    color: "blue",
    motor: {
      serialNumber: 1415,
      hp: 1020,
    },
  },
  {
    name: "Classic Racer",
    type: "Porsche 911",
    color: "silver",
    motor: {
      serialNumber: 1617,
      hp: 450,
    },
  },
];

export default function Cars({}: Props) {
  return (
    <div>
      <h1>Cars</h1>
      {cars.map((car: Car) => (
        <Card car={car} />
      ))}
    </div>
  );
}
