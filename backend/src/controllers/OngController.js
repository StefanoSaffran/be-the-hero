const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = generateUniqueId();

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id });
  },

  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  },

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const ong = await connection('ongs').where('id', id).first();

    if (id !== ong_id) {
      return res.status(401).json({ error: 'Operation not permitted.' });
    }

    if (!ong) {
      return res.status(401).json({ error: 'Ong not found.' });
    }

    await connection('ongs').where('id', id).delete();

    return res.status(204).send();
  },
};
