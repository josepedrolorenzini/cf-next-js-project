
import InfoBox from './infoBox'

function InfoBoxes() {
  return (
    <>
     <section>
      <div className="m-auto container-xl lg:container">
        <div className="grid grid-cols-1 gap-4 p-4 rounded-lg md:grid-cols-2">
          
          <InfoBox 
          title='Properties'
           description='Find your dream rental property and Skateboards supplies.'
           buttonInfo={{
             text:'Browse Properties',
             link:'/properties',
             backgroundColor:'bg-black'
           }} />
          <InfoBox 
          title='Skateboards' 
          description=' Skate shop properties'
          backgroundColor='bg-green-400' 
          buttonInfo={{
            text:'Skate shop',
            link:'/products/supabaseProducts',
            backgroundColor:'bg-cyan-600'
          }}
          />
 
        </div>
      </div>
    </section>
    </>
  )
}

export default InfoBoxes