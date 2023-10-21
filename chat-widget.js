// const iframeHeight = "700px";
const scriptTag = document.currentScript;
const iframeHeight = scriptTag.getAttribute("data-iframe-height");
const website = scriptTag.getAttribute("website");
const id = scriptTag.getAttribute("id");
function createButtonX() {
  
  async function GetCustomize() {
    // const response = await fetch(`https://www.virsay.com/api/widget?id=${id}`);
    const response = await fetch(`https://www.virsay.com/api/widget?id=525bc346-b740-4708-837e-0aa4a8c249ac`);
    const data = await response.json();
    return data;
  }
  async function s() {
    const theCustome = await GetCustomize();
    // setUserEmail(theCustome?.[0].email);
    console.log(theCustome?.[0].email);
    // alert(theCustome?.[0].email)
  }
  s();
  const container = document.createElement("div");
  container.style.display = "inline-block";
  container.style.verticalAlign = "middle";
  container.style.width = "3rem"; // Equivalent to Tailwind's w-12
  container.style.height = "3rem"; // Equivalent to Tailwind's h-12
  container.style.borderRadius = "50%"; // Equivalent to Tailwind's rounded-full
  container.style.position = "relative";

  const img = document.createElement("img");
  img.src = "https://virsay.com/Rectangle.png";
  img.style.position = "fixed";
  img.style.right = "1rem"; // Equivalent to Tailwind's right-4
  img.style.bottom = "1rem"; // Equivalent to Tailwind's bottom-4
  img.style.margin = "auto";
  img.style.width = "4rem"; // Equivalent to Tailwind's w-16
  img.style.height = "4rem"; // Equivalent to Tailwind's h-16
  img.style.cursor = "pointer";

  const iframeContainer = document.createElement("div");
  iframeContainer.style.position = "fixed";
  iframeContainer.style.right = "1rem"; // Equivalent to Tailwind's right-4
  iframeContainer.style.bottom = "1rem"; // Equivalent to Tailwind's bottom-4
  iframeContainer.style.width = "24rem"; // Equivalent to Tailwind's w-96
  iframeContainer.style.marginTop = "3rem"; // Equivalent to Tailwind's mt-12
  iframeContainer.style.marginBottom = "5rem"; // Equivalent to Tailwind's mb-20
  iframeContainer.style.display = "none"; // Initial hidden state

  const iframe = document.createElement("iframe");
  // iframe.src = "https://virsay.com";
  iframe.src = website;
  iframe.style.width = "100%"; // Equivalent to Tailwind's w-full
  iframe.style.height = iframeHeight; // Equivalent to Tailwind's h-80
  iframe.style.border = "none";

  const button = document.createElement("button");
  button.textContent = "Live";

  // Toggle chat visibility on image click
  img.addEventListener("click", function () {
    iframeContainer.style.display =
      iframeContainer.style.display === "none" ||
      iframeContainer.style.display === ""
        ? "block"
        : "none";
    
  });

  // Append elements to the document body
  container.appendChild(img);
  iframeContainer.appendChild(iframe);
  document.body.appendChild(iframeContainer);
  document.body.appendChild(container);
  document.body.appendChild(button);
}

createButtonX();
