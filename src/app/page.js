import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {

const session = await getServerSession(authOptions)
const user = session?.user

// add a check to see if the account has a nickname or not
if (user){
  redirect('/account/')
}

  return (
 <Link href="/login">Go to Login Page</Link>
  )
}
