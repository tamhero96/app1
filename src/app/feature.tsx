"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Khám chuyên khoa",
    children:
      "Chúng tôi cung cấp một loạt các dịch vụ chăm sóc sức khỏe chuyên sâu để đảm bảo bạn nhận được chăm sóc tốt nhất từ các chuyên gia trong lĩnh vực.",
  },
  {
    icon: HeartIcon,
    title: "Khám từ xa",
    children:
      "Chúng tôi cung cấp cơ hội khám chuyên khoa từ xa để mang lại sự thuận tiện và an toàn cho sức khỏe của bạn. Với sự tiện lợi của công nghệ hiện đại, bạn có thể nhận được chăm sóc chất lượng từ chuyên gia ngay tại nhà",
  },
  {
    icon: LockClosedIcon,
    title: "Sức khoẻ tinh thần",
    children:
      "Chăm sóc tốt cho tâm hồn cũng quan trọng như chăm sóc cơ thể. Chúng tôi cam kết mang lại sự hỗ trợ và giúp đỡ trong việc duy trì sức khoẻ tinh thần của bạn.",
  },
  {
    icon: LightBulbIcon,
    title: "Khám tổng quát",
    children:
      "Chúng tôi mang đến cho bạn các dịch vụ chăm sóc sức khỏe toàn diện để đảm bảo bạn luôn đạt được sự khỏe mạnh và thoải mái.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Your Medical App
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
         Dịch vụ toàn diện
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Hãy lắng nghe để hiểu những điều cơ thể đang nói với bạn!
          Hãy tiếp nhận thông tin, tìm hiểu và sử dụng thông tin đúng cách để đưa ra những quyết định phù hợp nhất cho chính mình và người thân khi cần chăm sóc sức khỏe!
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
