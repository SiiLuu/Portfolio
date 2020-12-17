import React from "react";
import emailjs from "emailjs-com";
import { store } from "react-notifications-component";

import useWindowPosition from "../hook/useWindowPos";

const Form = () => {
  const animated = useWindowPosition("header", 0.6, 4);
  const styleTranslate = "translate-y-10 opacity-0";
  const transition = (duration) =>
    `transition duration-${duration} ease-in-out`;

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      e.target.email.value.length === 0 ||
      e.target.subject.value.length === 0 ||
      e.target.message.value.length === 0
    ) {
      store.addNotification({
        title: "Attention !",
        message: "Veuillez remplir tous les champs!",
        type: "warning",
        insert: "bottom",
        container: "bottom-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 7000,
          onScreen: true,
        },
      });
      e.target.email.value = "";
      e.target.subject.value = "";
      e.target.message.value = "";
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE,
          process.env.REACT_APP_TEMPLATE,
          e.target,
          process.env.REACT_APP_USER
        )
        .then(
          (result) => {
            store.addNotification({
              title: "Merci !",
              message: "Votre message a bien était envoyé!",
              type: "success",
              insert: "bottom",
              container: "bottom-center",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                duration: 7000,
                onScreen: true,
              },
            });
          },
          (error) => {
            store.addNotification({
              title: "Erreur !",
              message: "Votre message n'a pas était envoyé !",
              type: "danger",
              insert: "bottom",
              container: "bottom-center",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                duration: 7000,
                onScreen: true,
              },
            });
          }
        );
    }
  };

  return (
    <>
      <form
        onSubmit={sendEmail}
        className={`flex flex-col transform  ${
          animated ? "translate-y-0" : styleTranslate
        } ${transition(1000)}`}
      >
        <input
          className="rounded-md mb-5 p-3"
          type="text"
          name="email"
          placeholder="Adresse mail"
        />
        <input
          className="rounded-md mb-5 p-3"
          type="text"
          name="subject"
          placeholder="Sujet"
        />
        <textarea
          style={{ maxHeight: "12rem", minHeight: "12rem" }}
          className="rounded-md mb-5 p-3 h-48"
          name="message"
          placeholder="Message"
          cols="30"
          rows="10"
        ></textarea>
        <button
          type="submit"
          className={`mb-2 bg-indigo-500 px-10 py-3 text-lg uppercase text-white rounded-lg hover:bg-indigo-300 transform  ${
            animated ? "translate-y-0" : styleTranslate
          } ${transition(1000)}`}
        >
          Envoyer
        </button>
      </form>
    </>
  );
};

export default Form;
