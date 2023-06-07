import { db, collection, getDocs } from '../../../lib/firebase';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { startDate, endDate } = req.body;

        const donationRef = collection(db, 'donations');
        const querySnapshot = await getDocs(donationRef);
        const donations = querySnapshot.docs.map(doc => doc.data());

        // filter the donations by the given date range
        const filteredDonations = donations.filter(donation => {
            const donationDate = new Date(donation.donationDate);
            return donationDate >= new Date(startDate) && donationDate <= new Date(endDate);
        });

        res.status(200).json({ donations: filteredDonations });
    } else {
        res.status(400).json({ error: 'Only POST requests are accepted' });
    }
};
