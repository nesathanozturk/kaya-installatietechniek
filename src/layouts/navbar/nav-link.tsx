type NavLinkProps = {
    link: {
        title: string
        href: string
    }
}

function NavLink({ link }: NavLinkProps) {
    return (
        <li className="hover:bg-orange-500 dark:hover:bg-orange-600 hover:text-white rounded-md py-2 px-3 cursor-pointer transition-all text-xs xl:text-sm">
            <a href={link.href}>{link.title}</a>
        </li>
    )
}

export default NavLink
