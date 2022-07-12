import { useSession } from 'next-auth/react';
import Navbar from '../../components/navbar';
import List from '../../components/list';
import { connect } from 'mongoose';
import User from '../../models/User';

export default function Dashboard({ users }) {
    const { data: session, status } = useSession();

    if (status === 'authenticated' && session.role === 'ADMIN') {
        return (
            <div>
                <Navbar />
                <List users={users} />
                <p>Signed in as {session.email}</p>
            </div>
        );
    }

    return <a href="/api/auth/signin">You cannot access this page</a>;
}

export async function getServerSideProps(context) {
    await connect(process.env.MONGODB_URI);
    const data = await User.find();
    const users = data.map((user) => {
        return {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            work_phone: user.work_phone,
            cell_phone: user.cell_phone,
            active: user.active.toString().toUpperCase(),
            role: user.role,
        };
    });

    return {
        props: {
            users,
        },
    };
}
