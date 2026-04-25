"use server";

interface Feedback {
  helped: string;
  rating: number;
  comment?: string;
}

export async function submitToGoogleForms(feedback: Feedback) {
  const data = new FormData();

  data.append("entry.289399751", feedback.helped);
  data.append("entry.355951740", feedback.rating.toString());
  if (feedback.comment) {
    data.append("entry.780565988", feedback.comment);
  }

  try {
    await fetch(
      process.env.FORM_URL as string,
      {
        method: "POST",
        body: data,
        mode: "no-cors",
      }
    );

    return { success: true };
  } catch (error) {
    console.error("Erro ao enviar:", error);
    return { success: false };
  }
}