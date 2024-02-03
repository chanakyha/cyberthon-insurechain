"use client";

import {
  ArrowDownTrayIcon,
  ArrowLeftCircleIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/solid";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggler from "./ThemeToggler";
import ConnectWalletButton from "./ConnectWalletBtn";
const Header = () => {
  type navContent = {
    name: string;
    href: string;
  };
  const navContents: navContent[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Insurance Plan",
      href: "/plan",
    },
    {
      name: "Claim",
      href: "/claim",
    },
  ];

  const path = usePathname();
  return (
    <div className="border-b border-ui-peach-85 sticky top-0 z-50 bg-background">
      <div className="flex justify-between p-4 lg:px-16 xl:max-w-7xl xl:mx-auto items-center">
        <h1 className="text-primary dark:text-white outline-white text-base font-bold tracking-wider">
          InsureChain
        </h1>
        <div className="hidden md:inline-flex gap-4 items-center">
          {navContents.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                <p
                  className={cn(
                    path === item.href && "bg-ui-peach-95 font-medium",
                    "text-sm py-2 px-4 rounded-md"
                  )}
                >
                  {item.name}
                </p>
              </Link>
            );
          })}
          <ConnectWalletButton />
          <ThemeToggler />
        </div>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Bars3BottomRightIcon className="w-7 h-7" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Contents</SheetTitle>
              <SheetDescription>
                {navContents.map((item, index) => {
                  return (
                    <Link href={item.href} key={index}>
                      <div
                        className={cn(
                          "text-base flex items-center justify-between font-medium p-2 tracking-wider rounded-md",
                          path === item.href && " text-ui-purple-50 font-bold"
                        )}
                      >
                        <p>{item.name}</p>
                        {path === item.href && (
                          <ArrowLeftCircleIcon className="w-5 h-5" />
                        )}
                      </div>
                    </Link>
                  );
                })}
                <SheetFooter className="mt-5">
                  <Button className="flex items-center gap-2">
                    <p>Connect Wallet</p>
                  </Button>
                </SheetFooter>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
