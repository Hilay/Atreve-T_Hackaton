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
      <a class="ml-5 mt-5 inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-blue-600 border-blue-600 text-gray-100 hover:bg-blue-500 hover:border-blue-500 hover:text-gray-100"
      href="/CampaignForm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-airplay leading-5 mr-2"
        >
          <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
          <polygon points="12 15 17 21 7 21 12 15"></polygon>
        </svg>
        Nueva Campaña
      </a>

      {/* CampaignTables */}
      <TableC/>
    </div>
  );
}

export default CampaignsTable;
