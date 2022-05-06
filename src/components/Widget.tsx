import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";
import { Popover } from '@headlessui/react';

export function Widget() {
    const [isWidgetOpen, setIsWidgetOpen] = useState(false)

    function toggleWidgetVisibility() {
        setIsWidgetOpen(!isWidgetOpen)
    }

    return (
        <Popover className="absolute bottom-5 right-5">
            <Popover.Panel>Hello state</Popover.Panel>
            <Popover.Button onClick={toggleWidgetVisibility}  className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className="w-6 h-6" />
                
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2">
                        Feedback
                    </span>
                </span>
            </Popover.Button>
        </Popover>
    )

}

/*
import { ChatTeardropDots } from "phosphor-react";

export function Widget() {
    return (
        <div className="absolute bottom-4 right-4">
            <button className="bg-brand-500 rounded-full px-3 h-12 text-white">
                <ChatTeardropDots className="w-6 h-6" />
            </button>
        </div>
    )
}*/