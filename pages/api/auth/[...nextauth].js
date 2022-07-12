import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoClient } from 'mongodb';
import { connect } from 'mongoose';
import User from '../../../models/User';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'johndoe@test.com',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                },
            },
            async authorize(credentials, req) {
                // Logic to check the database
                const email = credentials.email;
                const password = credentials.password;
                await connect(process.env.MONGODB_URI);
                const user = await User.findOne({ email: email });

                // const user = await db
                //     .collection('users')
                //     .findOne({ email: email });

                // hash credentials.password and compare to db.user.password

                if (user && user.password === password) {
                    // Any object returned will be saved in `user` property of the JWT
                    // Make sure the password is NOT being sent: COMPLETED
                    const JWTuser = {
                        name: user.first_name,
                        email: user.email,
                        role: user.role,
                    };
                    return JWTuser;
                } else {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token }) {
            const user = await User.findOne({ email: token.email });
            token.role = user.role;
            return token;
        },
        async session({ session, token, user }) {
            if (token) {
                session.name = token.name;
                session.email = token.email;
                session.role = token.role;
            }
            return session;
        },
    },
});
