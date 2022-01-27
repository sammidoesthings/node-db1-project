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

router.get('/:id', md.checkAccountId, async (req, res) => {
    res.json(req.account)
  })

router.post('/', md.checkAccountPayload, md.checkAccountNameUnique, async (req, res, next) => {
  try {
  const newAccount = await ACCOUNT.create({ 
    name: req.body.name.trim(), 
    budget: req.body.budget 
  })
    res.status(201).json(newAccount)
  } catch (err) {
    next(err)
  }
  })

router.put('/:id', md.checkAccountId, md.checkAccountPayload, md.checkAccountNameUnique, async (req, res, next) => {
  try {
    const updated = await ACCOUNT.updateById(req.params.id, req.body)
    res.json(updated)
  } catch (err) {
    next(err)
  }
  });

router.delete('/:id', md.checkAccountId, async (req, res, next) => {
  try {
  await ACCOUNT.deleteById(req.params.id)
    res.json(req.account)
  } catch (err) {
    next(err)
  }
  })

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({ message: err.message })
  })

module.exports = router;
