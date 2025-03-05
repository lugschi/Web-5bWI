import { Car } from "@/app/lib/types/types";
import React from "react";

type Props = { car: Car };

export default function Card({ car }: Props) {
  return (

    <div className="w-100 bg-green-100 border border-green-300 rounded-lg p-6">
      <h2 className="text-xl font-bold text-green-800 mb-2">{car.name}</h2>
      <div className="text-green-700">{car.color} | {car.motor.hp} | {car.motor.serialNumber} | {car.type}</div>
    </div>
  );
}
