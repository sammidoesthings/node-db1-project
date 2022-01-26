const ACCOUNT = require('./accounts-model')


exports.checkAccountPayload = (req, res, next) => {
  const error = { status: 400 }
  const { name, budget } = req.body
  if ( name === undefined || budget === undefined ) {
    error.message = 'name and budget are required'
    next(error)
  }
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  console.log('checkAccountNameUnique middleware')
  next()
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const account = await ACCOUNT.getById(req.params.id)
    if (!account) {
      next({ status: 404, message: 'account not found'})
    } else {
      req.account = account
      next()
    }
  } catch(err) {
    next(err)
  }
}
