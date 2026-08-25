import Image from "next/image";
import { profile } from "@/data/site";

export default function ProfilePanel() {
  return (
    <Image
      src={profile.photoUrl}
      alt={profile.name}
      width={400}
      height={400}
      className="h-[400px] w-[400px] rounded-full object-cover "
    />
  );
}