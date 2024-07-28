import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Social = () => {
  return (
    <ul className="st-social-btn st-style1 st-mp0">
      <li>
        <Link to='https://www.facebook.com/PokdarwisPantaiKelapaa?mibextid=LQQJ4d' target='_blank'>
          <Icon icon="fa6-brands:square-facebook" />
        </Link>
      </li>
      {/* <li>
        <Link to='' target='_blank'>
          <Icon icon="fa6-brands:linkedin" />
        </Link>
      </li> */}
      <li>
        <Link to='https://www.instagram.com/wisatapantaikelapa?igsh=MWxnNmVkN2cwY3pmOQ%3D%3D&utm_source=qr' target='_blank'>
          <Icon icon="fa6-brands:instagram-square" />
        </Link>
      </li>
      <li>
        <Link to='https://www.tiktok.com/@wisatapantaikelapa?_t=8oOcPbyK0gS&_r=1' target='_blank'>
          <Icon icon="fa6-brands:tiktok" />
        </Link>
      </li>
    </ul>
  )
}

export default Social;
