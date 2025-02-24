import React from "react";
import Logo from "./logo";
import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <div className=" flex flex-col items-center justify-center w-full  bg-background dark:bg-[#1F1F1F] z-50">
      <div className=" flex items-center w-full">
        <Logo />
        <div className=" md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
          <Button variant="ghost" size="sm">
            Privacy Policy
          </Button>
          <Button variant="ghost" size="sm">
            Terms & Conditions
          </Button>
        </div>
      </div>
      <p className=" text-xs text-muted-foreground my-2">
        &copy; Muhammad Yameen
      </p>
    </div>
  );
}

export default Footer;
