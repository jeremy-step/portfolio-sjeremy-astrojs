# About

Hi! My name is Jeremy. I am a web developer with over a decade of experience in creating stunning and functional websites!

Here you can find the source code of my portfolio.

It's built on Astro JS and hosted on GitHub Pages.

## How does the contact form work if GitHub Pages doesn't support POST requests?

I use Cloudflare workers that send the POST request to my personal server and process it.  
Then I return the data as a query string, create a new response and redirect back to the page with the updated URL.

In the future I plan to change this to work via AJAX and return a JSON response instead.

---

Web: [portfolio.sjeremy.dev](https://portfolio.sjeremy.dev)

---

### TODO

- Fix timeline styles on mobile
- Fix contact form
- Add call to action buttons to home page banner and featured projects timeline