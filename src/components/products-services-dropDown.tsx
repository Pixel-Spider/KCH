"use client";
import ActiveLink from "./activeLink";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import DownArrow from "../../public/down.svg";
import Link from "next/link";

const ProductAndServicesDropDown = () => {
  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="IconButton" aria-label="Customise options">
            <ActiveLink
              className="inline-flex items-center gap-2"
              href="/products-and-services"
            >
              Products/Services
              <DownArrow />
            </ActiveLink>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className=" z-10" sideOffset={5}>
            <div
              className={`fixed w-[540px] bg-primary-linear flex py-[37px] rounded-es-2xl rounded-se-2xl px-[24px] xl:gap-4 2xl:gap-[23px] flex-col z-50`}
            >
              <span className="bg-[#EC801B] w-[50px] relative top-[-20px] h-[4px]" />
              <Link
                href={"/products-and-services?active=1"}
                className={"text-white xl:text-lg 2xl:text-[22px] font-normal"}
              >
                OIL FIELD CHEMICALS
              </Link>
              <Link
                href={"/products-and-services?active=2"}
                className="text-white xl:text-lg 2xl:text-[22px] font-normal"
              >
                WATER TREATMENT CHEMICALS{" "}
              </Link>
              <Link
                href={"/products-and-services?active=3"}
                className="text-white xl:text-lg 2xl:text-[22px] font-normal"
              >
                CONSTRUCTION CHEMICALS{" "}
              </Link>
              <Link
                href={"/products-and-services?active=4"}
                className="text-white xl:text-lg 2xl:text-[22px] font-normal"
              >
                AVIATION CHEMICALS{" "}
              </Link>
              <Link
                href={"/products-and-services?active=5"}
                className="text-white xl:text-lg 2xl:text-[22px] font-normal"
              >
                PAINT & COATING CHEMICALS{" "}
              </Link>
              <Link
                href={"/products-and-services?active=6"}
                className="text-white xl:text-lg 2xl:text-[22px] font-normal"
              >
                FOOD & BEVERAGE CHEMICALS
              </Link>
              <Link
                href={"/products-and-services?active=7"}
                className="text-white text-[22px] font-normal"
              >
                SOIL REMEDIATION CHEMICALS{" "}
              </Link>
              <Link
                href={"/products-and-services?active=8"}
                className="text-white text-[22px] font-normal"
              >
                INDUSTRIAL CLEANING & MARINE CHEMICALS{" "}
              </Link>
              <Link
                href={"/products-and-services?active=9"}
                className="text-white text-[22px] font-normal"
              >
                ASPHALT CHEMICALS{" "}
              </Link>
              <Link
                href={"/products-and-services?active=10"}
                className="text-white text-[22px] font-normal"
              >
                ENVIRONMENTAL & GREEN CHEMICALS
              </Link>
              <Link
                href={"/products-and-services?active=11"}
                className="text-white text-[22px] font-normal"
              >
                LABORATORY CHEMICALS{" "}
              </Link>
              <Link
                href={"/products-and-services?active=12"}
                className="text-white text-[22px] font-normal"
              >
                BASIC INDUSTRIAL CHEMICALS{" "}
              </Link>
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  );
};

export default ProductAndServicesDropDown;
