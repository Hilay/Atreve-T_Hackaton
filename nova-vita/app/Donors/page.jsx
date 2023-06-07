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



      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Nombre Campaña
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Requerimiento
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Imagenes
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Fecha Inicio
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Fecha Fin
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
            </tr>
          </thead>
          <tbody>
            {/* {camp.map((campaign) => { */}
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4">nombre</td>
                <td class="px-6 py-4">
                  <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                    active
                  </span>
                </td>
                <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div class="relative h-10 w-10">
                    <img
                      class="h-full w-full rounded-full object-cover object-center"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                </th>
                <td class="px-6 py-4">aaaa</td>
                <td class="px-6 py-4">bbbb</td>
                <td class="px-6 py-4">
                  <div class="flex justify-end gap-4">
                    <a x-data="{ tooltip: 'Delete' }" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </a>
                    <a x-data="{ tooltip: 'Edite' }" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </a>
                  </div>
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
