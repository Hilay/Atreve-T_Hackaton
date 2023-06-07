import { db, collection, getDocs, query, where } from '../../../../../lib/firebase';
import { pool } from '../../../../../lib/mysql';

export default async (req, res) => {
  if (req.method === 'GET') {
      const { id } = req.query; // get the campaign id from request query parameter

      // Verify if the campaign with the provided ID is closed
      const [campaigns] = await pool.query(`SELECT * FROM Campaigns WHERE idCampaign = ? AND status = 'closed'`, [id]);

      if (campaigns.length > 0) {
          // If the campaign exists and is closed, fetch all donations from Firebase for this campaign
          const donationRef = collection(db, 'donations');
          const q = query(donationRef, where("campaign_id", "==", id));
          const querySnapshot = await getDocs(q);
          const donations = querySnapshot.docs.map(doc => doc.data());

          res.status(200).json({ donations });
      } else {
          res.status(404).json({ message: 'No closed campaign found with the provided ID' });
      }
  } else {
      res.status(400).json({ error: 'Only GET requests are accepted' });
  }
};