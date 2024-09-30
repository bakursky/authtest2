'use client'
import { signIn, signOut, useSession } from "next-auth/react"


export default function LoginWithGoogle(){

    return(
        <>
        <button 
        onClick={() => signIn('google')}
        className="bg-blue-500 text-white text-center w-full py-4 flex gap-2 justify-center">
        Sign In with Google
        </button>





    </>
    )
}