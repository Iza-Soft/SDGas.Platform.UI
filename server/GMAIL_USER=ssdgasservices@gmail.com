# Copy this file to .env and fill in real values to send real emails.
# Without any of these set, the server falls back to a free Ethereal test
# inbox in development so the form still works end to end — but nothing
# will actually reach ssdgasservices@gmail.com until you configure one of
# the options below.

PORT=4000

# Where completed schedule requests get emailed to.
NOTIFY_EMAIL=ssdgasservices@gmail.com

# --- Option A: Gmail (simplest for a single mailbox) ---
# Gmail requires an "App Password", not your normal password:
# Google Account > Security > 2-Step Verification > App passwords
GMAIL_USER=ssdgasservices@gmail.com
GMAIL_APP_PASSWORD=

# --- Option B: any SMTP provider (used only if GMAIL_* above is empty) ---
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
