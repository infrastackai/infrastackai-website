import { z } from "zod";

export const requestEarlyAccessSchema = z.object({
    name: z.string().min(3, {
        message: "Name must be at least 3 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }).refine((email) => {
        return !email.endsWith("@gmail.com") && !email.endsWith("@yahoo.com") && !email.endsWith("@hotmail.com") && !email.endsWith("@outlook.com");
    }, {
        message: "Please use a work email address.",
    }),
    focus: z.array(z.enum(["infrastructure", "sre", "devops", "secops", "finops", "productivity"])).optional().default([]),
    referral: z.enum(["friend", "colleague", "linkedin", "x", "google", "other", '']).optional().default(''),
    problem: z.string().optional().default('')
})
