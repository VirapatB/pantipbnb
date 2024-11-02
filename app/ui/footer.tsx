import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h4 className="mb-4 font-semibold">เกี่ยวกับ Pantip</h4>
            <ul className="space-y-2">
              <li>
                <Link href="https://pantip.com/about/tos">
                  <p className="text-gray-600 hover:text-gray-900">กฎ กติกาและมารยาท</p>
                </Link>
              </li>
              <li>
                <Link href="https://pantip.com/about/defamation">
                  <p className="text-gray-600 hover:text-gray-900">คำแนะนำการโพสต์</p>
                </Link>
              </li>
              <li>
                <Link href="https://pantip.com/about/privacy">
                  <p className="text-gray-600 hover:text-gray-900">นโยบายเกี่ยวกับข้อมูลส่วนบุคคล
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">ชุมชน</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#">
                  <p className="text-gray-600 hover:text-gray-900">บล็อก</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="text-gray-600 hover:text-gray-900">พันทิปมาร์เก็ต</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="text-gray-600 hover:text-gray-900">แนะนำติชม</p>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">ดาวน์โหลด</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#">
                  <p className="text-gray-600 hover:text-gray-900">iOS App</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="text-gray-600 hover:text-gray-900">Android App</p>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">ติดตามเรา</h4>
            <div className="flex gap-4">
              <Link href="#">
                <p className="flex items-center text-gray-600 hover:text-gray-900">
                  <Facebook />
                </p>
              </Link>
              <Link href="#">
                <p className="flex items-center text-gray-600 hover:text-gray-900">
                  <Twitter />
                </p>
              </Link>
              <Link href="#">
                <p className="flex items-center text-gray-600 hover:text-gray-900">
                  <Instagram />
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          © 2024 Internet Marketing Co., Ltd
        </div>
      </div>
    </footer>
  );
}