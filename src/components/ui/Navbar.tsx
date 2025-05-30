"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";


export function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-purple-900 p-3 flex items-center justify-center z-50 gap-8">
      <h1 className="text-3xl pr-2 font-bold">
        <span className="text-white">Fed</span>
        <span className="text-orange-500">Ex.</span>
      </h1>
      <NavigationMenu>
        <NavigationMenuList>
          {/* Shipping Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-white text-sm">Shipping</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-4 md:w-[200px] lg:w-[200px] cursor-pointer">
                <ListItem href="/shipping/create">Create a Shipment</ListItem>
                <ListItem href="/shipping/track">
                  Shipping Rates and Delivery Times
                </ListItem>
                <ListItem href="/shipping/track">
                  Schedule and Manage Pickups
                </ListItem>
                <ListItem href="/shipping/track">
                  Packing and Shipping Supplies
                </ListItem>
                <ListItem href="/shipping/track">
                  International Shipping Guide
                </ListItem>
                <ListItem href="/shipping/track">Freight</ListItem>
                <ListItem href="/shipping/track">Manage a Return</ListItem>
                <ListItem
                href="/shipping/track"
                className="text-blue-600 hover:text-blue-800"
              >
                ALL SHIPPING SERVICES
              </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Tracking Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-white text-sm">Tracking</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-6 w-[400px] md:w-[300px] lg:w-[300px] flex flex-col gap-4">
                <label
                  htmlFor="trackingNumber"
                  className="text-sm font-medium text-gray-700"
                >
                  TRACKING ID
                </label>
                <input
                  id="trackingNumber"
                  type="text"
                  placeholder="Enter tracking number"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                />
                <button
                  type="button"
                  className="w-full bg-blue-600 text-white rounded-md py-2 font-semibold hover:bg-blue-700 transition"
                >
                  TRACK
                </button>
                <div className="mt-4 space-y-3 text-sm cursor-pointer underline">
                  <Link href={'/shipping/create'}>Advanced Shipment Tracking</Link><p></p>
                  <Link href={'/shipping/create'}>Manage Your Delivery</Link><p></p>
                  <Link href={'/shipping/create'}>ALL TRACKING SERVICES</Link><p></p>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Design and Print Dropdown */}
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger className="bg-transparent  text-white  text-sm">Design and Print</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex justify-center w-full">
                <ul className="grid gap-3 p-4 w-[250px] font-black">
                  <ListItem href="/design/logo">
                    Explore Print, Products & Design
                  </ListItem>
                  <ListItem href="/design/business-card">
                    Browse Services
                  </ListItem>
                  <ListItem href="/design/flyer">
                    VISIT NEW MARKET PLACE
                  </ListItem>
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Locations Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent   text-white text-sm">Locations</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-3 md:w-[200px] cursor-pointer underline font-black ">
                <ListItem href="/design/logo">Drop Off a Package</ListItem>
                <ListItem href="/design/logo">FIND A L0CATION</ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Support Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-white text-sm">Support</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px]p-4 lg:w-[200px] underline font-black">
                <ListItem href="/design/logo">Small Business Center</ListItem>
                <ListItem href="/design/logo">FedEx Service Guide</ListItem>
                <ListItem href="/design/logo">
                  Account Management Tools
                </ListItem>
                <ListItem href="/design/logo">
                  Frequently Asked Questions
                </ListItem>
                <ListItem href="/design/logo">File a Claim</ListItem>
                <ListItem href="/design/logo">Billing And Invoicing</ListItem>
                <ListItem href="/design/logo">CUSTOMER SUPPORT</ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-md px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="button"
          className="absolute right-1 top-1.5 text-orange-500 hover:text-orange-700"
          aria-label="Search"
        >
          🔍
        </button>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
