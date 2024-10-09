import Image from "next/image";
import {Button} from "antd";
import {ConnectButton} from "@rainbow-me/rainbowkit";
import {AppConnectButton} from "@/components/AppConnectButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AppConnectButton />
      <Button type={"primary"}>Click Me!</Button>
    </main>
  );
}
