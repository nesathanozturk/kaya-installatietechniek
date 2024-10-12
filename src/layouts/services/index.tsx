import SectionHeader from '@/components/section-header'

import ServiceCard from './service-card'

function Services() {
    return (
        <SectionHeader
            sectionName="diensten"
            title="Onze Diensten"
            subTitle="Wat Bieden Wij U Aan?"
            description="Als een gespecialiseerde vakman bied ik hoogwaardige en betrouwbare loodgietersdiensten. Van kleine reparaties tot grotere installaties, zorg ik ervoor dat alles efficiënt en met aandacht voor detail wordt uitgevoerd."
            isCenterItems={false}
        >
            <ServiceCard />
        </SectionHeader>
    )
}

export default Services
