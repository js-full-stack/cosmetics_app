import ContactsList from './styledComponents'
import { ReactComponent as PhoneIcon } from '../../images/svg/phone.svg'
import { ReactComponent as PostIcon } from '../../images/svg/post.svg'

export default function Contacts() {
  return (
    <ContactsList>
      <li>
        <PostIcon />
        <a href="mailto:test@mail.com">test@mail.com</a>
      </li>
      <li>
        <PhoneIcon />
        <a href="tel:+380953919526">+38 095 391 95 26</a>
      </li>
    </ContactsList>
  )
}
