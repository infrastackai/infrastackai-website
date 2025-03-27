'use client'

import { useEffect, useState } from 'react'
import {
    Activity, ArrowRight, Blocks, BotMessageSquare,
    Check,
    CircleEllipsis,
    Cog,
    Gauge,
    GlobeLock, HandHeart, Layers, Loader2, Receipt, Send, SendHorizonal, Telescope
} from "lucide-react"
import { useForm } from "react-hook-form"
import { useFormStatus } from 'react-dom'
import { zodResolver } from "@hookform/resolvers/zod"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from '@/components/ui/button'
// import {  } from '@/app/actions'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { requestEarlyAccessSchema } from '@/lib/schemas'
import { submitRequestEarlyAccess } from '@/app/actions'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { infrastackToast } from '@/lib/ui-utils'

function Submit() {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" disabled={pending} className="infrastack-button w-full">
            {!pending ? <>Submit <Check className="inline" /></> : <>Submit <Loader2 className="inline animate-spin" /></>}
        </Button>
    )
}

export default function Client() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const stepQVal = searchParams.get('submit')

    function setSearchParams(newParams: any) {
        const params = new URLSearchParams(searchParams);
        for (const key in { ...searchParams, ...newParams }) {
            params.set(key, newParams[key]);
        }
        const newSearchParams = params.toString();
        router.replace(`${pathname}?${newSearchParams}`)
    }


    const form = useForm<z.infer<typeof requestEarlyAccessSchema>>({
        resolver: zodResolver(requestEarlyAccessSchema),
        defaultValues: {
            name: '',
            email: '',
            problem: '',
        },
    })
    const [selectedCases, setSelectedCases] = useState<Set<string>>(new Set())

    const toggleUseCase = (useCase: string) => {
        setSelectedCases(prev => {
            const newSet = new Set(prev)
            if (newSet.has(useCase)) {
                newSet.delete(useCase)
            } else {
                newSet.add(useCase)
            }
            return newSet
        })
    }

    const onSubmit = async (data: z.infer<typeof requestEarlyAccessSchema>) => {
        try {
            // Convert Set to Array for submission
            const useCases = Array.from(selectedCases)

            // Include the selected use cases with the form data
            const formData = {
                ...data,
                focus: useCases
            }

            const res = await submitRequestEarlyAccess(formData)
            if (res.success) {
                setSearchParams({ submit: true })
            } else {
                infrastackToast('error', 'Something went wrong!', 3000)
            }
        } catch (error) {
            infrastackToast('error', 'Something went wrong!', 3000)
        }
    }

    if (stepQVal) {
        return <div className='flex flex-col flex-grow items-center justify-center '>
            <div className='text-3xl font-bold'>Thanks!</div>
            <div className='text-muted-foreground text-center'>
                We’ve received your request and will be in touch soon.
            </div>
        </div>
    }

    return <div className="flex flex-col space-y-4 border shadow-xl rounded-2xl md:min-w-[600px]">
        <div className="p-6 pb-4 space-y-2 border-b">
            <div className="flex flex-col items-center space-y-3 text-center">
                <div className='text-3xl font-bold'>Request early access</div>
            </div>
            <div className='text-muted-foreground text-center'>
                Help us understand your specific needs by filling in the details below
            </div>
        </div>
        <Form {...form}>
            <form action={form.handleSubmit(onSubmit)} className="space-y-8">

                <div className='grid grid-col-1 md:grid-col-2 gap-2 p-6 pt-2 pb-2'>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Name
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Work email
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Work email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className='grid gap-2'>
                    <div className='pl-6'>
                        <Label className=''>Select focus areas</Label>
                    </div>
                    <div>
                        <div className="p-6 pt-0 pb-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div onClick={() => toggleUseCase('infrastructure')} className="hover:bg-secondary/30 cursor-pointer w-full h-fit border p-2 pr-3 pl-3 justify-center flex flex-col rounded-xl">
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-row space-x-2 items-center">
                                        <Layers className="w-5 h-5" />
                                        <span>Infrastructure</span>
                                    </div>
                                    <div
                                        className="w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors"
                                    >
                                        {selectedCases.has('infrastructure') && (
                                            <svg className="w-3 h-3 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => toggleUseCase('sre')} className="hover:bg-secondary/30 cursor-pointer w-full h-fit border p-2 pr-3 pl-3 justify-center flex flex-col rounded-xl">
                                <div className="flex justify-between items-center">
                                    <div className=" flex flex-row space-x-2 items-center">
                                        <Activity className="w-5 h-5" />
                                        <span>SRE</span>
                                    </div>
                                    <div
                                        className="w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors"
                                    >
                                        {selectedCases.has('sre') && (
                                            <svg className="w-3 h-3 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => toggleUseCase('devops')} className="hover:bg-secondary/30 cursor-pointer  w-full h-fit border p-2 pr-3 pl-3 justify-center flex flex-col rounded-xl">
                                <div className="flex justify-between items-center">
                                    <div className=" flex flex-row space-x-2 items-center">
                                        <Cog className="w-5 h-5" />
                                        <span>DevOps</span>
                                    </div>
                                    <div
                                        className="w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors"
                                    >
                                        {selectedCases.has('devops') && (
                                            <svg className="w-3 h-3 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => toggleUseCase('secops')} className="hover:bg-secondary/30 cursor-pointer  w-full h-fit border p-2 pr-3 pl-3 justify-center flex flex-col rounded-xl">
                                <div className="flex justify-between items-center">
                                    <div className=" flex flex-row space-x-2 items-center">
                                        <HandHeart className="w-5 h-5" />
                                        <span>SecOps</span>
                                    </div>
                                    <div
                                        className="w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors"
                                    >
                                        {selectedCases.has('secops') && (
                                            <svg className="w-3 h-3 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => toggleUseCase('finops')} className="hover:bg-secondary/30 cursor-pointer  w-full h-fit border p-2 pr-3 pl-3 justify-center flex flex-col rounded-xl">
                                <div className="flex justify-between items-center">
                                    <div className=" flex flex-row space-x-2 items-center">
                                        <HandHeart className="w-5 h-5" />
                                        <span>FinOps</span>
                                    </div>
                                    <div
                                        className="w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors"
                                    >
                                        {selectedCases.has('finops') && (
                                            <svg className="w-3 h-3 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => toggleUseCase('productivity')} className="hover:bg-secondary/30 cursor-pointer  w-full h-fit border p-2 pr-3 pl-3 justify-center flex flex-col rounded-xl">
                                <div className="flex justify-between items-center">
                                    <div className=" flex flex-row space-x-2 items-center">
                                        <Gauge className="w-5 h-5" />
                                        <span>Productivity</span>
                                    </div>
                                    <div
                                        className="w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors"
                                    >
                                        {selectedCases.has('productivity') && (
                                            <svg className="w-3 h-3 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        {/* <p className="text-muted-foreground text-center">
            What problem are you trying to solve?
            </p> */}
                        <div></div>
                        <div className='p-6  flex-col flex gap-2'>
                            <FormField
                                control={form.control}
                                name="problem"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="problem">What problem are you trying to solve?</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                id='problem'
                                                rows={3}
                                                placeholder="Example: Extracting insights from logs, investigating alerts, automating security checks, optimizing cloud costs, etc."
                                                className='rounded-xl text-base'
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className='h-4'></div>
                            <div className="flex flex-row space-x-2">
                                <Submit />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Form>
    </div>
}