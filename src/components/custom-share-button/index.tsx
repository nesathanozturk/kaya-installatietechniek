import { Button } from '../ui/button'
import { PropsWithChildren } from 'react'

type CustomShareButtonProps = PropsWithChildren & {
    backgroundColor?: string
    platform?: string
    onClick?: () => void
}

const INSTAGRAM_GRADIENT = 'bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]'
const LOCATION_GRADIENT = 'bg-gradient-to-r from-[#f12711] to-[#f5af19]'

function CustomShareButton({ children, platform, onClick }: CustomShareButtonProps) {
    const backgroundColor =
        platform === 'instagram'
            ? `${INSTAGRAM_GRADIENT} hover:${INSTAGRAM_GRADIENT}`
            : `${LOCATION_GRADIENT} hover:${LOCATION_GRADIENT}`

    return (
        <Button className={`h-10 w-10 rounded-full p-[6px] ${backgroundColor}`} onClick={onClick}>
            {children}
        </Button>
    )
}

export default CustomShareButton
