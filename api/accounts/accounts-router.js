const router = require('express').Router()

router.get('/', (req, res, next) => {
  try {
  //add something
    res.json('get accounts')
  } catch (err) {
    next(err)
  }
  })

router.get('/:id', (req, res, next) => {
  try {
  //add something
    res.json('get account by id')
  } catch (err) {
    next(err)
  }
  })

router.post('/', (req, res, next) => {
  try {
  //add something
    res.json('post new account')

  } catch (err) {
    next(err)
  }
  })

router.put('/:id', (req, res, next) => {
  try {
  //add something
    res.json('update account')

  } catch (err) {
    next(err)
  }
  });

router.delete('/:id', (req, res, next) => {
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
