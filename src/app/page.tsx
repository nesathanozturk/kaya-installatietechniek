import ContactUs from '@/layouts/contact-us'
import HeroSection from '@/layouts/hero'
import Jobs from '@/layouts/jobs'
import Services from '@/layouts/services'
import Testimonials from '@/layouts/testimonials'

export default function Home() {
    return (
        <main className="min-h-screen container mx-auto flex flex-col space-y-24 relative">
            <HeroSection />
            <Services />
            <Jobs />
            <Testimonials />
            <ContactUs />
        </main>
    )
}
