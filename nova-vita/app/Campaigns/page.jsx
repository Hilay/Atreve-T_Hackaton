'use client';
import React from "react";
import TableC from "../components/TableC";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import TabC from "../components/TabC";
/* import { useSelector } from "react-redux"; */

function CampaignsTable() {
  const [campaigns, setCampaigns] = useState([]);
  const pathname = usePathname();
  /* const inst = useSelector((state) => state.institucion); */
  /* confirm(inst); */

  useEffect(() => {
    confirm(localStorage.getItem("Institution"))
    if (typeof window !== "undefined") {
      fetch("http://localhost:3000/api/campaigns/active/getActiveCampaign")
        .then((response) => response.json())
        .then((data) => {
          setCampaigns(data);
        });
    }
  }, []);

  return (
    <div>
      
      <TabC/>
      {/* CampaignTables */}
      <TableC dataC={campaigns} />
    </div>
  );
}

export default CampaignsTable;
