import React from "react";
import Image from "next/image";

export const Contact = () => {
  return (
    <div class="m-10">
      <h1 class="text-center text-3xl">Contact</h1>

      <div class=" grid grid-cols-2 gap-4 container1">
        <Image
          class="m-1.5"
          src="/contact2.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <div class="flex flex-wrap">
          <form
            class="flex flex-col flex-wrap items-left "
            action="https://formsubmit.co/amyth2002@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_next" value="http://localhost:3000/" />
            <input type="hidden" name="_captcha" value="false"></input>
            <label htmlFor="text-lg">Name</label>
            <input
              type="text"
              name="name"
              class="bg-slate-200 rounded-lg p-4 dark:bg-neutral-900 "
              size="35"
            />
            <label>Email</label>
            <input
              type="text"
              class="bg-slate-200 rounded-lg p-4 dark:bg-neutral-900  "
              name="Email"
              size="35"
            />
            <label class="text-xxl">Message</label>
            <textarea
              name="Message"
              id=""
              cols="7"
              rows="4"
              class="bg-slate-200 rounded-lg p-4 dark:bg-neutral-900  "
            ></textarea>
            <div class="flex justify-center m-5">
              <button class="bg-indigo-400  items-center justify-center rounded-lg px-8 py-3">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
