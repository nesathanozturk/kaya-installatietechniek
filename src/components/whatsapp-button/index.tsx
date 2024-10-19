"use client"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion } from 'framer-motion'
import { WhatsappIcon } from 'react-share'

function WhatsappButton() {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <motion.a
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="fixed bottom-7 right-10"
                        href={process.env.NEXT_PUBLIC_WHATSAPP_URL as string}
                        target="_blank"
                    >
                        <WhatsappIcon className="transition-opacity hover:opacity-80" size={50} round={true} />
                    </motion.a>
                </TooltipTrigger>
                <TooltipContent side="left" className="mr-2">
                    <p>
                        Stuur ons een bericht via WhatsApp!
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default WhatsappButton