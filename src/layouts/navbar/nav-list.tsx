import NavLink from './nav-link'
import { menuLinks } from '@/constants/menu'

function NavList() {
    return (
        <ul className="*:text-sm *:font-semibold *:leading-8 py-3 px-2 xl:p-0 flex flex-col xl:flex-row justify-start xl:justify-center xl:items-center xl:gap-1">
            {menuLinks.map(link => (
                <NavLink key={link.title} link={link} />
            ))}
        </ul>
    )
}

export default NavList
