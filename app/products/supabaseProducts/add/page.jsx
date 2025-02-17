 "use client";
import SkateboardAddForm from '@/components/SkateboardAddForm'

function page() {




  return (
    <>
    <section className='bg-blue-50'>
      <div className='container max-w-2xl py-24 m-auto'>
        <div className='px-6 py-8 m-4 mb-4 bg-white border rounded-md shadow-md md:m-0'>
        <SkateboardAddForm />
        </div>
      </div>
    </section>
   
    </>
  )
}

export default page