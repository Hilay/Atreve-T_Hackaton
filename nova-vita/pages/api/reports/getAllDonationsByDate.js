import { db, collection, getDocs, query, where } from '../../../lib/firebase';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { startDate, endDate } = req.body;

        // convert dates to ISO format
        const startISO = new Date(startDate).toISOString();
        const endISO = new Date(endDate).toISOString();

        const donationRef = collection(db, 'donations');
        const q = query(donationRef, where("donationDate", ">=", startISO), where("donationDate", "<=", endISO));
        const querySnapshot = await getDocs(q);
        const filteredDonations = querySnapshot.docs.map(doc => doc.data());

        res.status(200).json({ donations: filteredDonations });
    } else {
        res.status(400).json({ error: 'Only POST requests are accepted' });
    }
};