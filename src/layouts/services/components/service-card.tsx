import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { cn } from '@/lib/utils'

import { services } from '@/constants/services'

type CardProps = React.ComponentProps<typeof Card>

function ServiceCard({ className, ...props }: CardProps) {
    const renderedServices = services.map((service, index) => (
        <Card
            className={cn('shadow-sm dark:bg-gradient-to-r dark:from-slate-800/40 dark:to-zinc-900', className)}
            {...props}
            key={service.id}
        >
            <CardHeader
                className={`mb-4 ml-6 mt-8 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-200 p-2 text-orange-500 dark:bg-orange-500 dark:text-orange-100 md:h-12 md:w-12`}
            >
                {service.icon}
            </CardHeader>
            <CardHeader>
                <CardTitle className="text-xl font-bold lg:text-2xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{service.description}</CardDescription>
            </CardContent>
        </Card>
    ))

    return <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-4">{renderedServices}</div>
}

export default ServiceCard
