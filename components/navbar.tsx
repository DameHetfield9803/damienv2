import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <NavigationMenu className="mx-auto p-5">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Social Media</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink asChild>
              <Link
                href="https://www.linkedin.com/in/damien-foo-a2a246210/"
                target="_blank"
              >
                <Button>LinkedIn</Button>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="https://github.com/DameHetfield9803" target="_blank">
                <Button>GitHub</Button>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="https://instagram.com/dame_fdk" target="_blank">
                <Button>Instagram</Button>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Navigations</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink asChild>
              <Link href="/">
                <Button>Home</Button>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="/about">
                <Button>About Me</Button>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="/contact">
                <Button>Contact Me</Button>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
