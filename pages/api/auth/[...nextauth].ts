import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      //   authorize: function (credentials: Record<"username" | "password", string> | undefined, req: Pick<RequestInternal, "body" | "query" | "headers" | "method">): Awaitable<User | null> {
      //     throw new Error("Function not implemented.");
      // }
      async authorize(credentials: any, req: any): Promise<any | null> {
        const user = await Promise.resolve({ username: "", password: "" });

        if (user) return user;

        return null;
      },
    }),
  ],
};
export default NextAuth(authOptions);
