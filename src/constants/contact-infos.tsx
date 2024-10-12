import {
    EmailIcon,
    EmailShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    ViberIcon,
    ViberShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from 'react-share'

import CustomShareButton from '@/components/custom-share-button'
import { IconBrandInstagram, IconHome } from '@tabler/icons-react'

const handlePushAddress = (url: string) => window.open(url, '_blank')

export const contactInfos = [
    {
        icon: (
            <CustomShareButton
                backgroundColor="orange"
                onClick={() => handlePushAddress(process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL as string)}
            >
                <IconHome size={35} />
            </CustomShareButton>
        ),
        title: 'Onze Locatie',
        description: 'Leonard Springerlaan 235, 7424AA Deventer',
    },
    {
        icon: (
            <ViberShareButton url={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}>
                <ViberIcon size={40} round />
            </ViberShareButton>
        ),
        title: 'Telefoonnummer',
        description: process.env.NEXT_PUBLIC_PHONE_NUMBER,
    },
    {
        icon: (
            <EmailShareButton url={`mailto: ${process.env.NEXT_PUBLIC_EMAIL}`}>
                <EmailIcon size={40} round />
            </EmailShareButton>
        ),
        title: 'E-mailadres',
        description: process.env.NEXT_PUBLIC_EMAIL,
    },
    {
        icon: (
            <WhatsappShareButton url={process.env.NEXT_PUBLIC_WHATSAPP_URL as string}>
                <WhatsappIcon size={40} round />
            </WhatsappShareButton>
        ),
        title: 'Whatsapp',
        description: `${process.env.NEXT_PUBLIC_PHONE_NUMBER}`,
    },
    {
        icon: (
            <CustomShareButton
                backgroundColor="red"
                onClick={() => handlePushAddress(process.env.NEXT_PUBLIC_INSTAGRAM_URL as string)}
            >
                <IconBrandInstagram size={40} />
            </CustomShareButton>
        ),
        title: 'Instagram',
        description: 'kayasinstallatietechniek',
    },
    {
        icon: (
            <LinkedinShareButton url={`${process.env.NEXT_PUBLIC_LINKEDIN_URL as string}`}>
                <LinkedinIcon size={40} round />
            </LinkedinShareButton>
        ),
        title: 'Linkedin',
        description: 'Ebubekir Kaya',
    },
]
