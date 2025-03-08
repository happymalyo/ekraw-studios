import Image from "next/image";
import React from "react";
import { AboutStyles } from "./style";

function AboutReveal() {
  return (
    <article className="absolute z-20 left-[33%] top-[6%] max-w-md overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
      <Image
        src="/ekraw-light.jpeg"
        alt=""
        width={0} // Required for Next.js Image - set appropriate width
        height={0} // Required for Next.js Image - set appropriate height
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        sizes="100vw" // Optional: helps with responsive images
      />

      <div className="bg-white p-4 sm:p-6">
        <time className="block text-xs text-gray-500"> 10th Oct 2022 </time>

        <a href="#">
          <h3 className="mt-0.5 text-lg text-gray-900">
            How to position your furniture for positivity
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>
      </div>
    </article>
  );
}

export default AboutReveal;
