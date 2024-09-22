import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error fetching prompts" }), {
      status: 500,
    });
  }
};
