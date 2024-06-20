import Link from "next/link"

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
        Welcome to Commerce Tools - NextJS API Tester
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/apitester"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            prefetch={false}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}