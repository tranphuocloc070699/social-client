import React from "react";
import Typography from "@/components/common/typography";
import { Button } from "@/components/ui/button";
import Icon from "@/components/common/icon";
import SpinnerLoading from "@/components/common/spinner-loading";

const Page = () => {
  return (
    <div
      component-name="Page"
      className={"container grid min-h-screen grid-cols-2 gap-6 bg-white"}
    >
      <section
        className={"flex flex-col gap-6 rounded-lg border border-slate-300 p-6"}
      >
        <Typography.H2 className={"text-center text-slate-950"}>
          Light Version
        </Typography.H2>
        <div
          className={"grid grid-cols-2 gap-6 border-y border-slate-300 py-6"}
        >
          <Typography.Label>Shadcn</Typography.Label>
          <Button>Button</Button>
        </div>
      </section>

      <section
        className={
          "flex flex-col gap-6 rounded-lg border border-sh-background bg-sh-background p-6"
        }
      >
        <Typography.H2 className={"text-center"}>Dark Version</Typography.H2>
        <div
          className={"grid grid-cols-2 gap-6 border-y border-slate-300 py-6"}
        >
          <Typography.Label>Shadcn</Typography.Label>
          <Button>Button</Button>
        </div>
        <div
          className={"grid grid-cols-2 gap-6 border-y border-slate-300 py-6"}
        >
          <Typography.Label>Loading state</Typography.Label>
          <Button loading={true}>Button</Button>
        </div>

        <div
          className={"grid grid-cols-2 gap-6 border-y border-slate-300 py-6"}
        >
          <Typography.Label>With icon</Typography.Label>
          <Button disabled icon={"xMark"} loading={false}>
            Button
          </Button>
        </div>

        <div
          className={"grid grid-cols-2 gap-6 border-y border-slate-300 py-6"}
        >
          <Typography.Label>As Link</Typography.Label>
          <Button icon={"xMark"} loading={false} href={"/href"}>
            Button
          </Button>
        </div>
        <div
          className={"grid grid-cols-2 gap-6 border-y border-slate-300 py-6"}
        >
          <Typography.Label>Disabled</Typography.Label>
          <Button disabled={true} icon={"xMark"} loading={false} href={"/href"}>
            Button
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Page;
