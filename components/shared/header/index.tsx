import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Modeswitcher from "./mode-switcher";
const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              width={48}
              height={48}
              priority={true}
              alt={`${APP_NAME} logo`}
            />
            <span className="hidden lg:block text-2xl ml-3 font-bold">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2">
          <Modeswitcher/>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
