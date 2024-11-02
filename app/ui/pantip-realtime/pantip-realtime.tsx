import { getPantipRealtime } from "../../libs/data";
import PantipRealtimeClient
 from "./pantip-realtime-client";
export default async function PantipRealtime() {
    const realtime = await getPantipRealtime();

    return (
        <div className="container mx-auto px-4 mb-12">
            <h3 className="mb-4 text-xl font-semibold">Pantip Realtime</h3>
            <PantipRealtimeClient initialTopics={realtime} />
        </div>
    );
}