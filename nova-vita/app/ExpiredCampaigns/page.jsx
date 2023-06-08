'use client';
import React from "react";
import TableC from "../components/TableC"
import { useEffect, useState } from "react";
import TabC from "../components/TabC";

function CampaignsTable() {

  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetch("http://localhost:3000/api/campaigns/closed/getClosedCampaigns")
        .then((response) => response.json())
        .then((data) => {
          setCampaigns(data);
        });
    }
  }, []);
  
  
  return (
    <div>
      <TabC/>
      <TableC dataC={campaigns}/>
    </div>
  );
}

export default CampaignsTable;
