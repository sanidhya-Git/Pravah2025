'use client';

import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { cultural_photos } from '@/public';
import React from "react";

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* First Row: Three Cards */}
        <Card isFooterBlurred className="border-none" radius="lg">
          <Image
            alt="Woman listening to music"
            className="object-cover"
            height={200}
            src={cultural_photos.fourteen.src}
            width={200}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Button
              className="text-tiny text-white bg-black/20"
              color="default"
              radius="lg"
              size="sm"
              variant="flat"
            >
              Register Now
            </Button>
          </CardFooter>
        </Card>

        <Card isFooterBlurred className="border-none" radius="lg">
          <Image
            alt="Woman listening to music"
            className="object-cover"
            height={200}
            src="https://nextui.org/images/hero-card.jpeg"
            width={200}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Button
              className="text-tiny text-white bg-black/20"
              color="default"
              radius="lg"
              size="sm"
              variant="flat"
            >
              Register Now
            </Button>
          </CardFooter>
        </Card>

        <Card isFooterBlurred className="border-none" radius="lg">
          <Image
            alt="Woman listening to music"
            className="object-cover"
            height={200}
            src="https://nextui.org/images/hero-card.jpeg"
            width={200}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Button
              className="text-tiny text-white bg-black/20"
              color="default"
              radius="lg"
              size="sm"
              variant="flat"
            >
              Register Now
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* Second Row: Two Cards */}
        <Card isFooterBlurred className="border-none" radius="lg">
          <Image
            alt="Woman listening to music"
            className="object-cover"
            height={200}
            src="https://nextui.org/images/hero-card.jpeg"
            width={200}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Button
              className="text-tiny text-white bg-black/20"
              color="default"
              radius="lg"
              size="sm"
              variant="flat"
            >
              Register Now
            </Button>
          </CardFooter>
        </Card>

        <Card isFooterBlurred className="border-none" radius="lg">
          <Image
            alt="Woman listening to music"
            className="object-cover"
            height={200}
            src="https://nextui.org/images/hero-card.jpeg"
            width={200}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Button
              className="text-tiny text-white bg-black/20"
              color="default"
              radius="lg"
              size="sm"
              variant="flat"
            >
              Register Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}