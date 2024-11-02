import Image from "next/image";
import Link from "next/link";
import { getPantipHighlights } from "../libs/data";

export default async function PantipHighlights() {
    const highlights = await getPantipHighlights();

    return (
        <div className="container mx-auto px-4 mb-12">
            <h3 className="mb-4 text-xl font-semibold">กระทู้แนะนำ</h3>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
                {highlights.map((highlight, index) => (
                    <Link key={index} href={highlight.post_url}>
                        <div className="rounded-xl border shadow-sm hover:bg-gray-100 hover:cursor-pointer transition-colors duration-200">
                            <div className="relative w-full pt-[75%]"> {/* 4:3 aspect ratio */}
                                <Image
                                    className="rounded-t-xl object-cover"
                                    src={highlight.image_url[2]}
                                    alt={`image of ${highlight.name}`}
                                    layout="fill"
                                />
                            </div>
                            <div className="p-3">
                                <h4 className="mb-2 font-semibold text-sm line-clamp-2">{highlight.name}</h4>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}