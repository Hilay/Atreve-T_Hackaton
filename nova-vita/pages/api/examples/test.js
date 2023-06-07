import { pool } from '../../../lib/mysql';
import { db, collection } from '../../../lib/firebase';
import { addDoc } from 'firebase/firestore';

export default async (req, res) => {
    if (req.method === 'POST') {
      try {
        const { CI, donations, email, fullName, location, phone, idCampaign, idInstitution, campaignName, description, beneficiaryType, startDate, endDate, status } = req.body;

        // Insert into Firebase
        const userRef = collection(db, 'users');
        const newUser = await addDoc(userRef, {
          CI,
          donations,
          email,
          fullName,
          location,
          phone
        });

        // Insert into MySQL
        const [result] = await pool.query(
          `INSERT INTO Campaigns (idCampaign, idInstitution, campaignName, description, beneficiaryType, startDate, endDate, status) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, 
          [idCampaign, idInstitution, campaignName, description, beneficiaryType, startDate, endDate, status]
        );

        res.status(200).json({ message: 'User and Campaign created successfully', userId: newUser.id, campaignId: idCampaign });

      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.status(400).json({ error: 'Only POST requests are accepted' });
    }
};
