import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import { HashLink as Link } from 'react-router-hash-link';
import { Box } from "@mui/material";
import { info } from "../info/Info";
import { singlePage } from '../info/Info';

const links = [
  // {
  //   name: info.initials,
  //   type: 'initials',
  //   to: '',
  //   active: 'home'
  // },
  {
    name: 'Home',
    to: '',
    active: 'home'
  },
  {
    name: 'Create',
    to: 'create',
    active: 'create'
  },
  {
    name: 'View',
    to: 'view',
    active: 'view'
  },
]

// This function is used to create a scroll offset to compensate for the navbar
// when you click on the nav buttons to scroll down.
const scrollWidthOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}


export default function Navbar({ darkMode, handleClick, active, setActive }) {

  return (
    <Box component={'nav'} width={'100%'} position={singlePage ? 'fixed' : 'relative'} className={darkMode ? Style.dark : Style.light}>
      <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
        gap={{ xs: '2rem', md: '8rem' }}
        textTransform={'lowercase'} fontSize={'1rem'}>
        {links.map((link, index) => (
          <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
            sx={{ borderImageSource: info.gradient }}>
            <Link to={singlePage ? `#${link.to}` : `/${link.to}`}
              scroll={el => scrollWidthOffset(el)}
              smooth
              onClick={() => setActive(link.active)} className={Style.link}>
              {!link.type && <p style={{ padding: '0.5rem 0' }}>{link.name}</p>}
              {link.type && <h1>{link.name}</h1>}
            </Link>
          </Box>
        ))}
        <li>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </Box>
    </Box>
  )
}