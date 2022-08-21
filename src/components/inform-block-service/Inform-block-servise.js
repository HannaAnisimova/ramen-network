import InfoBlockServiceData from './informService.json'
import './inform-block-service.scss'

function InformBlockService() {

   const InfoBlockService = InfoBlockServiceData.map(info =>
      <div className='inform-service' key={Math.random(16)}>
         <img className='inform-service__image' src={info.image} />
         <h4 className='inform-service__title'>{info.title}</h4>
         <p className='inform-service__text'>{info.text}</p>
      </div>   
   )
  return (
   <div className="inform">
      {InfoBlockService}
   </div>
  )
}

export default InformBlockService