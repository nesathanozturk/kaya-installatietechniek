import SectionHeader from '@/components/section-header'
import { JobsCarousel } from './jobs-carousel'

function Jobs() {
    return (
        <SectionHeader
            sectionName="onze-werkzaamheden"
            title="Onze Werkzaamheden"
            subTitle="Wat Hebben We Gedaan?"
            description="Ontdek de betrouwbare en hoogwaardige installatieprojecten die we met jarenlange ervaring hebben voltooid. Bekijk de foto's van onze diensten die getuigen van de tevredenheid van onze klanten en ons vakmanschap."
        >
            <JobsCarousel />
        </SectionHeader>
    )
}

export default Jobs
