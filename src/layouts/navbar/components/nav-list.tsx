import NavLink from './nav-link'
import { menuLinks } from '@/constants/menu'

function NavList() {
    return (
        <ul className="flex flex-col justify-start px-2 py-3 *:text-sm *:font-semibold *:leading-8 xl:flex-row xl:items-center xl:justify-center xl:gap-1 xl:p-0">
            {menuLinks.map(link => (
                <NavLink key={link.title} link={link} />
            ))}
        </ul>
    )
}

export default NavList
