import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '@/lib/mongodb';

const handler = NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    debug: true,
});
export { handler as GET, handler as POST };
