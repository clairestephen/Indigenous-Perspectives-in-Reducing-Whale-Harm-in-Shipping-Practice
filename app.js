// this is calling the libraries from ??
const { createApp, ref } = Vue;
const { createVuetify } = Vuetify;


const vuetify = createVuetify();

// THEME??
//REFERENCES??

// steps to be addressed in the next assignmnet 
// 1. ...
// 2. 

// steps made in this assignment
// 1. 

const App = {
  setup() {
    const collection = [
      {
        location: "Gitga'at First Nation, British Columbia ",
        method: "Hydrophones and Alternate Routing",
        text: "The traditional waters of the Gitga'at First Nation are home to a very dense population of humpback whales. When combined with a rapidly growing rate of ship traffic in BC, it makes ship whale strikes a rising concern. During the summer of 2023, there were three humpback strikes in three days along the pacific coast.  There has been a tremendous effort from the Gitga’at First Nation to protect the waters through research and conservation initiatives, such as the SWAG project (Ships Whales and Acoustics in Gitga’at Territory). This project focuses on monitoring ship traffic through the use of hydrophones to track ships as well as whales located in a 200km radius. The goal of this project is to suggest different ship traffic practices such as alternative routing and slow down areas to lower the impact of marine shipping on humpback habitat. ",
        image: "images/humpback.png",
        left: "10%",
        top: "70%",
        showReferenceCard: ref(false)
      },
      {
        location: "Mahalat Nation, British Columbia",
        method: "Underwater Hydrophone Stations",
        text: "British Columbia's coastal waters are populated with toothed and baleen whales as well as killer whales, humpback whales and fin whales. The marine vessel traffic through this area is currently growing, and is projected to continue  as industrial projects are implemented; vessel noise will then rise as a consequence. The noise emitted from vessels negatively impacts marine mammals' ability to hunt, communicate and breed, which poses a serious threat to the marine ecosystem and for whales in particular. Underwater hydrophone systems provide an efficient method to detect underwater soundscapes, and the impact of vessels on marine mammals as a result. The Mahalat Nation sought to understand these human non-human interactions and invested in developing 20 separate hydrophone stations to examine the underwater noises. With the data they collect, they hope to prevent damage done by vessels in their local waters. ",
        image: "images/malahat.png",
        left: "17%",
        top: "82%",
        showReferenceCard: ref(false)
      },
      {
        location: "Essipit Innu First Nation, Quebec",
        method: "Speed Reduction Areas",
        text: "Baleen whales are largely affected by the underwater noise emitted from shipping vessels traveling in the area, as seen in behavioral changes like foraging efficiency, changes in vocalizing behavior, communication masking and hearing loss. To address this critical issue, the collaborative efforts of The Conseil de la Première Nation des Innus Essipit and the Mohawk Council of Kahnawà:ke has proposed the Enhanced Maritime Situational Awareness (EMSA) approach. EMSA specifically uses Geographic Information Systems (GIS) to map whale sightings along vessel routes. This data, combined with the knowledge of Indigenous communities who understand the area, helps identify critical habitats and inform decisions on speed restrictions to reduce sound disturbance.",
        image: "images/quebec.png",
        left: "76%",
        top: "85%",
        showReferenceCard: ref(false)
      },
      {
        location: "Gjoa Haven and Resolute Communities, Nunavut",
        method: "Low Impact Shipping Corridors",
        text: "Community members from Resolute and Gjoa Haven raised concerns that the existing Arctic shipping corridors pass through ecologically and culturally significant marine areas. They recommended rerouting corridors to shift traffic away from Peel Sound and Eclipse Sound, sensitive calving grounds, nurseries, and molting areas for 5000 beluga whales. Suggesting alternative areas like M’Clintock Channel, this example shows how Inuit knowledge collected over thousands of years provides critical insights into sensitive ecosystems that would be affected by shipping activity.",
        image: "images/beluga.png",
        left: "50%",
        top: "30%", 
        showReferenceCard: ref(false)
      },
      {
        location: "Paulatuk community, NWT",
        method: "Low Impact Shipping Corridors",
        text: "Ship traffic has particularly impacted the Canadian Arctic over the past decade, nearly tripling as a result of climate change making the area navigable. The Arctic Corridors and Northern Voices (ACNV) research project was established in 2014 to incorporate Inuit perspectives into the governance of shipping routes in culturally significant marine areas. The Paulatuk community, as one of 13 communities included, recommended that part of the Arctic shipping corridor be redirected to avoid the Anguniaqvia Niqiqyuam Marine Protected Area (ANMPA) and Cape Parry sanctuary for beluga whales.",
        image: "images/nunavut.png",
        left: "20%",
        top: "35%", 
        showReferenceCard: ref(false)
      }

    ]

    // Toggle variable for example refrence card. 
    // const showReferenceCard = ref(false);

    // Navigation drawer variable to create a functional application bar icon. 
    const drawer = ref(false);

    const dialog = ref(true) // open card automatically

    const clickHereDialog = ref(false)

    function toggleClickHere(){
      clickHereDialog.value = !clickHereDialog.value;
    }

    // Toggle Function for ??
    function toggleOpenCloseReferenceCard(card) {
      if (card.showReferenceCard.value == false) {
        card.showReferenceCard.value = true;
      } else {
        card.showReferenceCard.value = false;
      }
    }


    // These are our variables specific to the sub theme of Indigenous sucess stories.
    // We plan to have 5 sets of variables, highlighting 5 different locations/groups/methods of Indigenous sucess stories from across Canada. 
    //const location = "British Columbia";
    //const group = "Mahalat Nation";
    //const method = "Underwater Acoustic Monitoring";
    // const text = "The Malahat Nation invested in underwater hydrophone stations to listen to both ships and marine mammals in their traditional territory. This allows for real time information to guide decisions on when ships should slow down or alter course to better protect marine environments."
    // const image = "images/whalemap2.jpeg"
    //const left = "14.45%" 
    //const top = "76.48%" 

  

    // this is where i return all the variables and functions
    return {
      collection,
      toggleOpenCloseReferenceCard,
      findCoordinates,
      drawer,
      dialog,
      clickHereDialog,
      toggleClickHere
    };

    // Find Coordinates Function (for placing the toggle on the map)
    function findCoordinates(event) {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const xPercent = (event.clientX / windowWidth) * 100;
      const yPercent = (event.clientY / windowHeight) * 100;
      console.log(`X: ${xPercent.toFixed(2)}%, Y: ${yPercent.toFixed(2)}%`);
    }

  }
}

createApp(App).use(vuetify).mount('#app');
