"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function HowToUse() {
  return (
    <div>
      <Header />

      <div className="prose max-w-screen-lg mx-auto px-4 py-12">
        <h1 id="telegram-bot-user-guide">Telegram Bot User Guide</h1>
        <p>This Telegram bot allows you to manage and preview research paper prompts. Here&#39;s how to use its features:</p>
        <h2 id="getting-started">Getting Started</h2>
        <ol>
          <li>Start a chat with the bot on Telegram.</li>
          <li>Use the <code>/start</code> command to register your account with the bot.</li>
        </ol>
        <h2 id="available-commands">Available Commands</h2>
        <h3 id="-start-"><code>/start</code></h3>
        <p>Registers your account with the bot. Use this command when you first interact with the bot.</p>
        <h3 id="-help-"><code>/help</code></h3>
        <p>Displays a list of all available commands and their descriptions.</p>
        <h3 id="-add_prompt-your-prompt-"><code>/add_prompt &lt;your prompt&gt;</code></h3>
        <p>Adds a new prompt to your account. The bot will query this prompt twice a day for relevant research papers.</p>
        <p>Example: <code>/add_prompt Latest developments in quantum computing</code></p>
        <h3 id="-delete_prompt-"><code>/delete_prompt</code></h3>
        <p>Displays a list of your current prompts. Click on a prompt to delete it from your account.</p>
        <h3 id="-get_prompts-"><code>/get_prompts</code></h3>
        <p>Shows a list of all your currently saved prompts.</p>
        <h3 id="-preview_prompt-your-prompt-"><code>/preview_prompt &lt;your prompt&gt;</code></h3>
        <p>Previews potential research papers for a given prompt. This command returns up to 6 papers related to your prompt, including their titles and links.</p>
        <p>Example: <code>/preview_prompt Advancements in machine learning algorithms</code></p>
        <h3 id="-stop-"><code>/stop</code></h3>
        <p>Deletes your account and all associated data from the bot&#39;s database.</p>
        <h2 id="tips">Tips</h2>
        <ul>
          <li>When adding or previewing a prompt, make sure to include the prompt text after the command.</li>
          <li>You can have multiple prompts associated with your account.</li>
          <li>Use the preview feature to test out prompts before adding them to your regular query list.</li>
          <li>If you&#39;re unsure about any feature, use the <code>/help</code> command for a quick reference of all available commands.</li>
        </ul>
        <h2 id="privacy">Privacy</h2>
        <ul>
          <li>Your prompts and user data are stored securely in the bot&#39;s database.</li>
          <li>You can delete your account at any time using the <code>/stop</code> command.</li>
        </ul>
        <p>Enjoy using the Research Paper Prompt Bot!</p>
      </div>

      <Footer />
    </div>
  )
}