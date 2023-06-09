import React from "react";
import Image from "next/image";
import { library } from "@fortawesome/fontawesome-svg-core";
import { whatsapp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(whatsapp);

export const Contact = () => {
  return (
    <div class="m-10">
      <h1 class="text-center text-3xl">Contact</h1>

      <div class=" grid grid-cols-2 gap-4">
        <Image
          class="m-1.5"
          src="/contact2.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />

        <form
          class="flex-col flex  items-left grid m-10"
          action="https://formsubmit.co/amyth2002@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_next" value="http://localhost:3000/" />
          <input type="hidden" name="_captcha" value="false"></input>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            class="bg-slate-200 rounded-lg px-5"
            size="10"
          />
          <label>Email</label>
          <input
            type="text"
            class="bg-slate-200 rounded-lg px-5"
            name="Email"
          />
          <label>Message</label>
          <textarea
            name="Message"
            id=""
            cols="7"
            rows="4"
            class="bg-slate-200 rounded-lg p-5"
          ></textarea>
          <div class="flex justify-center m-5">
            <button class="bg-indigo-400 w-36 h-30 items-center justify-center rounded-lg">
              Send
            </button>
            <FontAwesomeIcon icon="whatsapp" />
          </div>
        </form>
      </div>
    </div>
  );
};
