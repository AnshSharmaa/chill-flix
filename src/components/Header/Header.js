import logo from '../../images/Netflix_Logo_RGB.png'
import { faSearch, faBell, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './header.scss'

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='Header Logo' height='50px' />
      <div className='header-pages'>
        <div>Home</div>
        <div>TV Shows</div>
        <div>Movies</div>
        <div>New & Popular</div>
        <div>My List</div>
      </div>

      {/* separates the navbar */}
      <div style={{ flex: 1 }}></div>

      <div className='utils' style={{ fontSize: '1.3em' }}>
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faBell} />

        <div className='user'>
          <div style={{ backgroundColor: '#f1f1f1', height: '32px', width: '32px', marginRight: '7px' }}></div>
          <FontAwesomeIcon icon={faSortDown} className='down-array' />
        </div>
      </div>
    </div>
  )
}

export default Header
