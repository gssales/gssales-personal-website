
import { useTranslation } from 'react-i18next';

import './Nav.scss'
import utils from '../../utils';

function Nav() {
  const { t, i18n } = useTranslation();
  const anchors = utils.getTranslationArray(t('navigation', { returnObjects: true }))
    .filter(a => a.id === "about-me" || a.id === "interests")

  return (
    <nav>
      <ul className="container mx-auto flex justify-around lg:justify-end gap-10">
        { anchors.map( a => 
          <li key={a.id}>
            <a href={`#${a.id}`}>{a.descr}</a>
          </li>) }
      </ul>
    </nav>
  )
}


export default Nav