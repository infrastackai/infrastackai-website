import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex-grow">
            <div className="mt-[150px] mb-[100px]  mx-auto flex flex-col items-center gap-3">
                <p className="text-center font-semibold text-4xl md:text-5xl  bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
                    Media resources
                </p>
                <p className="text-muted-foreground sm:text-lg font-[family-name:var(--font-geist-mono)] w-[90%] md:w-[50%] text-center">
                    Press and partners can access our logos, videos, screenshots, and brand assets for editorial and promotional use. For specific requests, contact us.
                </p>
                <div className="mt-16"></div>
                <p className="text-center font-semibold text-3xl md:text-4xl  bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
                    Logo
                </p>
                <div className="mt-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-black p-4 rounded-lg">
                        <Image src="/logo/logo-white.svg" alt="logo" height={100} width={100} />
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <Image src="/logo/logo-violet.svg" alt="logo" height={100} width={100} />
                    </div>
                </div>
                <div className="border-b border-dashed border-border md:w-[30%] w-[80%] mt-4 mb-4" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-black p-4 rounded-lg">
                        <Image src="/logo/logo-big-black-bg.svg" alt="logo" height={80} width={240} />
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <Image src="/logo/logo-big-white-bg.svg" alt="logo" height={80} width={240} />
                    </div>
                    <div className="bg-black p-4 rounded-lg">
                        <Image src="/logo/logo-big-violet-black-bg.svg" alt="logo" height={80} width={240} />
                    </div>
                </div>
                <div className="h-4"></div>
        <Link
          href={`/media-kit.zip`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-500 flex items-center justify-start text-lg font-[family-name:var(--font-geist-sans)] hover:underline "
        >
          Download our media kit <ArrowUpRight className="h-6 w-6 inline" />
        </Link>
            </div>
        </div>
    )
}