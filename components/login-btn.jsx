import { useSession, signIn, signOut } from 'next-auth/react';

export default function LoginBtn() {
    const { data: session, status } = useSession();
    if (status === 'authenticated') {
        return (
            <>
                <button
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                    onClick={() => signOut()}
                >
                    Sign out
                </button>
            </>
        );
    }
    return (
        <>
            <button
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
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
