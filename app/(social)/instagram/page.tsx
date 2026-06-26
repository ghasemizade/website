import { urlsSocial } from "@/lib/constants/urls-social";
import { redirect } from "next/navigation";

export default async function Home() {
    redirect(urlsSocial.instagram);
}