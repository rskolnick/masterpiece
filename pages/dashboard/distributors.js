import { useSession } from 'next-auth/react';
import Navbar from '../../components/navbar';
import List from '../../components/list';
import { connect } from 'mongoose';
import Distributor from '../../models/Distributor';
import NoPermission from '../../components/noPermission'

export default function Dashboard({ distributors }) {
    const { data: session, status } = useSession();

    if (status === 'authenticated' && session.role === 'ADMIN') {
        return (
            <div>
                <Navbar />
                <List users={distributors} />
                <p>Signed in as {session.email}</p>
            </div>
        );
    }

    return <NoPermission />;
}

export async function getServerSideProps(context) {
    await connect(process.env.MONGODB_URI);
    const data = await Distributor.find();
    const distributors = data.map((distributor) => {
        return {
            name: distributor.name,
            territory: distributor.territory,
            location: distributor.location,
            credit_status: distributor.credit_status,
            balance: distributor.balance,
        };
    });

    return {
        props: {
            distributors,
        },
    };
}
