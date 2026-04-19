
import Image from "next/image";
import { MdContactMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">

        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-medium whitespace-nowrap">Contact Us</p>
            <div className="hidden sm:block w-[1px] h-4 bg-white/50" />
            <div className="flex items-center gap-2">
              <MdContactMail className="shrink-0" />
              <p className="text-sm">support@qrpark.pk</p>
            </div>
          </div>

          <div className="hidden sm:block w-[1px] h-4 bg-white/50" />

          <div className="flex items-center gap-2">
            <FaLocationDot className="shrink-0" />
            <p className="text-sm">123 Main Street, Lahore, Pakistan</p>
          </div>
        </div>
        <div className="self-start sm:self-auto">
          <Image src="/pkflag.png" width={50} height={50} alt="PK Flag" />
        </div>

      </div>
    </footer>
  );
}