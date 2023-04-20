import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { WhatsSvg } from "../SvgComponents/WhatsSvg";
import * as styles from "../../styles/ContactStyles";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xoqzaaab");

  return (
    <div id="contact" className={styles.contactStylesContainer}>
      <div className={styles.contactStylesTtileContainer} id="projects">
        <h1
          data-aos="zoom-in"
          data-aos-duration={2000}
          className={styles.contactStylesTitle}
        >
          Lets talk
        </h1>
      </div>
      <form onSubmit={handleSubmit} action="https://formspree.io/f/xoqzaaab">
        <div>
          <label className={styles.contactStylesLabel} htmlFor="name">
            Name
          </label>
        </div>
        <div>
          <input
            id="name"
            type="text"
            name="name"
            className={styles.contactStylesInput}
          />
        </div>
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <div>
          <label className={styles.contactStylesLabel} htmlFor="email">
            Email Address
          </label>
        </div>
        <div>
          <input
            id="email"
            type="email"
            name="email"
            className={styles.contactStylesInput}
          />
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <div>
          <label className={styles.contactStylesLabel} htmlFor="message">
            Message
          </label>
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            className={styles.contactStylesInput}
          />
        </div>

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="md:flex gap-[20px]">
          <button
            type="submit"
            className={styles.contactStylesSubmitButton}
            disabled={state.succeeded}
          >
            Send
          </button>
          <div>
            <a
              className={styles.contactStylesWhatsButton}
              href="https://api.whatsapp.com/send/?phone=5551997967855"
            >
              Whatsapp <WhatsSvg />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
