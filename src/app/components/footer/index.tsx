import React from 'react'
import FooterImage from 'assets/images/footer.svg'

const Footer: React.FC = () => {

  return (
    <div className='footer'>
      <img src={FooterImage} alt='Footer' />
    </div>
  )
}

export default Footer
