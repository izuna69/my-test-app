// src/layouts/PageContainer.tsx

import React from "react";

interface PageContainerProps {
    children: React.ReactNode;
    maxWidth?: string;
}

export default function PageContainer({ children, maxWidth = "max-w-4xl" }: PageContainerProps) {
    return (
        <div className="dark min-h-screen bg-[#0f172a] pt-32 pb-24 px-4 sm:px-6 lg:px-8 text-white">
            <div className={`mx-auto ${maxWidth}`}>
                {children}
            </div>
        </div>
    );
}
