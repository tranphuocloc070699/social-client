import Image from "next/image";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer";
import BlockTitle from "@/components/common/BlockTitle";
import SwitchList from "@/components/specific/Switch/SwitchList";


export default function Home() {
  return (
      <div>
        <Header></Header>
        <BlockTitle title={"Bàn phím"} icon={{showIcon: true, name: "keyboard"}} showAllPath={"/"}>
          <SwitchList/>
        </BlockTitle>

        <Footer></Footer>
      </div>
  );
}
