import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <div className="m-10">
      <h1 className="text-center text-3xl">Contact</h1>

      <div className=" grid grid-cols-2 gap-4 container1">
        <Image
          className="m-1.5"
          src="/contact2.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <div className="flex flex-wrap">
          <form
            className="flex flex-col flex-wrap items-left "
            action="https://formsubmit.co/amyth2002@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_next" value="http://localhost:3000/" />
            <input type="hidden" name="_captcha" value="false"></input>
            <label htmlFor="text-lg">Name</label>
            <input
              type="text"
              name="name"
              className="bg-slate-200 rounded-lg p-4 dark:bg-neutral-900 "
              size="35"
            />
            <label>Email</label>
            <input
              type="text"
              className="bg-slate-200 rounded-lg p-4 dark:bg-neutral-900  "
              name="Email"
              size="35"
            />
            <label className="text-xxl">Message</label>
            <textarea
              name="Message"
              id=""
              cols="7"
              rows="4"
              className="bg-slate-200 rounded-lg p-4 dark:bg-neutral-900  "
            ></textarea>
            <div className="flex justify-center m-5">
              <button className="bg-indigo-400  items-center justify-center rounded-lg px-8 py-3">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
