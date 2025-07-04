import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import Link from "next/link";
export default function Navbar() {
  return (
    <NavigationMenu className="flex flex-col p-3">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Social Media</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="https://www.linkedin.com/in/damien-foo-a2a246210/" target="_blank">Linkedin</NavigationMenuLink>
            <NavigationMenuLink href="https://github.com/DameHetfield9803" target="_blank">Github</NavigationMenuLink>
            <NavigationMenuLink href="https://instagram.com/dame_fdk" target="_blank">Instagram</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <Button><Link href={"/about"}>About Me</Link></Button>
        <Button><Link href={"/contact"}>Contact Me</Link></Button>
        <div><ModeToggle/></div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
