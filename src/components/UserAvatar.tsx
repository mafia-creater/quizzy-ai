import {User} from "next-auth";
import React from "react";
import { Avatar } from "./ui/avatar";
import Image from "next/image";

type Props = {
    user: Pick<User, "name" | "image">;
}

const UserAvatar = ({user}: Props) => {
    return (
        <Avatar>
            {user.image ? (
                <div className="relative w-full h-full aspect-square">
                    <Image fill src={user.image} alt="profile Image" referrerPolicy="no-referrer" />
                </div>
            ):(
                <h1>fallback</h1>
            )}
        </Avatar>
        )      
}

export default UserAvatar;