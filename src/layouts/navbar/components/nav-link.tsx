type NavLinkProps = {
    link: {
        title: string
        href: string
    }
}

function NavLink({ link }: NavLinkProps) {
    return (
        <a href={link.href} rel="noreferrer">
            <li className="cursor-pointer rounded-md px-3 py-2 text-sm transition-all hover:bg-orange-500 hover:text-white dark:hover:bg-orange-600">
                {link.title}
            </li>
        </a>
    )
}

export default NavLink
