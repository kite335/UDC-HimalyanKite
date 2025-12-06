import * as React from "react";
import SearchBar from "./SearchBar";


import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "./ui/navigation-menu";

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

        <NavigationMenu>
          <NavigationMenuList>
            {/* Dropdown: Adventure,Special interest Tours,Climbing Expeditions */}
            {dropdownMenuItem.map((menuItem) => {
              const Item = dropdownItems[menuItem];
              console.log(Item);
              return (
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="lg:max-w">{menuItem}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[560px] grid-cols-2 gap-4 p-6">
                      {/* Dropdown Inside Link ,Options and Description */}
                      {Item.map((content) => {
                        console.log(content);
                        return (
                          <a
                            href={content.link}
                            className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="font-medium">{content.options}</div>
                            <div className="text-sm text-muted-foreground">
                              {content.description}
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            })}

            {/* Simple link (no dropdown) */}

            {simpleLinks.map(simple=>( 
              <NavigationMenuItem>
              <NavigationMenuLink href={simple.link}>{simple.linkText}</NavigationMenuLink>
            </NavigationMenuItem>))
            }
          </NavigationMenuList>
          <NavigationMenuIndicator />
          <NavigationMenuViewport />
        </NavigationMenu>   
      </div>
    </header>
  );
};

export default Header;
