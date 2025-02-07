"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginForm() {
    return (
        <div className="grid min-h-screen w-full lg:grid-cols-2">
            <div className="flex items-center justify-center px-4 py-12 md:px-6">
                <div className="w-full max-w-sm space-y-6">
                    <div className="space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
                        <p className="text-sm text-muted-foreground">Enter your email below to login to your account</p>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="m@example.com" required type="email" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Button variant="link" className="px-0 font-normal" size="sm">
                                    Forgot your password?
                                </Button>
                            </div>
                            <Input id="password" required type="password" />
                        </div>
                        <Button className="w-full" type="submit">
                            Login
                        </Button>
                        <Button variant="outline" className="w-full">
                            Login with Google
                        </Button>
                        <div className="text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Button variant="link" className="px-0 font-normal" size="sm">
                                Sign up
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block">
                <div className="relative h-full w-full">
                    <Image
                        src="https://www.itl.cat/pngfile/big/298-2983461_mars-planet.jpg"
                        alt="Authentication"
                        className="object-cover"
                        fill
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

