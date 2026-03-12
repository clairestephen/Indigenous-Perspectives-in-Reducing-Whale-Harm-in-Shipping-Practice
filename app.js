// This JavaScript set up pulls functions from Vue and Vuetify libraries
const { createApp, ref } = Vue;
const { createVuetify } = Vuetify;


const vuetify = createVuetify();


// This module centers around the theme of 'Indigenous Perspectives on Reducing Harm to Whales in Shipping Practices.' 
// With a focus on Canada's coasts and the First Nations and Inuit groups who govern them, this module aims to 
// highlight Indigenous ways of thinking that are often overlooked. Indigenous perspectives present a strong 
// stewardship of the marine environment that helps us understand the interactions between shipping practices and 
// local marine life. Importantly, Indigenous relational values shift the dominant narrative that humans and human activity
// is separate from other life forms of the land and sea. The case studies presented demonstrate how listening, collaboration,
// and care are valued ways of reducing harm to whales in shipping practices. 
// The map format aligns well with this theme as users navigate certain locations across Canada and their shared significance
// to whales and Indigenous people. At each point, this relationship is highlighted along with a method developed through 
// Indigenous knowledge. 


//References
// Chion, C., Lagrois, D., Dupras, J., Turgeon, S., McQuinn, I. H., Michaud, R., Ménard, N., & Parrott, L. (2017). Underwater acoustic impacts of shipping management measures: Results from a social-ecological model of boat and whale movements in the St. Lawrence River Estuary (Canada). Ecological Modelling, 354, 72–87. https://doi.org/10.1016/j.ecolmodel.2017.03.014
// Dawson, J., Carter, N., Luijk, N. van, Parker, C., Weber, M., Cook, A., Grey, K., & Provencher, J. (2020). Infusing Inuit and local knowledge into the Low Impact Shipping Corridors: An adaptation to increased shipping activity and climate change in Arctic Canada. Environmental Science & Policy, 105, 19–36. https://doi.org/10.1016/j.envsci.2019.11.013
// Hendricks, B., Pine, M. K., Baer, G., Welton, M., Symonds, H. K., Dakin, D. T., ... & Wray, J. (2025). Quantifying vessel noise and acoustic habitat loss in marine soundscapes. Marine Pollution Bulletin, 219, 118150.
// Iravani, R., Biagi, M., Laforest, S., Lee, K., Isaacman, L., Chen, Z., & An, C. (2025). Protecting shorelines in Canadian Indigenous communities: Environmental challenges, policy interventions, and mitigation technologies. Marine Pollution Bulletin, 219, 118310. https://doi.org/10.1016/j.marpolbul.2025.118310
// Keen, E., O’Mahony, É., Nichol, L., Wright, B., Shine, C., Hendricks, B., Meuter, H., Alidina, H., & Wray, J. (2023). Ship-strike forecast and mitigation for whales in Gitga’at First Nation territory. Endangered Species Research, 51, 31–58. https://doi.org/10.3354/esr01244


//Additional Resources 
// Arctic WWF (https://www.arcticwwf.org/the-circle/stories/giving-whales-the-right-of-way-over-ships/)
// Canadian Geographic (https://canadiangeographic.ca/articles/inuit-communities-consulted-in-plans-for-low-impact-arctic-shipping-routes/#:~:text=By%20Angelica%20Haggert,areas%20such%20as%20Walrus%20Island)
// Clear Seas (https://clearseas.org/insights/mitigating-underwater-noise-with-indigenous-knowledge/#:~:text=We%20can%20look%20to%20the,vessels%20in%20their%20local%20waters)
// Clear Seas (https://clearseas.org/insights/traditional-waters-modern-threats-the-gitgaats-fight-for-humpbacks/#:~:text=The%20data%20gathered%20from%20the,communication%2C%20feeding%2C%20and%20socialization.&text=The%20goal%20of%20the%20SWAG,Gitga%27at%20First%20Nation%27s%20territory.&text=Although%20the%20population%20of%20humpback,threatened%20by%20commercial%20shipping%20activity.&text=Speed%20reduction%20measures%20and%20transit,vessel%20strikes%20within%20the%20region.&text=Additional%20partnerships%20with%20local%20nations,Knowledge%20in%20marine%20research%20practices)
// Coastal First Nations (https://coastalfirstnations.ca/initiatives/marine-response-and-shipping-safety/#:~:text=Coastal%20Nations%20have%20also%20been,people%20that%20depend%20on%20them)
// Destinations Canada (https://travel.destinationcanada.com/en-us/things-to-do/polar-bears-and-narwhal-wildlife-viewing-nunavut)
// Government of Canada (https://tc.canada.ca/en/campaigns/protecting-our-coasts-oceans-protection-plan/stronger-partnerships-indigenous-coastal-communities/expanding-enhanced-maritime-situational-awareness-program)


//Steps made in this assignment: 
//1. Set up arrays of objects to organize card information
//2. Ensured that all buttons scale with the image by removing fixed height and width values
//3. Assigned each array of information to its own showReferenceCard state, updating the 
// toggleOpenCloseReferenceCard() function so that the clicked item only showed the selected card.
//4. Added a legend to our map for easy navigation and user understanding.
//5. Added toggle and pop up for user to learn more about the sources provided

const App = {
  setup() {
    const collection = [ //Each card highlights an Indigenous community along the coast that is actively taking steps to reduce whale harm in shipping routes. 
      {
        location: "Gitga'at First Nation, British Columbia ",
        method: "Hydrophones and Alternate Routing",
        text: "The traditional waters of the Gitga'at First Nation are home to a very dense population of humpback whales. When combined with a rapidly growing rate of ship traffic in BC, it makes ship whale strikes a rising concern. During the summer of 2023, there were three humpback strikes in three days along the pacific coast.  There has been a tremendous effort from the Gitga’at First Nation to protect the waters through research and conservation initiatives, such as the SWAG project (Ships Whales and Acoustics in Gitga’at Territory). This project focuses on monitoring ship traffic through the use of hydrophones to track ships as well as whales located in a 200km radius. The goal of this project is to suggest different ship traffic practices such as alternative routing and slow down areas to lower the impact of marine shipping on humpback habitat. ",
        image: "images/humpback.png",
        left: "10%",
        top: "70%",
        showReferenceCard: ref(false) //This fucntion ensures that the card doesn't automatically open, it is linked to the open and close of the toggle. 
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

   // This function makes the navigation drawer open only when the icon is clicked
    const drawer = ref(false);
   // This will open the welcome card automatically when the page is opened
    const dialog = ref(true)  
    // This will open the 'Learn More Here' button so that users can navigate to provided sources
    const clickHereDialog = ref(false)
    // This function toggles the state of a dialoge so that clicking 'Learn More Here' will open a dialoge pop up
    function toggleClickHere(){
      clickHereDialog.value = !clickHereDialog.value;
    }

    // Toggle Function for opening and closing the info cards for each selected location
    function toggleOpenCloseReferenceCard(card) {
      if (card.showReferenceCard.value == false) {
        card.showReferenceCard.value = true;
      } else {
        card.showReferenceCard.value = false;
      }
    }

    // This is where we return all the functions previously outlined 
    return {
      collection,
      toggleOpenCloseReferenceCard,
      findCoordinates,
      drawer,
      dialog,
      clickHereDialog,
      toggleClickHere
    };

    // This function allows us to find coordinates on the page to place our toggles
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
