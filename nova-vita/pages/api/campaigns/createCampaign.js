import { pool } from '../../../lib/mysql'

export default async (req, res) => {
    if (req.method === 'POST') {
      try {
        const { idCampaign, idInstitution, campaignName, description, beneficiaryType, startDate, endDate, status } = req.body;
  
        const [result] = await pool.query(
          `INSERT INTO Campaigns (idCampaign, idInstitution, campaignName, description, beneficiaryType, startDate, endDate, status) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, 
          [idCampaign, idInstitution, campaignName, description, beneficiaryType, startDate, endDate, status]
        );
  
        res.status(200).json({ message: 'Campaign created successfully', idCampaign: idCampaign });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.status(400).json({ error: 'Only POST requests are accepted' });
    }
  };