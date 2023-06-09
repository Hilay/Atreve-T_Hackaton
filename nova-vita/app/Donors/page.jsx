"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function Donors() {
  const params = useSearchParams();
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:3000/api/campaigns/closed/allDonationsByCampaignID/${params.get(
        "id"
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDonors(data.donations || []);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div>
      {/* CampaignTables */}

      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-4 font-medium text-gray-900 text-center"
              >
                Benefactor
              </th>
              <th
                scope="col"
                class="px-6 py-4 font-medium text-gray-900 text-center"
              >
                Estado
              </th>
              <th
                scope="col"
                class="px-6 py-4 font-medium text-gray-900 text-center"
              >
                Descripcion
              </th>
              <th
                scope="col"
                class="px-6 py-4 font-medium text-gray-900 text-center"
              >
                Cantidad
              </th>
              <th
                scope="col"
                class="px-6 py-4 font-medium text-gray-900 text-center"
              >
                Fecha de Donacion
              </th>
              <th
                scope="col"
                class="px-6 py-4 font-medium text-gray-900 text-center"
              >
                Fecha/Hora de Recojo
              </th>
              <th
                scope="col"
                class="px-6 py-4 font-medium text-gray-900 text-center"
              >
                Actualizar estado!
              </th>
            </tr>
          </thead>
          <tbody>
          {donors && donors.length === 0 ? (
              <tr>
                <td colSpan="6">
                  <h1 className="text-center">
                    No hay donaciones en la campaña
                  </h1>
                </td>
              </tr>
            ) : (
              donors.map((d) => (
                <tr className="hover:bg-gray-50" key={d.id}>
                  <td className="px-6 py-4 text-center">{d.Name}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-red-600">
                      {d.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">{d.description}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-red-600">
                      {d.quantity}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">{d.donationDate}</td>
                  <td className="px-6 py-4 text-center">{d.pickupDateTime.slice(0, 10)} | {d.pickupDateTime.slice(11, 16)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Donors;
