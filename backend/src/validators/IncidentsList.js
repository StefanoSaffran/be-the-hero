const Yup = require('yup');

module.exports = async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      page: Yup.number(),
    });

    await schema.validate(req.query, { abortEarly: false });

    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: 'validation fails', messages: error.inner });
  }
};
