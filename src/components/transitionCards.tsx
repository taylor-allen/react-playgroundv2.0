"use client"

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";
import { Tutorial } from "@/types";
import { Step } from "@/types";

interface TransitionCardsProps {
    tutorial: Tutorial;
}

export default function TransitionCards({ tutorial }: TransitionCardsProps) {
    const [selectedTab, setSelectedTab] = useState<Step>(tutorial?.steps[0]);

    return (
        <div className="w-3/4 m-12 border-2 rounded-lg bg-white shadow-lg flex flex-col overflow-hidden">
            <h1 className="text-xl font-bold p-4">{tutorial.name}</h1>
            <nav className="bg-gray-50 p-1 border-b border-gray-200 rounded-t-lg">
                <ul className="flex w-full">
                    {tutorial?.steps.map((item, index) => (
                        <motion.li
                            key={tutorial.name + index}
                            initial={false}
                            animate={{
                                backgroundColor: item.title === selectedTab.title ? "#eee" : "#eee0",
                            }}
                            className="flex-1 p-4 cursor-pointer flex justify-between items-center text-gray-900 relative rounded-t-lg"
                            onClick={() => setSelectedTab(item)}
                        >
                            {item.title} {item.icon}
                            {item.title === selectedTab.title ? (
                                <motion.div
                                    className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-blue-500"
                                    layoutId="underline"
                                    id="underline"
                                />
                            ) : null}
                        </motion.li>
                    ))}
                </ul>
            </nav>
            <main className="flex justify-center items-center flex-1 p-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab ? selectedTab.title : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-lg"
                    >
                        {selectedTab ? selectedTab.description : "No description available"}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}
