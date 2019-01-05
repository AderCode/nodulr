import { Router } from 'express';

let testData = [
    {
        test: 'Successful'
    },
    {
        test: 'Successful'
    }
];

let router = Router();

router.get('/', (req, res) => {
    res.json(testData);
});

export default router;