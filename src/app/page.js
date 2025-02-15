import Image from "next/image";
import Bannar from "./bannar/page";
import IslamicDuas from "./IslamicDuas/page";

export default function Home() {
  return (
    <div className="pt-24">
      <Bannar />
      <IslamicDuas/>
    </div>
  );
}
