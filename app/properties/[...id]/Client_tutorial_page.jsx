'use client';
import { useRouter , useParams ,
   useSearchParams , usePathname } from "next/navigation";

function PropertyPage({params1}) {

  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();

   console.log(pathname) ;
   console.log(searchParams) ;
  // console.log(params) ;
  // console.log(router) ;

  return (
    <>
    <div>Property Page {params.id}  , hello {searchParams.get("name")}</div>
    {/* <button onClick={() => router.push('/')}>Go to Homepage</button> */}
    <button onClick={() => router.replace('/')}>Go to Homepage</button>
    </>
  )
}

export default PropertyPage
