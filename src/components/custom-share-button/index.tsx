import { PropsWithChildren } from 'react'
import { Button } from '../ui/button'

type CustomShareButtonProps = PropsWithChildren & {
    backgroundColor?: string
    platform?: string
    onClick?: () => void
}

function CustomShareButton({ children, platform, onClick }: CustomShareButtonProps) {
    return (
        <Button className={`rounded-full w-10 h-10 p-[6px] ${platform === "instagram" ? "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" : 'bg-orange-500'}`} onClick={onClick}>
            {children}
        </Button>
    )
}

export default CustomShareButton
