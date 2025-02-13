"use client"
import { useParams } from 'next/navigation';
import React from 'react'
import { signIn , signOut , useSession , getProviders } from 'next-auth/react';

function page({user}) {
    const { user: paramUser } = useParams(); // Extract user from params
    const username = user || paramUser; // Use prop if available, else use param
     console.log(username);
    //  const { data:session } = useSession();
    // const profileImage = session?.user?.image;
    // console.log(session);
     
  return (
    <>
    <section className='bg-blue-50'>
      <div className='container max-w-2xl py-24 m-auto'>
        <div className='px-6 py-8 m-4 mb-4 bg-white border rounded-md shadow-md md:m-0'>
          {/* hello {user && session.user.name} */}
          welcome
        </div>
      </div>
    </section>
    </>
  )
}

export default page