import express  from 'express';

const router = express.Router();

// router.get('/users', users.list);
// router.post('/users', users.add);
// router.get('/users/:id', users.get);
// router.put('/users/:id', users.update);
// router.delete('/users/:id', users.delete);

// router.get('/pins', pins.list);
// router.post('/pins', pins.add);
// router.get('/pins/:id', pins.get);
// router.put('/pins/:id', pins.update);
// router.delete('/pins/:id', pins.delete);

router.get('/status', function(req, res) {
    res.send("OK");
});

export default router;

