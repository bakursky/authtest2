import { getServerSession } from "next-auth";
import LoginWithGoogle from "../components/buttons/LoginWithGoogle";
import { authOptions } from "../api/auth/[...nextauth]/route.js";
import Logout from "../components/buttons/Logout";

export  default async function LoginPage(){
    const session = await getServerSession(authOptions)
    
    return(
<>
        <LoginWithGoogle />

        {!session &&(
    <p>You're not log in!</p>
)}

        {!!session &&(
            <p>Hello, {session?.user?.name}. Now you can {<Logout />}</p>
        )}

    </>
    )

}