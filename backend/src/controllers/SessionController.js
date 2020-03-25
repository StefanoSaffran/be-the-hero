const connection = require('../database/connection');

module.exports = {
  async store(req, res) {
    const { id } = req.body;

    const loggedONG = await connection('ongs')
      .where('id', id)
      .select('name')
      .first();

    if (!loggedONG) {
      return res.status(401).json({ error: 'ONG not found' });
    }

    return res.json(loggedONG);
  },
};
