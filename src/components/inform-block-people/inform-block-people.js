import InfoBlockPeopleData from './informPeople.json'
import './inform-block-people.scss'

function InformBlockPeople() {

   const InfoBlockPeople = InfoBlockPeopleData.map(people =>
      <div className='inform-people' key={Math.random(16)}>
         <img src={people.image} />
         <h4>{people.name}</h4>
         <p>{people.post}</p>
      </div>   
   )

  return (
      <div className="inform">
         {InfoBlockPeople}
      </div>
  )
}

export default InformBlockPeople