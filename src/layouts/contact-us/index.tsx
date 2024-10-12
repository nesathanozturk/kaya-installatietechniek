import SectionHeader from '@/components/section-header'

import ContactInfoCard from './contact-info-card'

function ContactUs() {
    return (
        <SectionHeader
            sectionName="contact-opnemen"
            title="Contact Opnemen"
            subTitle="Heeft U Vragen?"
            description="Wij staan klaar om al uw vragen te beantwoorden en u te helpen met uw problemen. Neem gerust contact met ons op via telefoon, e-mail of via onze andere social media accounts."
            isCenterItems={false}
        >
            <ContactInfoCard />
        </SectionHeader>
    )
}

export default ContactUs
