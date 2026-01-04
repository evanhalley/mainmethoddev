import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-2xl w-full text-center sm:text-left">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter text-foreground">
            MainMethod.dev
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            We build <span className="text-foreground font-medium">web</span> and{" "}
            <span className="text-foreground font-medium">mobile</span> products
            for niche groups and audiences.
          </p>
        </div>

        <Separator className="my-4" />

        <div className="grid gap-4 sm:grid-cols-2 w-full">
           <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
            <CardContent className="p-6 space-y-2">
              <h3 className="font-semibold text-lg">Web Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Scalable, high-performance web applications tailored to your specific needs.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
            <CardContent className="p-6 space-y-2">
               <h3 className="font-semibold text-lg">Mobile Products</h3>
               <p className="text-sm text-muted-foreground">
                 Native and cross-platform mobile experiences that engage users.
               </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row w-full justify-center sm:justify-start pt-4">
          <Button asChild size="lg" className="rounded-full">
            <Link href="mailto:evan@mainmethod.dev">
              Contact Us
            </Link>
          </Button>
        </div>
      </main>
      
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center mt-16 text-sm text-muted-foreground">
         <p>&copy; {new Date().getFullYear()} MainMethod.dev LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
