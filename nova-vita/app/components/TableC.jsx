import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";

function TableG({ dataC }) {
  const router = useRouter();
  const path = usePathname();
  const [campaignStates, setCampaignStates] = useState(
    dataC.map((campaign) => campaign.status)
  );

  const UpdateCampaigndelete = (id, index) => {
    // Actualiza el estado de la campaña en el estado campaignStates
    const updatedStates = [...campaignStates];
    updatedStates[index] = "desactive";
    setCampaignStates(updatedStates);

    router.push(`/CampaignFormid?id=${id}`);
  };

  const ChargeDonations = (id) => {
    router.push(`/Donors?id=${id}`);
  };

  const UpdateCampaign = (id) => {
    router.push(`/CampaignFormid?id=${id}`);
  };

  return (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Nombre Campaña
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Descripcion
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Imagen
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Tipo de Beneficiario
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Estado
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Fecha Inicio
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Fecha Fin
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {dataC.map((campaign, index) => {
              return (
                <tr className="hover:bg-gray-50" key={campaign}>
                  <td className="px-6 py-4">{campaign.campaignName}</td>
                  <td className="px-6 py-4">{campaign.description}</td>
                  <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    <div className="relative h-10 w-10">
                      <img
                        className="h-full w-full rounded-full object-cover object-center"
                        src={`https://firebasestorage.googleapis.com/v0/b/fuerza-g-32ca5.appspot.com/o/${campaign.idCampaign}.jpg?alt=media`}
                        alt=""
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4">{campaign.beneficiaryType}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {campaign.startDate.slice(0, 10)}
                  </td>
                  <td className="px-6 py-4">{campaign.endDate.slice(0, 10)}</td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          onClick={() => {
                            UpdateCampaign(campaign.idCampaign);
                          }}
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                      <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          onClick={() => {
                            UpdateCampaigndelete(campaign.idCampaign, index);
                          }}
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                      <div
                        onClick={() => {
                          ChargeDonations(campaign.idCampaign);
                        }}
                        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableG;
