'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Eye, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Post } from "@/app/libs/definitions";

interface PantipPickClientProps {
    initialTopics: Post[];
}

export default function PantipPickClient({ initialTopics }: PantipPickClientProps) {
    const [visibleCount, setVisibleCount] = useState(2);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768; // Assuming 768px as the breakpoint
            setIsMobile(mobile);
            setVisibleCount(mobile ? 2 : 3);
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = new Intl.DateTimeFormat('th-TH', { month: 'short' }).format(date);
        return `${day} ${month}`;
    };

    const handleShowMore = () => {
        setVisibleCount(prevCount => Math.min(prevCount + (isMobile ? 2 : 3), initialTopics.length));
    };

    const handleShowLess = () => {
        setVisibleCount(isMobile ? 2 : 3);
    };

    return (
        <>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
                {initialTopics.slice(0, visibleCount).map((topic) => (
                    <Link key={topic.topic_id} href={'/'}>
                        <div className="rounded-xl border shadow-sm hover:bg-gray-100 hover:cursor-pointer transition-colors duration-200">
                            <div className="relative w-full pt-[75%]">
                                {topic.thumbnail_url ? (
                                    <Image
                                        className="rounded-t-xl object-cover"
                                        src={topic.thumbnail_url}
                                        alt={`image of ${topic.title}`}
                                        layout="fill"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-gray-200 flex justify-center items-center">
                                        <p className="text-center p-2 text-sm">{topic.title}</p>
                                    </div>
                                )}
                            </div>
                            <div className="p-3">
                                <h4 className="mb-2 font-semibold text-sm line-clamp-2">{topic.title}</h4>
                                <div className="flex justify-between text-xs text-gray-500">
                                    <span className="flex items-center truncate mr-2">
                                        {topic.author.name}
                                    </span>
                                    <span className="flex items-center flex-shrink-0">
                                        {formatDate(topic.created_time)}
                                    </span>
                                </div>
                                <div className="flex justify-between text-xs text-gray-500 mt-2">
                                    <span className="flex items-center">
                                        <MessageSquare className="mr-1" size={14} />
                                        {topic.comments_count}
                                    </span>
                                    <span className="flex items-center">
                                        <Eye className="mr-1" size={14} />
                                        {topic.views_count}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="mt-6 flex justify-center space-x-4">
                {visibleCount < initialTopics.length && (
                    <Button
                        onClick={handleShowMore}
                        variant="outline"
                        size="icon"
                        className="rounded-full w-12 h-12 border-2"
                    >
                        <ChevronDown className="h-6 w-6" />
                        <span className="sr-only">Show More</span>
                    </Button>
                )}
                {visibleCount > (isMobile ? 2 : 3) && (
                    <Button
                        onClick={handleShowLess}
                        variant="outline"
                        size="icon"
                        className="rounded-full w-12 h-12 border-2"
                    >
                        <ChevronUp className="h-6 w-6" />
                        <span className="sr-only">Show Less</span>
                    </Button>
                )}
            </div>
        </>
    );
}