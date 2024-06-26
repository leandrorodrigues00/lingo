import Image from "next/image";

import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/icons/hr.svg"
            alt="Croatian Flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Croatian
        </Button>

        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/icons/es.svg"
            alt="Spanish Flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>

        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/icons/fr.svg"
            alt="French Flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          French
        </Button>

        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/icons/it.svg"
            alt="Italian Flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Italian
        </Button>

        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/icons/jp.svg"
            alt="Japanese Flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
}
