import { MenuIcon, SearchIcon, UserIcon, WorldIcon } from "@/assets/svg/Svg";
import { selectItems } from "@/slices/cartSlice";
import { Divider, FloatButton, Space, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <nav className="bg-white py-3 md:py-5 px-3 md:px-6 border-b border-[#DDDDDD]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <Link href="/" passHref>
              <Image
                src="/Airbnb.webp"
                alt="Airbnb"
                width={120}
                height={50}
                priority
              />
            </Link>
          </div>
          <Space
            wrap
            className="hidden md:inline-flex text-sm text-[#222222] border border-[#DDDDDD] rounded-[40px] p-2 hover:shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)]"
          >
            <button className="font-medium ps-4">Anywhere</button>
            <Divider className="h-[22px] bg-[#DDDDDD]" type="vertical" />
            <button className="font-medium">Any week</button>
            <Divider className="h-[22px] bg-[#DDDDDD]" type="vertical" />
            <button className="flex items-center gap-4 font-medium border-0">
              <span className="text-[#717171] text-[0.875rem]">Add guests</span>
              <div className="w-8 h-8 grid place-items-center bg-[rgb(255,56,92)] text-white rounded-full">
                <SearchIcon />
              </div>
            </button>
          </Space>

          <div className="flex-1 text-end">
            <Space wrap className="gap-1">
              <button className="h-[42px] hidden lg:inline-block hover:bg-[#F7F7F7] text-[#222222] text-sm font-medium rounded-[22px] px-4">
                Become a host
              </button>
              <button className="w-[42px] h-[42px] hidden lg:grid place-items-center hover:bg-[#F7F7F7] rounded-full">
                <WorldIcon />
              </button>

              <FloatButton
                onClick={() => router.push("/checkout")}
                tooltip={<div>Cart count(s)</div>}
                badge={{ count: items.length, color: "blue", showZero: true }}
                icon={<BsCart4 fontSize="20px" />}
                style={{ position: "static" }}
              />
              <button className="h-[42px] flex items-center gap-3 text-[#717171] p-[5px_5px_5px_12px] border rounded-[21px] hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)]">
                <MenuIcon color="#222222" />
                <UserIcon />
              </button>
            </Space>
          </div>
        </div>
      </div>
    </nav>
  );
}
