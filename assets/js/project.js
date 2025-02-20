/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "S-Process Funding",
    // cardImage: "https://res.cloudinary.com/lesswrong-2-0/image/upload/v1629337707/Space_Colonization_Architecture5_e8uuty.png",
    cardImage: "https://static.wixstatic.com/media/3e0e39_afc49c164de547d182b15640f16256c6~mv2.png",
    description: "A student friendly site to manage their academics.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "https://beneficent-dashboard.onrender.com/",
    Githublink: "https://github.com/pavan-k-teja/Student-Dashboard",
  },
  {
    title: "Student Dashboard",
    cardImage: "assets/images/project-page/student-dashboard.png",
    description: "A student friendly site to manage their academics.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "https://beneficent-dashboard.onrender.com/",
    Githublink: "https://github.com/pavan-k-teja/Student-Dashboard",
  },
  {
    title: "Kickstart",
    cardImage: "assets/images/project-page/kickstart.jpg",
    description: "Website to help entrepreneurs buy or sell startups.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "https://kickstart-client.vercel.app/",
    Githublink: "https://github.com/pavan-k-teja/Kickstart",
  },
  {
    title: "Ethereum Marketplace",
    cardImage: "assets/images/project-page/ethereum.jpg",
    description: "A marketplace powered by blockchain technology.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/pavan-k-teja/ethereum-marketplace",
  },
  {
    title: "Pocket Cube Solver",
    cardImage: "assets/images/project-page/cube.jpg",
    description: "API to get all optimal solutions of a given pocket cube position.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://pocket-cube-solver.vercel.app/",
    Githublink: "https://github.com/pavan-k-teja/pocket-cube-solver",
  },
  {
    title: "Meme Share",
    cardImage: "assets/images/project-page/meme.png",
    description: "Android app to view and share latest memes on Reddit.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/pavan-k-teja/Meme-Share",
  },
  {
    title: "DSA Journey",
    cardImage: "assets/images/project-page/dsa.jpg",
    description: "My DSA pactice questions documented everyday.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/pavan-k-teja/DSA-Journey",
  }
  
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, description, tagimg, Previewlink, Githublink }) => {
      if(Previewlink!=="") {
        (output += `       
          <div class="column skill-card card" style="margin: 15px">
            <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
              <div class="header">
              </div>
              <div class="data">
                <div class="content">
                <div class="title-div">
                  <h1 class="title"><a href="#">${title}</a></h1>
                  ${description}
                </div>
                  <ul class="menu-content"><br>
                    

                    <li><a href="${Previewlink}" target="_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>

                    
                    <li><a href="${Githublink}" target="_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>`
        )
      }

      else{
        (output += `       
        <div class="column skill-card card" style="margin: 15px">
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                ${description}
              </div>
                <ul class="menu-content"><br>
                  
                  
                  <li><a href="${Githublink}" target="_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`
        )
      }
    }
  );
  projectcards.innerHTML = output;


};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
