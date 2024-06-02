import Link from "next/link";
import {useContext} from "react";
import {Context} from "@/context/AppContext";

const Navigation = () => {
    const {navigationList} = useContext(Context);

    return (
        <div>
            <ul className="flex p-4 gap-10 text-white">
                {navigationList.map(({name, url}) =>
                    (
                        <div key={name} className="p-4">
                            <div className="hover:border-b-4 pb-4">
                                <Link key={name} href={url} className="text-lg">{name}</Link>
                            </div>
                        </div>
                    )
                )}
            </ul>
        </div>)
}
export default Navigation;