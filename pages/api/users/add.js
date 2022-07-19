import { connect } from 'mongoose';
import User from '../../../models/User';
import { CourierClient } from '@trycourier/courier';

const courier = CourierClient({ authorizationToken: process.env.COURIER_API });
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function addUser(req, res) {
    try {
        await connect(process.env.MONGODB_URI);
        req.body.password = makeId(9);
        const uniqueUser = await User.findOne({ email: req.body.email });
        if (uniqueUser && req.body.icon !== 'edit') {
            return res.status(400).send({ error: 'Email already exists' });
        } else if (uniqueUser && req.body.icon === 'edit') {
            uniqueUser.first_name = req.body.first_name;
            uniqueUser.last_name = req.body.last_name;
            uniqueUser.role = req.body.role;
            uniqueUser.work_phone = req.body.work_phone;
            uniqueUser.cell_phone = req.body.cell_phone;
            await uniqueUser.save();
            res.json({ uniqueUser });
        } else {
            const user = await User.create(req.body);
            const { requestId } = await courier.send({
                message: {
                    to: req.body.email,
                    template: 'WTDN3XY364MCHDKVSMXCQBTWSG2V',
                    data: {
                        variables: {
                            name: req.body.first_name,
                            password: req.body.password,
                        },
                    },
                },
            });
            res.json({ user });
        }
    } catch (e) {
        console.log(e);
        res.json({ e });
    }
}

function makeId(length) {
    var result = '';
    var characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return result;
}
