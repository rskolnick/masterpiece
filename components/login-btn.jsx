import { useSession, signIn, signOut } from 'next-auth/react';

export default function LoginBtn() {
    const { data: session, status } = useSession();
    if (status === 'authenticated') {
        return (
            <>
                Signed in as {session.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        );
    }
    return (
        <>
            Not signed in <br />
            <button
                onClick={() =>
                    signIn(undefined, {
                        callbackUrl: '/dashboard',
                    })
                }
            >
                Sign in
            </button>
        </>
    );
}
