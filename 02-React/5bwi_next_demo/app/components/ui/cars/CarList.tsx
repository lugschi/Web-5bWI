import { Car } from "@/app/lib/types/types";
import React from "react";
import Card from "./Card";
import Cars from "@/app/cars/page";

type Props = { cars: Car[] };

export default function CarList({ cars }: Props) {
  return (
    <div>
      <h2>Cars</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cars.map((car: Car) => (
          <Card car={car} />
        ))}
      </div>
    </div>
  );
}
