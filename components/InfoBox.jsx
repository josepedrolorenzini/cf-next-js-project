

function InfoBox({ 
    title , 
    description , 
    backgroundColor='bg-gray-100' , 
    textColor='text-gray' ,
    buttonInfo
}) {
  return (
    <>
           <div className={`${backgroundColor} p-6  rounded-lg shadow-md`}>
            <h2 className={`${textColor} text-2xl  font-bold`}>{title}</h2>
            <p
             className="mt-2 mb-4">
                {description}
            </p>
            <a
              href={buttonInfo.link}
              className={`${buttonInfo.backgroundColor} inline-block px-4 py-2 text-white rounded-lg hover:bg-gray-700`}
            >
              {buttonInfo.text}
            </a>
          </div>
    </>
  )
}

export default InfoBox