"use client";

import { useState } from "react";
import { ArrowRight, Github, Twitter } from "lucide-react";
import BackgroundCard from "@/components/backgroundCard";
import { BACKGROUND_OPTIONS } from "@/components/backgrounds";
import { Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import { DialogDemo } from "@/components/dialogBox";

export default function Home() {
  const [preview, setPreview] = useState<null | React.ReactNode>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const resetBg = () => {
    setPreview(null);
    setTheme("light");
  };
  return (
    <>
      {" "}
      <Toaster position="top-center" richColors />
      <div className={`${theme}`}>
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          {preview ? preview : null}
        </div>
        <div className="relative mx-auto h-screen w-full max-w-7xl md:px-4 lg:px-6">
          <header className="flex items-center justify-between py-8">
            <div />
            <nav className="flex gap-6">
              <DialogDemo />
              <a
                href="https://github.com/trstefan/harmonyhues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Github
                  className="h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400 "
                  strokeWidth={1.5}
                />
              </a>
            </nav>
          </header>{" "}
          <div className="pt-8">
            <div className="relative mx-auto flex max-w-4xl flex-col items-center ">
              <div className="mb-8 fle">
                <a
                  href="https://github.com/trstefan/harmonyhues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                ></a>
              </div>
              <h2 className="sm:text-8xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                HarmonyHues
              </h2>
              <h2 className="text-center text-2xl font-medium text-gray-900 dark:text-gray-50 sm:text-6xl">
                A showcase of beautiful,
                <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                  modern gradient backgrounds.
                </span>
              </h2>
              <p className="mt-6 text-center text-lg leading-6 text-gray-600 dark:text-gray-200">
                Effortlessly enhance your projects with our ready-to-use
                snippets. All designs are built with Tailwind CSS and
                <span className="cursor-wait opacity-70"> Vanilla CSS</span> for
                easy integration.
              </p>
              <div className="mt-10 flex gap-4">
                <a
                  href="https://github.com/trstefan/harmonyhues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Button>Go to GitHub</Button>{" "}
                </a>
                <Button variant="secondary" onClick={resetBg}>
                  Reset background
                </Button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden px-4 pb-20 pt-52 md:px-10">
            {" "}
            <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2 lg:grid-cols-4">
              {BACKGROUND_OPTIONS.map((background, index) => {
                return (
                  <BackgroundCard
                    key={index}
                    setPreview={setPreview}
                    theme={background.theme}
                    setTheme={setTheme}
                  >
                    {background.component}
                  </BackgroundCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
