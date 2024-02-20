import Content2Items from "./Content2Items";

const contentData = [
    {
        photo:"./images/matcha1.jpeg",
        title: "Reset and Recharge",
        desc: "Delightfully sweet and perfectly fruity, enjoy every sip of the Honey Plum Pure Matcha Latte",
        btn: "Sip, sip, go",
        bgcolor: "#1E3932",
        color: "#D4E9E2",
       
    },
    {
        photo:"./images/cakes.jpeg",
        title: "Good Eats All-day",
        desc: " Find moments of calm and connection with these delightful treats.",
        btn: "Explore",
        bgcolor: "#1E3932",
        color: "#D4E9E2",
        btnmrg: "1.8rem",
    },
    {
        photo:"./images/tumbler.jpeg",
        title: "Coffee and Tea Tumbler",
        desc: "Fill your favorite drink and go whereever the day takes you.",
        btn: "See more",
        bgcolor: "#D4E9E2",
    },
    {
        photo:"https://starbucks.ph/seed_data/Starbucks_Delivers_-_Homepage.jpg",
        title: "No time to head out?",
        desc: "Have your favorites delivered straight to your doorstep.",
        btn: "Learn more",
        bgcolor: "#D4E9E2",
        wdt: "100%",
        ht:"20.82rem",
        dp: "inline"

    },
];


function Content2 (){
    return <div className="content-card-container">
       
                {contentData.map( cardHome => <Content2Items itemObj={cardHome}/>)}

                 
       
            
    </div>
}
export default Content2;