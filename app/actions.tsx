'use server'

import { sendEmail } from "@/lib/email-lib"
import { requestEarlyAccessSchema } from "@/lib/schemas"
import { z } from "zod"

export async function submitRequestEarlyAccess(formData: z.infer<typeof requestEarlyAccessSchema>) {
    const validatedFields = requestEarlyAccessSchema.safeParse({
        name: formData.name,
        email: formData.email,
        focus: formData.focus,
        referral: formData.referral,
        problem: formData.problem,
    })

    if (!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors }
    }

    const { name, email, focus, referral, problem } = validatedFields.data
    // TODO: make openai call to get priority
    const priority = problem === 'urgent' ? '🔴 *URGENT*' : '🟢 *MEDIUM*'
    const company = email.split('@')[1]

    const focusFields = focus.map((item: string) => ({
        "type": "mrkdwn",
        "text": `• ${item}`
    }))

    // send a slack with this webhook
    // https://hooks.slack.com/services/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
    const webhookUrl = process.env.SLACK_WEBHOOK_URL
    if (!webhookUrl) {
        return { error: "Slack webhook URL is not set." }
    }

    const slackPayload = {
        "blocks": [
            {
                "type": "header",
                "text": {
                    "type": "plain_text",
                    "text": "New Early Access Request",
                    "emoji": true
                }
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*User Information:*"
                }
            },
            {
                "type": "section",
                "fields": [
                    {
                        "type": "mrkdwn",
                        "text": `*Name:*\n${name}`
                    },
                    {
                        "type": "mrkdwn",
                        "text": `*Company:*\n${company}`
                    },
                    {
                        "type": "mrkdwn",
                        "text": `*Email:*\n${email}`
                    },
                    {
                        "type": "mrkdwn",
                        "text": `*Priority:*\n${priority}`
                    }
                ]
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*Focus:*"
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "User selected the following options:"
                }
            },
            {
                "type": "section",
                "fields": focusFields
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*Problem:*"
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": problem
                }
            },
            {
                "type": "divider"
            },
            {
                "type": "context",
                "elements": [
                    {
                        "type": "mrkdwn",
                        "text": `⏰ Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} (PST)`
                    }
                ]
            },
            //   {
            //     "type": "actions",
            //     "elements": [
            //       {
            //         "type": "button",
            //         "text": {
            //           "type": "plain_text",
            //           "text": "Claim Request",
            //           "emoji": true
            //         },
            //         "value": "claim_request",
            //         "action_id": "claim_request"
            //       },
            //       {
            //         "type": "button",
            //         "text": {
            //           "type": "plain_text",
            //           "text": "View Details",
            //           "emoji": true
            //         },
            //         "value": "view_details",
            //         "action_id": "view_details"
            //       }
            //     ]
            //   }
        ]
    }

    const response = await fetch(webhookUrl, {
        method: "POST",
        body: JSON.stringify(slackPayload),
    })

    if (!response.ok) {
        console.error('Failed to send Slack notification', response)
    }

    // use sns email to send email to support@infrastack.io as fallback
    const emailResponse = await sendEmail({
        to: 'hello@infrastack.ai',
        name: name,
        email: email,
        focus: focus,
        referral: referral,
        problem: problem,
    })

    if (!emailResponse.success) {
        console.error('Failed to send email', emailResponse)
        return { error: 'Failed to send email' }
    }

    return { success: true }
}