import { cn } from '@/lib/utils'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { services } from '@/constants/services'

type CardProps = React.ComponentProps<typeof Card>

function ServiceCard({ className, ...props }: CardProps) {
    const renderedServices = services.map(service => (
        <Card
            className={cn('shadow-sm dark:bg-gradient-to-r dark:from-slate-800/40 dark:to-zinc-900', className)}
            {...props}
            key={service.id}
        >
            <CardHeader
                className={`bg-orange-200 text-orange-500 dark:text-orange-100 dark:bg-orange-500 w-10 h-10 md:w-12 md:h-12 flex justify-center items-center p-2 rounded-lg ml-6 mt-8 mb-4`}
            >
                {service.icon}
            </CardHeader>
            <CardHeader>
                <CardTitle className="font-bold text-xl lg:text-2xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{service.description}</CardDescription>
            </CardContent>
        </Card>
    ))

    return <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-4">{renderedServices}</div>
}

export default ServiceCard
