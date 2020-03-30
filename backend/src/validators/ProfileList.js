const Yup = require('yup');

module.exports = async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      authorization: Yup.string().required(),
    });

    await schema.validate(req.headers, { abortEarly: false });

    return next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: 'validation fails', messages: error.inner });
  }
};

/* celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }), */
