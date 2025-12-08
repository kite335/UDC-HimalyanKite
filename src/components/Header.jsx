import * as React from "react";
import SearchBar from "./SearchBar";
import { ChevronDownIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "./ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

const Header = () => {

  const dropdownItems = {
    About: [
      {
        link: "/info/himalayanKite",
        options: "Why Himalyan Kite",
        description: "Experience and Reliable",
      },
      {
        link: "/awards/himalayanKite",
        options: "Awards & Achievments",
        description: "Being Best in our Work",
      },
    ],

    "Special Interest Tours": [
      {
        link: "/tours",
        options: "Educational Tours",
        description: "Comprehsion Guide",
      },
      {
        link: "/wildlife-tours",
        options: "Wildlife Tours",
        description: "Forest,Rivers and many more to see",
      },
    ],

    Adventure: [
      {
        link: "/rafting",
        options: "Rafting",
        description: "Variety of rafting",
      },


      {
        link: "/paragliding",
        options: "Paragliding",
        description: "paraglading theme"
      },

      {
        link: "/cycling",
        options: "Cycling",
        description: "cycling theme"
      },
      {
        link: "/bungee-jumping",
        options: "Bungee-Jumping",
        description: "bungee jumping theme"
      },
    ],
    "Climbing Expeditions": [
      {
        link: "/seven-sumitt",
        options: "Seven Summit",
        description: "Make a record for yourself",
      },
      {
        link: "/himalyan-expeditions",
        options: "Himalayan Climbing Expeditions",
        description: "Adventure in Himalyan",
      },
    ],
  };


  const nestedOptionsItems = {
    "Rafting": [{ link: "8-rafting", option: "rafting", description: "8 raftinh description" },
    { link: "16-rafting", option: "16-Rafting", description: "16 rafting description" }, { link: "24-rafting", option: "24-Rafting", description: "24 rafting description" }, { link: "36-rafting", option: "36-Rafting", description: "36-rafting description" }]
  }

  const upperHeaderItem = [
    { link: "/whatsApp", linkText: "WhatsApp" },
    { link: "/contact", linkText: "Contact Us" },
  ];

  const dropdownMenuItem = [
    "Adventure",
    "About",
    "Special Interest Tours",

    "Climbing Expeditions",
  ];

  const simpleLinks = [
    { link: "/thems", linkText: "Trip Thems" },
    { link: "/indian-Tours", linkText: "Indian Tours" },
    { link: "/destinations", linkText: "Destinations" },
  ];

  return (
    <header className="border-b   ">
      {/* Upper Header Links */}
      <div className="flex justify-around py-3 bg-gray-50 border-b">
        <div className="flex">
          {upperHeaderItem.map((linkItem) => (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href={linkItem.link}>
                    {linkItem.linkText}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuIndicator />
              <NavigationMenuViewport />
            </NavigationMenu>
          ))}
        </div>

        {/* Search Bar Component */}
        <div className="lg:w-full   max-w-md px-4">
          <SearchBar />
        </div>
      </div>

      {/* Lower Header Logo ,Dropdown ,Simple Link */}
      <div className="lg:w-full  flex items-center justify-between px-4 py-4 bg-blue-500">
        <a href="/" className="text-lg font-bold">
          HimalyanKite
        </a>

        <div className="flex items-center gap-1">
          {/* Main Dropdown Menu */}
          {dropdownMenuItem.map((menuItem) => {
            const items = dropdownItems[menuItem];
            return (
              <DropdownMenu key={menuItem}>
                <DropdownMenuTrigger className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-none">
                  {menuItem}
                  <ChevronDownIcon className="ml-1 size-4 transition duration-300" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {items.map((item) => {
                    const nestedItems = nestedOptionsItems[item.options];
                    return (
                      <DropdownMenuSub key={item.options}>
                        <DropdownMenuSubTrigger className="cursor-pointer">
                          <div>
                            <div className="font-medium text-sm">{item.options}</div>
                            <div className="text-xs text-muted-foreground">{item.description}</div>
                          </div>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                          {nestedItems && nestedItems.length > 0 ? (
                            nestedItems.map((nestedItem) => (
                              <DropdownMenuItem key={nestedItem.link} asChild>
                                <a href={nestedItem.link} className="cursor-pointer">
                                  <div>
                                    <div className="font-medium">{nestedItem.option}</div>
                                    <div className="text-xs text-muted-foreground">{nestedItem.description}</div>
                                  </div>
                                </a>
                              </DropdownMenuItem>
                            ))
                          ) : (
                            <DropdownMenuItem asChild>
                              <a href={item.link} className="cursor-pointer">
                                <div className="font-medium">{item.options}</div>
                              </a>
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          })}

          {/* Simple links (no dropdown) */}
          {simpleLinks.map((simple) => (
            <a
              key={simple.link}
              href={simple.link}
              className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:outline-none"
            >
              {simple.linkText}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
