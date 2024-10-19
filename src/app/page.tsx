import ContactUs from '@/layouts/contact-us'
import HeroSection from '@/layouts/hero'
import Jobs from '@/layouts/jobs'
import Services from '@/layouts/services'
import Testimonials from '@/layouts/testimonials'

export default function Home() {
    return (
        <main className="container relative mx-auto flex min-h-screen flex-col space-y-24">
            <HeroSection />
            <Services />
            <Jobs />
            <Testimonials />
            <ContactUs />
        </main>
    )
}
