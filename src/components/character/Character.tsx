import { Activity, Heart, TrendingUp } from "@mynaui/icons-react";
import Image from "next/image";
import { Card } from "../ui/card";

const Character = () => {
  return (
    <>
      <div>
        <Image src="/character/axolot-happy.png" alt="Axolot is happy!" width="512" height="512" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Card className="p-4 bg-green-500">
          <div className="flex flex-col gap-1 m-auto">
            <div className="flex flex-row gap-1">
              <Heart />
              <span className="font-semibold">Happiness</span>
            </div>
            <span className="m-auto font-bold text-2xl">100%</span>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex flex-col gap-1 m-auto">
            <div className="flex flex-row gap-1">
              <TrendingUp />
              <span className="font-semibold">Level</span>
            </div>
            <span className="m-auto font-bold text-2xl">3</span>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex flex-col gap-1 m-auto">
            <div className="flex flex-row gap-1">
              <Activity />
              <span className="font-semibold">Activity</span>
            </div>
            <span className="m-auto font-bold text-2xl">5</span>
          </div>
        </Card>
      </div>
    </>
  )
};

export default Character;