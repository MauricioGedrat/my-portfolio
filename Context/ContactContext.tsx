import React, { createContext, ReactNode } from "react";

interface ContactProps {
  children: ReactNode;
}
interface ContactContextType {
  sendEmail: (e: any) => void;
}

export const ContactContext = createContext({} as ContactContextType);

export interface FormValues {
  name: string;
  email: string;
  message: string;
}

export const ContactContextProvider = ({ children }: ContactProps) => {
  const sendEmail = (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.namedItem("name") as HTMLInputElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const message = form.elements.namedItem("message") as HTMLTextAreaElement;

    const formValues: FormValues = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((response) => {
        alert("Email enviado com sucesso");
      })
      .catch((error) => {
        alert("Erro ao enviar o Email");
      });
  };

  return (
    <ContactContext.Provider value={{ sendEmail }}>
      {children}
    </ContactContext.Provider>
  );
};
