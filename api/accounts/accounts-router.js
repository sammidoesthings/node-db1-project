const router = require('express').Router()
const md = require('./accounts-middleware')
const ACCOUNT = require('./accounts-model')

router.get('/', async (req, res, next) => {
  try {
    const accounts = await ACCOUNT.getAll()
    res.json(accounts)
  } catch (err) {
    next(err)
  }
  })

router.get('/:id', md.checkAccountId, async (req, res, next) => {
    res.json(req.account)
  })

router.post('/', md.checkAccountPayload, md.checkAccountNameUnique, (req, res, next) => {
  try {
  //add something
    res.json('post new account')

  } catch (err) {
    next(err)
  }
  })

router.put('/:id', md.checkAccountId, md.checkAccountPayload, md.checkAccountNameUnique, (req, res, next) => {
  try {
  //add something
    res.json('update account')

  } catch (err) {
    next(err)
  }
  });

router.delete('/:id', md.checkAccountId, (req, res, next) => {
  try {
  //add something
    res.json('delete account')

  } catch (err) {
    next(err)
  }
  })

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({ message: err.message })
  })

module.exports = router;
