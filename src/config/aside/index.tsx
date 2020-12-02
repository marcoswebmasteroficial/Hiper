import * as Icon from 'react-icons/fa'
import * as Icon2 from 'react-icons/si'
import * as Icon3 from 'react-icons/md'


const config = [
  {
    id: 'home',
    title: 'Página Inicial',
    icon: Icon.FaHome,
    route: '/home',
    dropdown: false
  },
  {
    id: 'youtube',
    title: 'Youtube',
    icon: Icon.FaYoutube,
    route: 'youtube',
    dropdown: false
  },
  {
    id: 'crunchyroll',
    title: 'Crunchyroll',
    icon: Icon2.SiCrunchyroll,
    route: 'crunchyroll',
    dropdown: false
  },
  {
    id: 'funimation',
    title: 'Funimation',
    route: 'funimation',
    dropdown: false
  }

]
export default config
