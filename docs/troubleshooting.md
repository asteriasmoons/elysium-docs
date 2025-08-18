---
sidebar_position: 3
---

# 🛠 Troubleshooting

Running into issues? Here are a few quick things to check before reaching out for help.

<hr className="md-divider-gradient" />

### ❓ Slash Commands Aren’t Working
- Make sure the bot has Administrator permissions.
- Double-check that you're typing commands in a text channel the bot can see.
- Try kicking the bot and re-inviting it using the Invite button with full permissions.
- Wait a few minutes — Discord can take time to sync commands after inviting a bot.

<hr className="md-divider-gradient" />

### 🚫 Command Says "Missing Permissions"
:::danger
**Ensure Pandoryx has the required server-level permissions:** Manage Roles, Manage Channels, Send Messages, Embed Links, etc.
:::

If the command targets another user or role, make sure Pandoryx’s role is above the target in the role hierarchy.

<hr className="md-divider-gradient" />

### 🎟️ Tickets Aren’t Opening
- Did you run `/ticketpanel create` in a channel where the bot has:
  - Manage Channels
  - Create Public/Private Threads (if applicable)
- Make sure the panel message wasn't accidentally deleted or overwritten.

<hr className="md-divider-gradient" />

### 🐛 How to Report a Bug
If something seems broken or isn't working the way it should, please help us help you by including the following when you report it:

✅ What to include in your comment:
- A clear description of the bug
- What command you used (e.g., `/warn`, `/embed create`, etc.)
- What happened vs. what you expected to happen
- Steps to reproduce it.
- Any error messages shown by the bot (copy/paste if applicable)
- Whether you’re an admin or testing with a lower role

#### 💬 Please do not open a new issue.
:::danger
Instead, comment on the pinned Bug Reports thread in the Issues tab. The more details you give, the faster we can fix it. 🛠️
:::

<hr className="md-divider-gradient" />

### 💬 Still Stuck?
[**Join the Elyxia Bots Support Server**](https://discord.gg/jS5eTjhK7R) and someone will be happy to help!