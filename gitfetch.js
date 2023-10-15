// GO TO LINK 57 AND ADD YOURSELF AFTER THE LAST PERSON

const githubIcon = `
<svg  class="icon" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0"><g fill="#fff"><ellipse cx="9.5" cy="9" rx="1.5" ry="1"/><ellipse cx="14.5" cy="9" rx="1.5" ry="1"/></g></mask><g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="30" stroke-dashoffset="30" d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="30;0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="10;0"/><animate attributeName="d" dur="3s" repeatCount="indefinite" values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"/></path></g><rect width="8" height="4" x="8" y="11" fill="black" mask="url(#lineMdGithubLoop0)"><animate attributeName="y" dur="10s" keyTimes="0;0.45;0.46;0.54;0.55;1" repeatCount="indefinite" values="11;11;7;7;11;11"/></rect>
</svg>
`;

const linkedinIcon = `
<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><circle cx="4" cy="4" r="2" fill="#0a66c2" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" dur="0.4s" values="0;1"/></circle><g fill="none" stroke="#0a66c2" stroke-linecap="round" stroke-width="4"><path stroke-dasharray="12" stroke-dashoffset="12" d="M4 10V20"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M10 10V20"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"/></path><path stroke-dasharray="24" stroke-dashoffset="24" d="M10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15V20"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.5s" values="24;0"/></path></g>
</svg>
`;
// Function to add a user profile with GitHub username and LinkedIn ID
function addProfile() {
  const githubUsername = document.getElementById("githubUsername").value;
  const linkedinID = document.getElementById("linkedinID").value;

  // Check if both GitHub username and LinkedIn ID are provided
  if (githubUsername && linkedinID) {
    fetchGitHubData(githubUsername, linkedinID);
  } else {
    alert("Please enter both GitHub username and LinkedIn ID.");
  }
}

// Function to fetch and display GitHub user data
async function fetchGitHubData(username, linkedinID) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error("GitHub API request failed");
    }
    const data = await response.json();

    // Create a card for the user
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <img class="profile-pic" src="${
              data.avatar_url
            }" alt="Profile Picture">
            <div class="name">${data.name || username}</div>
            <div class="links">
                <a href="${data.html_url}" target="_blank">${githubIcon}</a>
                <a href="https://www.linkedin.com/in/${linkedinID}" target="_blank">${linkedinIcon}</a>
            </div>
        `;
    document.getElementById("profileContainer").appendChild(card);
  } catch (error) {
    console.error(error);
    alert("Failed to fetch GitHub data for " + username);
  }
}

// : Fetch GitHub data for multiple usernames with LinkedIn IDs add your git hub username and linkedin user id
const profiles = [
  { githubUsername: "boltjazz", linkedinID: "boltjazz" },
  { githubUsername: "Ananyasingh2002 ", linkedinID: "ananya-singh-29b304224" },
  { githubUsername: "Shambsri21", linkedinID: "savita-srivastava-9b81b3288" },
  { githubUsername: "Rishabh0097", linkedinID: "rishabh-kumar-7a762928a" },
  { githubUsername: "DomeT99", linkedinID: "domenico-tenace" },
  { githubUsername: "adityagupta19", linkedinID: "adityagupta11219" },
  { githubUsername: "msami625", linkedinID: "muhammad-sami-bhat" },
  { githubUsername: "digvijaysinghh", linkedinID: "digvijaysinghh" },
  {
    githubUsername: "chrishenderson07",
    linkedinID: "christopher-henderson-633495241",
  },
  { githubUsername: "Rythm18", linkedinID: "ridham-khandar-a71841227" },
  {
    githubUsername: "farukhfrk",
    linkedinID: "mahammad-farukh-uddin-aa16381ba",
  },
  { githubUsername: "bkpecho", linkedinID: "bkpecho" },
  { githubUsername: "Amit41z", linkedinID: "amit-kumar-ghosh-185165199" },
  { githubUsername: "SyedSumaimaly", linkedinID: "syed-sumaim-al" },
  {
    githubUsername: "SalamanderCtesiphon",
    linkedinID: "shannon-brookshire-817577265",
  },
  { githubUsername: "nmnarora600", linkedinID: "namanarora600" },
  { githubUsername: "Ravipandey24", linkedinID: "ravi-pandey-610971183" },
  { githubUsername: "sophiya02", linkedinID: "sophiya02" },
  { githubUsername: "darshitdudhaiya", linkedinID: "darshitdudhaiya" },
  { githubUsername: "27Shri03", linkedinID: "shriram-bhardwaj-b08791220" },
  { githubUsername: "vaibhavsahu1290", linkedinID: "vaibhav-sahu-ba5a8528b" },
  { githubUsername: "Rimjhim-mm", linkedinID: "rimjhim-tiwari-a391a7253" },
  { githubUsername: "Ayus3h", linkedinID: "ayush-yadav-57134728b" },
  { githubUsername: "drifterDev", linkedinID: "mateo-álvarez-murillo-34679b259" },
  { githubUsername: "Beast2792", linkedinID: "mateo-álvarez-murillo-34679b259" },

  // Add more profiles as needed

  // Add more profiles as needed
];

profiles.forEach((profile) => {
  fetchGitHubData(profile.githubUsername, profile.linkedinID);
});
