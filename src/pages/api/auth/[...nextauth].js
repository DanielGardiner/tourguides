import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import EmailProvider from "next-auth/providers/email";
import prisma from "../../../server/prismaClient";

const options = {
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  pages: {
    signIn: "/signin",
    verifyRequest: "/verify", // (used for check email message)
  },
  callbacks: {
    session: async (session) => {
      if (!session) return;

      const user = await prisma.user.findUnique({
        where: { id: session?.user?.id },
      });

      return {
        name: user?.name,
        email: user?.email,
        role: user?.role,
      };
    },
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
};

const authHandler = (req, res) => NextAuth(req, res, options);

export default authHandler;
