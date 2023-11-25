"use client";

import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";
import TestimonialCard from "../components/testimonial-card";


const TESTIMONIALS = [
  {
    feedback:
      "Ứng dụng rất tiện lợi và dễ sử dụng! Tôi có thể đặt lịch hẹn mọi lúc, mọi nơi và nhận thông báo nhắc nhở đúng đúng khi cần. Rất hài lòng với trải nghiệm của mình.",
    client: "Phan Hải Quang",
    title: "Trùm nghiện thuốc lá.",
    img: "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/319209766_1846434489039087_4378779371582108269_n.jpg?stp=dst-jpg_s480x480&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7NSqTgTPmv4AX_VzvJe&_nc_ht=scontent.fhan2-4.fna&oh=00_AfDJRbGhdUZiH0nBfmH3WI8mOnpRLAeJGzzJ6xOZ7T0o7w&oe=6567921B",
  },
  {
    feedback:
      "Ứng dụng giúp tôi theo dõi lịch sử khám bệnh và ghi chú y tế một cách thuận tiện. Cảm ơn vì đã tạo ra một cách để lưu trữ thông tin sức khỏe của tôi một cách an toàn và bảo mật.",
    client: "Bùi Anh Tài",
    title: "Thầy ông nội.",
    img: "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/395397958_6464390703671249_856334209779547122_n.jpg?stp=dst-jpg_p480x480&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TBdVFEmMHJgAX8jxJnd&_nc_ht=scontent.fhan2-3.fna&oh=00_AfA1w_29w4h2Z5o24K_jzDxxckDQMKjKoOW21JzpwVeygg&oe=6565F0EE",
  },
  {
    feedback:
      "Dịch vụ khám từ xa của ứng dụng thật sự là một cứu cánh! Tiết kiệm thời gian và công sức, và tôi cảm thấy an tâm khi có thể nhận được tư vấn y tế từ nhà.",
    client: "Phạm Bá Quý",
    title: "Đại gia Sài Gòn",
    img: "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/340239877_753606716500277_6885773160674288221_n.jpg?stp=c0.0.480.480a_dst-jpg_p480x480&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tiA0W5E_GRAAX_KNkGO&_nc_ht=scontent.fhan2-3.fna&oh=00_AfDPGJG4_TdH9JMbCxgkZ-010IobUVBEioCHGq-HQIPRrg&oe=65665B76",
  },
];

export function Testimonials() {
  return (
    <section className="px-10 !py-20">
      <div className="container mx-auto">
        <div className="mb-20 flex w-full flex-col items-center">
          <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white ">
            <UserIcon className="h-6 w-6" />
          </div>
          <Typography variant="h2" color="blue-gray" className="mb-2">
            What Clients Say
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl text-center !text-gray-600"
          >
            Discover what our valued clients have to say about their experiences
            with our services. We take pride in delivering exceptional results
            and fostering lasting partnerships.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
          {TESTIMONIALS.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
