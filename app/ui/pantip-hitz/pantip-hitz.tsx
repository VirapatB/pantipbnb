import { getPantipHitz } from "../../libs/data";
import PantipHitzClient from "./pantip-hitz-client";

export default async function PantipHitz() {
    const realtime = await getPantipHitz();

    return (
        <div className="container mx-auto px-4 mb-12">
            <h3 className="mb-4 text-xl font-semibold">Pantip Hitz</h3>
            <PantipHitzClient initialTopics={realtime} />
        </div>
    );
}