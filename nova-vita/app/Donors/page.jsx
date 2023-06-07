'use client';
import React from "react";
import TableC from "../components/TableC"
import { useEffect, useState } from "react";

function CampaignsTable() {

  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/campaigns/closed/closed")
    .then((response) => response.json())
    .then((data) => {
      setCampaigns(data);
    })
    
  }, [campaigns]);
  
  return (
    <div>

      {/* CampaignTables */}

      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900 text-center">
                Benefactor
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900 text-center">
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {camp.map((campaign) => { */}
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4 text-center">nombre</td>
                <td class="px-6 py-4 text-center">
                  <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-red-600">
                    No entregado
                  </span>
                </td>
              </tr>;
            {/* })} */}
          </tbody>
        </table>
      </div>



    </div>
  );
}

export default CampaignsTable;
