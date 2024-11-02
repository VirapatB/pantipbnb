import { getPantipPick } from "../../libs/data";
import PantipPickClient from "./pantip-pick-client";

export default async function PantipPick() {
    const realtime = await getPantipPick();

    return (
        <div className="container mx-auto px-4 mb-12">
            <h3 className="mb-4 text-xl font-semibold">Pantip Hitz</h3>
            <PantipPickClient initialTopics={realtime} />
        </div>
    );
}