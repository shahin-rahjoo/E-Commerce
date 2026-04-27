import Modeswitcher from "./mode-switcher";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { UserIcon } from "lucide-react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const MenuBar = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-2">
        <Modeswitcher />
        <Button asChild variant="secondary">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/sign-in">
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <Menu />
          </SheetTrigger>
          <SheetContent className="flex flex-col p-4">
            <SheetTitle className="text-xl">Menu</SheetTitle>
            <Modeswitcher />
            <Button asChild variant="ghost" className="gap-2">
              <Link href="/cart">
                <ShoppingCart /> Cart
              </Link>
            </Button>
            <Button asChild variant="ghost" className="gap-2">
              <Link href="/sign-in">
                <UserIcon /> Sign In
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MenuBar;
