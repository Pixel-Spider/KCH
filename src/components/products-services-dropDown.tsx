"use client";
import ActiveLink from "./activeLink";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import DownArrow from "../../public/down.svg";
import Link from "next/link";
import { useRef, useState } from "react";
import useOnClickOutside from "@/hooks/onOutsideClick";

const ProductAndServicesDropDown = () => {
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));
  const handleClick = () => {
    setOpen(!open);
  };
  const [open, setOpen] = useState(false);
  return (
    <>
      <DropdownMenu.Root open={open}>
        <ActiveLink
          className="inline-flex items-center gap-2"
          href="/products-and-services"
        >
          Products/Services
        </ActiveLink>
        <DropdownMenu.Trigger asChild>
          <button
            onClick={() => setOpen(!open)}
            className="IconButton ml-2"
            aria-label="Customise options"
          >
            <DownArrow />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className="z-50" sideOffset={5}>
            <div
              ref={ref}
              className={`fixed w-[540px] bg-primary-linear flex py-[37px] rounded-es-2xl rounded-se-2xl px-[24px] xl:gap-4 2xl:gap-[23px] flex-col z-50`}
            >
              <span className="bg-[#EC801B] w-[50px] relative top-[-20px] h-[4px]" />

              <Link
                href={"/products-and-services?active=1"}
                className={"text-white xl:text-lg 2xl:text-[22px] font-normal"}
                onClick={handleClick}
              >
                OIL FIELD CHEMICALS
              </Link>
              <Link
                href={"/products-and-services?active=2"}
                className="text-white xl:text-lg 2xl:text-[22px] font-normal"
                onClick={handleClick}
              >
                WATER TREATMENT CHEMICALS{" "}
              </Link>
              <Link
                href={"/products-and-services?active=3"}
                className="text-white xl:text-lg 2xl:text-[22px] font-normal"
                onClick={handleClick}
              >
                CONSTRUCTION CHEMICALS{" "}
              </Link>
              <Link
                href={"/products-and-services?active=4"}
                className="text-white xl:text-lg 2xl:text-[22px] font-normal"
                onClick={handleClick}
              >
                AVIATION CHEMICALS{" "}
              </Link>
              <Link
                href={"/products-and-services?active=5"}
                className="text-white xl:text-lg 2xl:text-[22px] font-normal"
                onClick={handleClick}
              >
                PAINT & COATING CHEMICALS{" "}
              </Link>
              <Link
                href={"/products-and-services?active=6"}
                className="text-white xl:text-lg 2xl:text-[22px] font-normal"
                onClick={handleClick}
              >
                FOOD & BEVERAGE CHEMICALS
              </Link>
              <Link
                href={"/products-and-services?active=7"}
                className={"text-white xl:text-lg 2xl:text-[22px] font-normal"}
                onClick={handleClick}
              >
                SOIL REMEDIATION CHEMICALS{" "}
              </Link>
              <Link
                href={"/products-and-services?active=8"}
                className={"text-white xl:text-lg 2xl:text-[22px] font-normal"}
                onClick={handleClick}
              >
                INDUSTRIAL CLEANING & MARINE CHEMICALS{" "}
              </Link>
              <Link
                href={"/products-and-services?active=9"}
                className={"text-white xl:text-lg 2xl:text-[22px] font-normal"}
                onClick={handleClick}
              >
                ASPHALT CHEMICALS{" "}
              </Link>
              <Link
                href={"/products-and-services?active=10"}
                className={"text-white xl:text-lg 2xl:text-[22px] font-normal"}
                onClick={handleClick}
              >
                ENVIRONMENTAL & GREEN CHEMICALS
              </Link>
              <Link
                href={"/products-and-services?active=11"}
                className={"text-white xl:text-lg 2xl:text-[22px] font-normal"}
                onClick={handleClick}
              >
                LABORATORY CHEMICALS{" "}
              </Link>
              <Link
                href={"/products-and-services?active=12"}
                className={"text-white xl:text-lg 2xl:text-[22px] font-normal"}
                onClick={handleClick}
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
