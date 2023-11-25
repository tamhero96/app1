"use client";

import React from "react";
import { Typography, Card } from "@material-tailwind/react";

const FAQS = [
  {
    title: "Làm thế nào để đặt lịch hẹn thông qua ứng dụng của bạn?",
    desc: "Truy cập mục Đặt Lịch Hẹn trên ứng dụng. Chọn bác sĩ hoặc chuyên gia y tế mong muốn. Chọn thời gian và ngày hẹn phù hợp cho bạn. Xác nhận đặt lịch hẹn và nhận thông báo xác nhận.",
  },
  {
    title: "Làm thế nào để tìm bác sĩ hoặc chuyên gia y tế phù hợp?",
    desc: "Vào mục Tìm Bác Sĩ hoặc Danh Sách Chuyên Gia trên ứng dụng. Sử dụng bộ lọc để chọn chuyên khoa, vị trí, và đánh giá. Xem thông tin chi tiết về bác sĩ và chuyên gia để đưa ra quyết định đúng đắn.",
  },
  {
    title: "Ứng dụng có hỗ trợ khám từ xa không?",
    desc: "Có, chúng tôi cung cấp dịch vụ khám từ xa qua video để giúp bạn nhận tư vấn y tế từ xa mọi lúc, mọi nơi.",
  },
];

export function Faqs() {
  return (
    <section className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Các câu hỏi thường gặp
          </Typography>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc }) => (
            <Card key={title} shadow={false} color="transparent">
              <Typography color="blue-gray" className="pb-6" variant="h4">
                {title}
              </Typography>
              <div className="pt-2">
                <Typography className="font-normal !text-gray-500">
                  {desc}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
