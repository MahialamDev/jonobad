import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

const user = { id: 1, name: "Mahialam", email: 'rahat@gmail.com', password: '4645445', role: 'user'}

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    
        // ...add more providers here
      CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Credentials',
  
    // credentials: {
    //   username: { label: "Username", type: "text", placeholder: "jsmith" },
    //   password: { label: "Password", type: "password" }
    // },
    async authorize(credentials, req) {
    
        return user;
      
    }
  })
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };