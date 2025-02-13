
import InfoBox from './infoBox'

function InfoBoxes() {
  return (
    <>
     <section>
      <div className="m-auto container-xl lg:container">
        <div className="grid grid-cols-1 gap-4 p-4 rounded-lg md:grid-cols-2">
          
          <InfoBox 
          title='For Renters'
           description='Find your dream rental property. Bookmark properties and contact owners.'
           buttonInfo={{
             text:'Browse Properties',
             link:'/rentals',
             backgroundColor:'bg-black'
           }} />
          <InfoBox 
          title='For Property Owners' 
          description=' List your properties and reach potential tenants. Rent as an
              airbnb or long term.'
          backgroundColor='bg-blue-100' 
          buttonInfo={{
            text:'Add property',
            link:'/rentals',
            backgroundColor:'bg-purple-600'
          }}
          />
 
        </div>
      </div>
    </section>
    </>
  )
}

export default InfoBoxes