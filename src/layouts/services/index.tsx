'use client'

import { motion } from 'framer-motion'

import SectionHeader from '@/components/section-header'

import ServiceCard from './components/service-card'

function Services() {
    return (
        <SectionHeader
            sectionName="diensten"
            title="Onze Diensten"
            subTitle="Wat Bieden Wij U Aan?"
            description="Als een gespecialiseerde vakman bied ik hoogwaardige en betrouwbare loodgietersdiensten. Van kleine reparaties tot grotere installaties, zorg ik ervoor dat alles efficiënt en met aandacht voor detail wordt uitgevoerd."
            isCenterItems={false}
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: 30,
                }}
                whileInView={{
                    opacity: 1,
                    y: -10,
                    transition: {
                        duration: 0.5,
                        delay: 0.3,
                    },
                }}
                viewport={{ once: true }}
            >
                <ServiceCard />
            </motion.div>
        </SectionHeader>
    )
}

export default Services
