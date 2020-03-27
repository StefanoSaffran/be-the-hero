const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const ong_id = req.headers.authorization;

    const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .select(['incidents.*', 'ongs.city', 'ongs.uf']);

    res.header('X-Total-Count', count['count(*)']);

    /*   const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*'); */

    return res.json(incidents);
  },
};
