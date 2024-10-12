import { Button } from '../ui/button'
import { PropsWithChildren } from 'react'

type CustomShareButtonProps = PropsWithChildren & {
    backgroundColor?: string
    onClick?: () => void
}

function CustomShareButton({ children, backgroundColor, onClick }: CustomShareButtonProps) {
    return (
        <Button
            className={`rounded-full w-10 h-10 p-[6px] bg-orange-500`}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

export default CustomShareButton
