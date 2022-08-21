import InformBlockService from '../../components/inform-block-service/Inform-block-servise'
import InformBlockPeople from '../../components/inform-block-people/inform-block-people'
import './Inform-block.scss'

function InformBlock() {
  return (
    <div className='inform-block'>
      <InformBlockService />
      <h4 className='inform__title'>Top Freelancers</h4>
      <InformBlockPeople />
    </div>
  )
}

export default InformBlock