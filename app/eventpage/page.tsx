'use client';

import { Card, CardFooter, Image, Button } from '@nextui-org/react';
import { cultural_photos } from '@/public';
import React from 'react';

export default function App() {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Events</h1>
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
          <CardFooter className="border-1 rounded-large shadow-small absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden border-white/20 py-1 before:rounded-xl before:bg-white/10">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Button className="text-tiny bg-black/20 text-white" color="default" radius="lg" size="sm" variant="flat">
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
          <CardFooter className="border-1 rounded-large shadow-small absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden border-white/20 py-1 before:rounded-xl before:bg-white/10">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Button className="text-tiny bg-black/20 text-white" color="default" radius="lg" size="sm" variant="flat">
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
          <CardFooter className="border-1 rounded-large shadow-small absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden border-white/20 py-1 before:rounded-xl before:bg-white/10">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Button className="text-tiny bg-black/20 text-white" color="default" radius="lg" size="sm" variant="flat">
              Register Now
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        {/* Second Row: Two Cards */}
        <Card isFooterBlurred className="border-none" radius="lg">
          <Image
            alt="Woman listening to music"
            className="object-cover"
            height={200}
            src="https://nextui.org/images/hero-card.jpeg"
            width={200}
          />
          <CardFooter className="border-1 rounded-large shadow-small absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden border-white/20 py-1 before:rounded-xl before:bg-white/10">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Button className="text-tiny bg-black/20 text-white" color="default" radius="lg" size="sm" variant="flat">
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
          <CardFooter className="border-1 rounded-large shadow-small absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden border-white/20 py-1 before:rounded-xl before:bg-white/10">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Button className="text-tiny bg-black/20 text-white" color="default" radius="lg" size="sm" variant="flat">
              Register Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
