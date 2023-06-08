import { pool } from '../../../../lib/mysql';

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const [results] = await pool.query(
        `SELECT * FROM Campaigns WHERE status = ?`,
        ['closed']
      );

      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(400).json({ error: 'Only GET requests are accepted' });
  }
};