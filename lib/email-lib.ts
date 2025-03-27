import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";

export async function sendEmail(params: any) {
  if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
    throw new Error("AWS credentials are not set");
  }

  const client = new SESClient({
    region: "us-west-1",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }
  });


  const { to, name, email, focus, referral, problem } = params


  const host = process.env.NEXT_BASE_URL || ""

  const app = {
    title: "InfraStack AI",
    name: "Infrastack.ai",
    url: "https://infrastack.ai",
  }

  const command = new SendEmailCommand({
    Destination: {
      ToAddresses: [to]
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: html({ to, name, email, app, focus, referral, problem, host })
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: `InfraStack AI - Request for Early Access`
      }
    },
    Source: "hello@infrastack.ai"
  });

  const response = await client.send(command);
  if (response.MessageId) {
    return { success: true }
  } else {
    return { success: false }
  }
}

function html(params: { to: string; app: any; name: string; email: string; focus: string[]; referral: string; problem: string; host: string }) {
  const { to, app, name, email, focus, referral, problem, host } = params

  const escapedHost = host.replace(/\./g, "&#8203;.")

  const brandColor = "#6366f1"
  const color = {
    background: "#f9f9f9",
    text: "#444",
    mainBackground: "#fff",
    buttonBackground: brandColor,
    buttonBorder: brandColor,
    buttonText: "#fff",
  }

  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!--$-->
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
  </head>
  <div
    style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0"
  >
     New Request for Early Access Submitted
    <div>

    </div>
  </div>
  <body style="background-color:#ffffff">
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="max-width:37.5em;padding-left:12px;padding-right:12px;margin:0 auto"
    >
      <tbody>
        <tr style="width:100%">
          <td>
            <h1
              style="color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;font-size:30px;font-weight:bold;margin:40px 0;padding:0;margin-bottom:10px"
            >
              New Request for Early Access Submitted
            </h1>
            <p
              style="font-size:14px;line-height:24px;margin:24px 0;color:#333;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;margin-bottom:12px"
            >
              ${name} (${email}) has requested early access to InfraStack AI.
            </p>
            <p>
              Focus: ${focus.join(', ')}
            </p>
            <p>
              Problem: ${problem}
            </p>
            <a
              href="${email.split('@')[1]}"
              style="line-height:100%;text-decoration:none;display:block;max-width:100%;mso-padding-alt:0px;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;background-color:#656ee8;border-radius:5px;color:#fff;font-size:16px;font-weight:semibold;text-align:center;width:200px;padding:16px 16px 16px 16px"
              target="_blank"
              ><span
                ><!--[if mso
                  ]><i style="mso-font-width:400%;mso-text-raise:24" hidden
                    >&#8202;&#8202;</i
                  ><!
                [endif]--></span
              ><span
                style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:12px"
                >View Company</span
              ><span
                ><!--[if mso
                  ]><i style="mso-font-width:400%" hidden
                    >&#8202;&#8202;&#8203;</i
                  ><!
                [endif]--></span
              ></a
            >
            <p
              style="font-size:14px;line-height:24px;margin:24px 0;color:#ababab;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;margin-top:14px;margin-bottom:36px"
            >
              If you did not request this email, you can safely ignore it.
            </p>
            <img
              alt="${app.title}&#x27;s Logo"
              height="32"
              src="https://s3.us-west-2.amazonaws.com/infrastack.dev/logo-gray.jpg"
              style="display:block;outline:none;border:none;text-decoration:none;border-radius:6px"
              width="32"
            />
            <p
              style="font-size:12px;line-height:22px;margin:16px 0;color:#898989;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;margin-top:12px;margin-bottom:24px"
            >
              <a
                href="${app.url}"
                style="color:#898989;text-decoration-line:none;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif;font-size:14px;text-decoration:underline"
                target="_blank"
                >${app.name}</a
              >, Autonomous AI for Engineering Operations
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
<!--/$-->
  `
}