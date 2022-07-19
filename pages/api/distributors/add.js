import { connect } from 'mongoose';
import Distributor from '../../../models/Distributor'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function addDistributor(req, res) {
    try {
        await connect(process.env.MONGODB_URI);
        const uniqueDistributor = await Distributor.findOne({ name: req.body.name });
        if (uniqueDistributor && req.body.icon !== 'edit') {
            return res.status(400).send({ error: 'Distributor already exists' });
        } else {
            const distributor = await Distributor.create(req.body);
            res.json({ distributor });
            
        }
        
    } catch (e) {
        console.log(e);
        res.json({ e });
    }
}
