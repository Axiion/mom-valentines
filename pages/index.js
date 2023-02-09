import Head from "next/head";
import Image from "next/image";
import { BsHeartFill, BsSpotify } from "react-icons/bs";
import { AiFillLeftCircle } from "react-icons/ai";
import { RiUserHeartFill } from "react-icons/ri";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import mom from "../public/mom.png";
import momandme from "../public/momandme.png";
import family from "../public/family.png";
import React, { useState } from "react";
import Snowfall from "react-snowfall";

export default function Home() {
  const [showPoem, setShowPoem] = useState(true);
  const [showMsg, setShowMsg] = useState(true);
  return (
    <div>
      <Head>
        <title>happy valentine's day, mom!</title>
        <meta name="description" content="Coded and built with love, Matt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/valicon.ico" />
      </Head>
      <main className="bg-[#1e1e2e] overflow-hidden relative">
        <embed
          src="../bg.mp3"
          loop="true"
          autostart="true"  
          width="1"
          height="0"
        />
        <div
          style={{
            background: "#282c34",
            position: "absolute",
          }}
          className="h-full w-full"
        >
          <Snowfall />
        </div>
        <section className="min-h-screen flex items-center">
          {showPoem && showMsg && (
            <div
              className="bg-[#1d4e89] relative flex flex-wrap
            mx-auto rounded-md w-[60%] p-6 m-12 items-center shadow-2xl animate-popWindow"
            >
              <div className="flex-wrap w-2/3 text-[#f79256] px-5 py-10">
                <p className="text-4xl absolute onset-0 text-[#ED6363] py-5 rounded-lg blur">
                  hi mom hehe
                </p>
                <p className="text-4xl py-5">hi mom hehe</p>
                <p className="text-2xl absolute onset-0 text-[#ED6363] py-5 rounded-lg blur">
                  happy valentine's day!
                </p>
                <p className="text-2xl py-5">happy valentine's day!</p>
                <p className="absolute onset-0 text-[#ED6363] py-5 rounded-lg blur">
                  my valentine's gift for you is this simple website that i
                  made,
                  <br />
                  with a message, some pictures, and a poem that i made for you.
                </p>
                <p className="py-5">
                  my valentine's gift for you is this simple website that i
                  made,
                  <br />
                  with a message, some pictures, and a poem that i made for you.
                </p>
                <p className="absolute onset-0 text-[#ED6363] py-5 rounded-lg blur">
                  i hope you like it mom, i love you! - Matt
                </p>
                <p className="py-5">
                  i hope you like it mom, i love you! - Matt
                </p>
              </div>
              <div className="relative flex-1">
                <Image src={mom} className="rounded-lg shadow-xl" />
              </div>
              <div className="relative">
                <div className="absolute inset-0 text-red-600 rounded-lg blur-md">
                  <BsHeartFill className="text-2xl text-red-600" />
                </div>
                <div className="h-96">
                  <BsHeartFill className="animate-pulse text-2xl text-red-600" />
                </div>
              </div>
              <div className="w-full text-center">
                <ul className="flex flex-wrap items-center justify-center text-[#f79256] text-4xl">
                  <li className="mr-10">
                    <button
                      className="cursor-pointer hover:animate-wiggle"
                      onClick={() => setShowMsg(!showMsg)}
                    >
                      {showMsg === true ? (
                        <RiUserHeartFill />
                      ) : (
                        <AiFillLeftCircle className="animate-spin-fast" />
                      )}
                    </button>
                  </li>
                  <li className="mr-10">
                    <a
                      className="cursor-pointer"
                      href="https://open.spotify.com/playlist/6TwUGwZr5KX4vibvLuGPsH?si=4661b325f5644bea"
                      target="_blank"
                    >
                      <BsSpotify className="hover:animate-wiggle" />
                    </a>
                  </li>
                  <li className="">
                    <button
                      className="cursor-pointer hover:animate-wiggle"
                      onClick={() => setShowPoem(!showPoem)}
                    >
                      {showPoem === true ? (
                        <BsFillBookmarkHeartFill />
                      ) : (
                        <AiFillLeftCircle className="animate-spin-fast" />
                      )}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {!showPoem && showMsg && (
            <div
              className="bg-[#1d4e89] relative flex flex-wrap
          mx-auto rounded-md w-[60%] p-6 m-12 items-center shadow-2xl animate-popWindow"
            >
              <div className="flex-wrap w-2/3 text-[#f79256] px-5" id="poem">
                <div className="">
                  <p className="absolute onset-0 text-[#ED6363] text-4xl py-5 rounded-lg blur">
                    thank you, mom
                  </p>
                  <p className="text-4xl py-5">thank you, mom</p>
                  <p className="absolute onset-0 text-[#ED6363] text-md py-3 rounded-lg blur">
                    Mom, on this day of hearts and love,
                  </p>
                  <p className="text-md py-3">
                    Mom, on this day of hearts and love,
                  </p>
                  <p className="absolute onset-0 text-[#ED6363] text-md py-3 rounded-lg blur">
                    I want to thank you for all you do.
                  </p>
                  <p className="text-md py-3">
                    I want to thank you for all you do.
                  </p>
                  <p className="absolute onset-0 text-[#ED6363] text-md py-3 rounded-lg blur">
                    Your love is a treasure, sent from above,
                  </p>
                  <p className="text-md py-3">
                    Your love is a treasure, sent from above,
                  </p>
                  <p className="absolute onset-0 text-[#ED6363] text-md py-3 rounded-lg blur">
                    A shining light that guides me through.
                  </p>
                  <p className="text-md py-3">
                    A shining light that guides me through.
                  </p>
                  <p className="absolute onset-0 text-[#ED6363] text-md py-3 rounded-lg blur">
                    You've been there for me, through thick and thin,
                  </p>
                  <p className="text-md py-3">
                    You've been there for me, through thick and thin,
                  </p>
                  <p className="absolute onset-0 text-[#ED6363] text-md py-3 rounded-lg blur">
                    With a love that's unbreakable, pure and bright.
                  </p>
                  <p className="text-md py-3">
                    With a love that's unbreakable, pure and bright.
                  </p>
                  <p className="absolute onset-0 text-[#ED6363] text-md py-3 rounded-lg blur">
                    You are my rock, my support, my best friend,
                  </p>
                  <p className="text-md py-3">
                    You are my rock, my support, my best friend,
                  </p>
                  <p className="absolute onset-0 text-[#ED6363] text-md py-3 rounded-lg blur">
                    And I'm grateful for you, from morning to night.
                  </p>
                  <p className="text-md py-3">
                    And I'm grateful for you, from morning to night.
                  </p>
                  <p className="absolute onset-0 text-[#ED6363] text-md py-3 rounded-lg blur">
                    So here's a message, from your loving son,
                  </p>
                  <p className="text-md py-3">
                    So here's a message, from your loving son,
                  </p>
                  <p className="absolute onset-0 text-[#ED6363] text-md py-3 rounded-lg blur">
                    To tell you how much you're loved and adored.
                  </p>
                  <p className="text-md py-3">
                    To tell you how much you're loved and adored.
                  </p>
                  <p className="absolute onset-0 text-[#ED6363] text-md py-3 rounded-lg blur">
                    Happy Valentine's Day, Mom, you're my number one,
                  </p>
                  <p className="text-md py-3">
                    Happy Valentine's Day, Mom, you're my number one,
                  </p>
                  <p className="absolute onset-0 text-[#ED6363] text-md py-3 rounded-lg blur">
                    And I feel so blessed to have you, more and more.
                  </p>
                  <p className="text-md py-3">
                    And I feel so blessed to have you, more and more.
                  </p>
                </div>
              </div>
              <div className="relative flex-1 rounded-lg">
                <div className="duration-700 ease-in-out" data-carousel-item>
                  <Image src={family} className="shadow-xl" />
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 text-red-600 rounded-lg blur-md">
                  <BsHeartFill className="text-2xl text-red-600" />
                </div>
                <div className="h-96">
                  <BsHeartFill className="animate-pulse text-2xl text-red-600" />
                </div>
              </div>
              <div className="w-full text-center">
                <ul className="flex flex-wrap items-center justify-center text-[#f79256] text-4xl">
                  <li className="mr-10">
                    <a
                      className="cursor-pointer"
                      href="https://open.spotify.com/playlist/6TwUGwZr5KX4vibvLuGPsH?si=4661b325f5644bea"
                      target="_blank"
                    >
                      <BsSpotify className="hover:animate-wiggle" />
                    </a>
                  </li>
                  <li className="">
                    <button
                      className="cursor-pointer hover:animate-wiggle"
                      onClick={() => setShowPoem(!showPoem)}
                    >
                      {showPoem === true ? (
                        <BsFillBookmarkHeartFill />
                      ) : (
                        <AiFillLeftCircle className="animate-spin-fast" />
                      )}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {!showMsg && showPoem && (
            <div
              className="bg-[#1d4e89] relative flex flex-wrap
          mx-auto rounded-md w-[60%] p-6 m-12 items-center shadow-2xl animate-popWindow"
            >
              <div className="flex-wrap w-2/3 text-[#f79256] px-5" id="msg">
                <div className="">
                  <p className="text-3xl py-5">
                    a short valentine's message for mom
                  </p>
                  <p className="text-md py-3">
                    hi mom. for this valentine's day, i thought of making a
                    simple website for you. i coded it during the day when you
                    weren't around and stopped before you arrive home so you
                    wouldn't know that i am coding it for you haha.
                  </p>
                  <p className="text-md py-3">
                    i want you to know that i love you very much. without your
                    guidance, i wouldn't be where i am today, and i am so
                    grateful to be your son.
                  </p>
                  <p className="text-md py-3">
                    although i am not that good at expressing myself that much
                    at home, i just want you to know that i love you very much
                    and i appreciate all the things that you have done for me
                    and for the family. you are the one that keeps us together
                    despite all of our arguments and misunderstandings.
                  </p>
                  <p className="text-md py-3">
                    i am very blessed to have you as my mom and i hope you like
                    this simple act of love from me to you. i love you more than
                    words can express :D
                  </p>
                  <p className="absolute onset-0 text-[#ED6363] text-md py-3 rounded-lg blur">
                    happy valentine's day mom.
                  </p>
                  <p className="text-md py-3">happy valentine's day mom.</p>
                  <p className="absolute onset-0 text-[#ED6363] text-md py-3 rounded-lg blur">
                    your baby boy, matt
                  </p>
                  <p className="text-md py-3">your baby boy, matt</p>
                </div>
              </div>
              <div className="relative flex-1">
                <Image src={momandme} className="rounded-lg shadow-xl" />
              </div>
              <div className="relative">
                <div className="absolute inset-0 text-red-600 rounded-lg blur-md">
                  <BsHeartFill className="text-2xl text-red-600" />
                </div>
                <div className="h-96">
                  <BsHeartFill className="animate-pulse text-2xl text-red-600" />
                </div>
              </div>
              <div className="w-full text-center">
                <ul className="flex flex-wrap items-center justify-center text-[#f79256] text-4xl">
                  <li className="mr-10">
                    <button
                      className="cursor-pointer hover:animate-wiggle"
                      onClick={() => setShowMsg(!showMsg)}
                    >
                      {showMsg === true ? (
                        <RiUserHeartFill />
                      ) : (
                        <AiFillLeftCircle className="animate-spin-fast" />
                      )}
                    </button>
                  </li>
                  <li className="mr-10">
                    <a
                      className="cursor-pointer"
                      href="https://open.spotify.com/playlist/6TwUGwZr5KX4vibvLuGPsH?si=4661b325f5644bea"
                      target="_blank"
                    >
                      <BsSpotify className="hover:animate-wiggle" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
