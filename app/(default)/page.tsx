import Image from "next/image";
import Header from "@/components/common/header/header";
import Footer from "@/components/common/footer";
import BlockTitle from "@/components/common/block-title";
import SwitchList from "@/components/specific/switch/switch-list";
import Banner from "@/components/common/banner";
import PostList from "@/components/specific/post/post-list";
import KeycapModule from "@/services/modules/keycap.module";

export default async function HomePage() {
  const keycapModule = new KeycapModule();
  const { data } = await keycapModule.getAll();
  console.log({ data });
  return (
    <div className={"space-y-10"}>
      <Banner />
      <BlockTitle
        title={"Switch"}
        icon={{ showIcon: true, name: "keyboard" }}
        showAllPath={"/"}
        className={"px-4 md:px-6"}
      >
        <SwitchList />
      </BlockTitle>

      <BlockTitle
        title={"Keycap"}
        icon={{ showIcon: true, name: "keyboard" }}
        showAllPath={"/"}
        className={"px-4 md:px-6"}
      >
        <SwitchList />
      </BlockTitle>

      <BlockTitle
        title={"Bàn phím"}
        icon={{ showIcon: true, name: "keyboard" }}
        showAllPath={"/"}
        className={"px-4 md:px-6"}
      >
        <SwitchList />
      </BlockTitle>

      <BlockTitle
        title={"Mod phím"}
        icon={{ showIcon: true, name: "keyboard" }}
        showAllPath={"/"}
        className={"px-4 md:px-6"}
      >
        <PostList />
      </BlockTitle>
    </div>
  );
}
