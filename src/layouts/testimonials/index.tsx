import Reviews from '@/components/reviews'
import SectionHeader from '@/components/section-header'

function Testimonials() {
    return (
        <SectionHeader
            sectionName="getuigenissen"
            title="Getuigenissen"
            subTitle="Wat zeggen klanten over onze prestaties?"
            description="Lees de ervaringen van onze klanten. We zijn trots op de positieve feedback die we hebben ontvangen voor onze betrouwbare, professionele en snelle dienstverlening."
        >
            <Reviews />
        </SectionHeader>
    )
}

export default Testimonials
