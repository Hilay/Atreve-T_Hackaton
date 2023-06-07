'use client';
import React from "react";
import TableC from "../components/TableC"
import { useEffect, useState } from "react";

function CampaignsTable() {

  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetch("http://localhost:3000/api/campaigns/closed/closed")
        .then((response) => response.json())
        .then((data) => {
          setCampaigns(data);
        });
    }
  }, []);
  
  
  return (
    <div>
      <TableC dataC={campaigns}/>
    </div>
  );
}

export default CampaignsTable;
