'use client'

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getRecommendedRooms } from "../libs/data";
import { Room } from "../libs/definitions";

export default function RecommendedRoom() {
  const [recommendRooms, setRecommendRooms] = useState<Room[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchRecommendRoom = async () => {
      const result = await getRecommendedRooms();
      setRecommendRooms(result);
    };

    fetchRecommendRoom();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="container mx-auto px-4 mb-12">
      <h3 className="mb-4 text-xl font-semibold">เลือกห้อง</h3>
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide gap-4 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {recommendRooms.map((room, index) => (
            <Link
              key={index}
              href={room.link_url}
              className="flex-shrink-0 w-24 md:w-32"
            >
              <div className="flex h-24 lg:h-40 flex-col items-center justify-center rounded-lg hover:border-b hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                <Image 
                  src={room.room_icon_url} 
                  height={30} 
                  width={30} 
                  alt={`${room.name} icon`} 
                  style={{ filter: 'invert(1)' }}
                />
                <span className="text-sm mt-2">{room.name}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 border rounded-full bg-background/80 backdrop-blur-sm"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Scroll left</span>
          </Button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 border rounded-full bg-background/80 backdrop-blur-sm"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Scroll right</span>
          </Button>
        </div>
      </div>
    </div>
  );
}