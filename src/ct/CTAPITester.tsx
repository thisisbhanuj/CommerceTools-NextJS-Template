"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { fetchProjects } from "@/utils/ct-sdk/serverCalls"

export default function Component() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<React.ReactNode | null>(null)
  const fetchData = async () => {
    setLoading(true)
    try {
      const data = await fetchProjects();
      setData(data);
    } catch (error) {
      setError(error?.message ?? 'Error occurred while fetching data')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-background">
      <div className="max-w-md w-full space-y-4 px-4 md:px-0">
        <h1 className="text-3xl font-bold text-primary">Fetch Data</h1>
        <p className="text-muted-foreground">Click the button below to fetch data from the backend.</p>
        <Button onClick={fetchData} className="w-full" disabled={loading}>
          {loading ? "Loading..." : "Fetch Data"}
        </Button>
        {error && <div className="bg-red-500 text-red-50 p-4 rounded-md">{error}</div>}
        {data && (
          <Card className="w-full">
            <CardHeader>
              <CardTitle>API Response</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="whitespace-pre-wrap break-words">{JSON.stringify(data, null, 2)}</pre>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  )
}