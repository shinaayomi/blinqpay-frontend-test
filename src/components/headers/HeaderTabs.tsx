import Image from "next/image";
import React from "react";
import { BsFilter } from "react-icons/bs";
import OmgIcon from "../../assets/icons/omg.jpeg";
import BeachIcon from "../../assets/icons/bch.jpeg";
import AmazingPoolIcon from "../../assets/icons/amz-pools.jpeg";
import TrpicalIcon from "../../assets/icons/tropical.jpeg";
import SharedHomesIcon from "../../assets/icons/shomes.jpeg";
import IslandsIcon from "../../assets/icons/islands.jpeg";
import ArcticIcon from "../../assets/icons/arctic.jpeg";
import AmazingViewsIcon from "../../assets/icons/amz-views.jpg";
import DesignIcon from "../../assets/icons/design.jpg";
import SurfingIcon from "../../assets/icons/surfing.jpg";
import BedAndBreakfastIcon from "../../assets/icons/bedab.jpg";
import NationalParksIcon from "../../assets/icons/nat-parks.jpg";
import CavesIcon from "../../assets/icons/caves.jpg";
import CountrySideIcon from "../../assets/icons/count-side.jpg";
import LakeIcon from "../../assets/icons/lake.jpg";
import LuxeIcon from "../../assets/icons/luxe.jpg";
import TinyHomesIcon from "../../assets/icons/tny-homes.jpg";
import CampersIcon from "../../assets/icons/campers.jpg";
import CastlesIcon from "../../assets/icons/castles.jpg";
import AFramesIcon from "../../assets/icons/aframes.jpg";
import GolfingIcon from "../../assets/icons/golfing.jpg";
import MansionsIcon from "../../assets/icons/mansions.jpg";
import CabinsIcon from "../../assets/icons/cabins.jpg";

const buttonList = [
  {
    title: "OMG!",
    icon: OmgIcon,
  },
  {
    title: "Beach",
    icon: BeachIcon,
  },
  {
    title: "Amazing Pools",
    icon: AmazingPoolIcon,
  },
  {
    title: "Tropical",
    icon: TrpicalIcon,
  },
  {
    title: "Shared Homes",
    icon: SharedHomesIcon,
  },
  {
    title: "Islands",
    icon: IslandsIcon,
  },
  {
    title: "Arctic",
    icon: ArcticIcon,
  },
  {
    title: "Amazing Views",
    icon: AmazingViewsIcon,
  },
  {
    title: "Design",
    icon: DesignIcon,
  },
  {
    title: "Surfing",
    icon: SurfingIcon,
  },
  {
    title: "Beds And Breakfast",
    icon: BedAndBreakfastIcon,
  },
  {
    title: "National Parks",
    icon: NationalParksIcon,
  },
  {
    title: "Caves",
    icon: CavesIcon,
  },
  {
    title: "Country Side",
    icon: CountrySideIcon,
  },
  {
    title: "Lake",
    icon: LakeIcon,
  },
  {
    title: "Luxe",
    icon: LuxeIcon,
  },
  {
    title: "Tiny Homes",
    icon: TinyHomesIcon,
  },
  {
    title: "Campers",
    icon: CampersIcon,
  },
  {
    title: "Castles",
    icon: CastlesIcon,
  },
  {
    title: "A-Frames",
    icon: AFramesIcon,
  },
  {
    title: "Golfing",
    icon: GolfingIcon,
  },
  {
    title: "Mansions",
    icon: MansionsIcon,
  },
  {
    title: "Cabins",
    icon: CabinsIcon,
  },
];

export default function HeaderTabs() {
  const handleChange = (i: number) => {
    console.log(i);
  };

  return (
    <header className="bg-white py-3 px-3 md:px-6 border-b border-[#DDDDDD]">
      <div className="container mx-auto">
        <div className="flex gap-3">
          <div className="overflow-scroll whitespace-nowrap">
            <div className="flex gap-4 md:gap-8">
              {buttonList.map((tab, i) => (
                <button
                  key={i}
                  className="flex flex-col items-center gap-1 text-xs"
                  onClick={() => handleChange(i)}
                >
                  <Image
                    src={tab.icon}
                    alt={tab.title}
                    width={24}
                    height={24}
                    priority
                  />
                  <div>{tab.title}</div>
                </button>
              ))}
            </div>
          </div>
          <div>
            <button className="flex items-center gap-2 p-3 font-semibold rounded-xl border-2 border-gray-300">
              <BsFilter fontSize="20px" />{" "}
              <span className="text-sm">Filters</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
