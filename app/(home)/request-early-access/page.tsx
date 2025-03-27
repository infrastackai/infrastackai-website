import Client from "./client";

export default function Page() {
    return (
        <div className="flex-grow mt-[120px] mb-[60px] ml-4 mr-4 md:ml-0 md:mr-0 flex flex-col items-center space-y-4">
            <Client />
        </div>
    )
}