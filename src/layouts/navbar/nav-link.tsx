type NavLinkProps = {
    link: {
        title: string
        href: string
    }
}

function NavLink({ link }: NavLinkProps) {
    return (
        <a href={link.href} rel="noreferrer">
            <li className="hover:bg-orange-500 dark:hover:bg-orange-600 hover:text-white rounded-md py-2 px-3 cursor-pointer transition-all text-xs xl:text-sm">
                {link.title}
            </li>
        </a>
    )
}

export default NavLink
