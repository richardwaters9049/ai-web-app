"use client"
import React from "react";
import { Vortex } from "../components/ui/vortex";
import { Button } from '@/components/ui/button';


export function VortexDemo() {
    return (
        <div className="h-screen overflow-hidden">
            <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={500}
                baseHue={220}
                className="flex items-center justify-center gap-4 p-2 md:p-10 h-full"
            >
                <div className="inner-container flex flex-col gap-10 items-center justify-center w-full h-full">
                    <h2 className="text-9xl font-semibold text-center text-white tracking-widest my-10">
                        LyrAI
                    </h2>
                    <Button className="text-white text-2xl tracking-widest bg-gradient-to-t from-purple-800 to-blue-800 p-10 rounded-xl">ENTER</Button>
                </div>

            </Vortex>
        </div>
    );
}

export default VortexDemo;
