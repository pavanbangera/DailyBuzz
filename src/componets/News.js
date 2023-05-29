import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
    articals = [
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "NHL Western Conference Final Game 5 Highlights | Stars vs. Golden Knights - May 27, 2023 - SPORTSNET",
            "description": "Ty Dellandrea scored two goals in the third period and Jake Oettinger turned aside 27 shots to help the Dallas Stars force Game 6 with a 4-2 victory against ...",
            "url": "https://www.youtube.com/watch?v=1Zv6peOteRY",
            "urlToImage": "https://i.ytimg.com/vi/1Zv6peOteRY/maxresdefault.jpg",
            "publishedAt": "2023-05-28T02:59:29Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "KGO-TV"
            },
            "author": null,
            "title": "State Farm will no longer insure new homes in California due to wildfire risk, construction costs - KGO-TV",
            "description": "State Farm is the second insurance company to stop offering coverage due to wildfires. In the past six years, California has experienced a record number of wildfires.",
            "url": "https://abc7news.com/california-state-farm-home-insurance-wildfire/13308135/",
            "urlToImage": "https://cdn.abcotvs.com/dip/images/13309224_052723-kgo-state-farm-img.jpg?w=1600",
            "publishedAt": "2023-05-28T01:30:00Z",
            "content": "SANTA ROSA, Calif. (KGO) -- A big announcement this holiday weekend from of the country's biggest insurance companies. State Farm says effective Saturday, it will no longer insure new homes or busine… [+2414 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Jada Yuan",
            "title": "Justine Triet wins top prize at Cannes for 'Anatomy of a Fall' - The Washington Post",
            "description": "The French filmmaker is just the third female director to win the Palme d’Or, after Jane Campion and Julia Ducournau.",
            "url": "https://www.washingtonpost.com/lifestyle/2023/05/27/cannes-palm-dor-justine-triet-anatomy-of-a-fall/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/B6EVUT7T33O4R5DA7WC6X6AOBU_size-normalized.jpg&w=1440",
            "publishedAt": "2023-05-28T01:23:00Z",
            "content": "Comment on this story\r\nComment\r\nCANNES, France In the seconds before the Palme dOr was announced at Saturday nights closing ceremony of the Cannes Film Festival, the crowdfeltready to explode to its … [+5201 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Mike Vaccaro",
            "title": "Carmelo Anthony not only Knicks legend whose number should be retired - New York Post ",
            "description": "The Knicks aren’t embracing their storied history like the Mets and Yankees.",
            "url": "https://nypost.com/2023/05/27/carmelo-anthony-not-only-knicks-legend-whose-number-should-be-retired/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/05/newspress-collage-27244633-1685230068434.jpg?quality=75&strip=all&1685215728&w=1024",
            "publishedAt": "2023-05-28T00:51:00Z",
            "content": "The Mets have done some excellent work the past couple of years trying to honor their history in the unique manner only sports teams can: They have begun to recognize the importance of retiring numbe… [+6041 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Kyiv under new massive Russian drone attack, Vitaliy Klitschko says - BBC",
            "description": "The city's mayor says one man is killed in Ukraine's capital, and more than 20 drones are shot down.",
            "url": "https://www.bbc.com/news/world-65736730",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/94DD/production/_129890183_kyiv.jpg",
            "publishedAt": "2023-05-28T00:46:08Z",
            "content": "Russia has launched a new massive overnight drone attack on Ukraine's capital Kyiv, killing at least one person, local officials have said.\r\nKyiv's mayor Vitaliy Klitschko said a man died when drone … [+1655 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Eric Bradner,Zoe Sottile,Andy Rose",
            "title": "Texas House of Representatives votes to impeach Attorney General Ken Paxton - CNN",
            "description": "The Texas House of Representatives has voted to impeach Attorney General Ken Paxton, an unprecedented move following a legislative probe that faulted the third-term Republican for a yearslong pattern of corruption, including abusing his office’s powers, retal…",
            "url": "https://www.cnn.com/2023/05/27/politics/ken-paxton-impeachment-texas-house/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230527163312-ken-paxton-impeachment-vote-0526.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-05-27T23:56:00Z",
            "content": "The Texas House of Representatives has voted to impeach Attorney General Ken Paxton, an unprecedented move following a legislative probe that faulted the third-term Republican for a yearslong pattern… [+10174 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KSL.com"
            },
            "author": "https://www.facebook.com/kslcom/",
            "title": "LGBTQ brand creator 'relieved' after Target pulls his items off shelves due to backlash - KSL.com",
            "description": "The creator of a brand of LGBTQ products said he was relieved when Target decided to pull his items from their shelves after he and the retailer received threats and hateful messages.",
            "url": "https://www.ksl.com/article/50654395/lgbtq-brand-creator-relieved-after-target-pulls-his-items-off-shelves-due-to-backlash",
            "urlToImage": "https://img.ksl.com/slc/2931/293193/29319301.jpg?filter=kslv2/responsive_story_lg",
            "publishedAt": "2023-05-27T23:42:44Z",
            "content": "Estimated read time: 5-6\r\n minutes\r\nNEW YORK When a Target distributor reached out to Erik Carnell last year about possibly placing his brand, Abprallen, in Target stores, he was thrilled.\r\nIt was \"t… [+5512 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "HYUNG-JIN KIM Associated Press",
            "title": "See the moments after a passenger opened a plane door during flight - ABC News",
            "description": "Asiana Airlines and government officials say a passenger opened an emergency exit door during a flight in South Korea",
            "url": "https://abcnews.go.com/Business/wireStory/south-korean-passenger-plane-flies-open-door-lands-99621376",
            "urlToImage": "https://s.abcnews.com/images/International/wirestory_6c20f0e63e782036535e1a41afc34e10_16x9_992.jpg",
            "publishedAt": "2023-05-27T22:48:04Z",
            "content": "SEOUL, South Korea -- A passenger opened an emergency exit door during a plane flight in South Korea on Friday, causing air to blast inside the cabin and slightly injure 12 people, officials said. Th… [+1539 chars]"
        },
        {
            "source": {
                "id": "the-hill",
                "name": "The Hill"
            },
            "author": "Julia Shapero",
            "title": "Ukraine closer to launching counteroffensive, officials hint: ‘Time to get back what’s ours’ - The Hill",
            "description": "Top Ukrainian officials hinted on Saturday that the country may be nearing the launch of its long-awaited counteroffensive. “It’s time to get back what’s ours,” Ukraine’s chief military officer, Gen. Valerii Zaluzhnyi, said in a Telegram post on Saturday, acc…",
            "url": "https://thehill.com/policy/international/4023882-ukraine-closer-to-launching-counteroffensive-officials-hint-time-to-get-back-whats-ours/",
            "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/05/AP23143275815095-e1685227278134.jpg?w=1280",
            "publishedAt": "2023-05-27T22:41:00Z",
            "content": "Skip to content\r\nTop Ukrainian officials hinted on Saturday that the country may be nearing the launch of its long-awaited counteroffensive.\r\n“It’s time to get back what’s ours,” Ukraine’s chief mili… [+1427 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "Peter Charalambous",
            "title": "20-year-old US soldier dies from rollover accident in Kuwait - ABC News",
            "description": "The news of the death came ahead of Memorial Day.",
            "url": "https://abcnews.go.com/International/us-soldier-dies-kuwait-rollover-accident/story?id=99648300",
            "urlToImage": "https://s.abcnews.com/images/US/soldier-south-carolina-kuwait-moe-002-230527_1685192351541_hpMain_16x9_992.jpg",
            "publishedAt": "2023-05-27T22:24:04Z",
            "content": "An American soldier was killed in a non-combat rollover accident in Kuwait, U.S. officials said late Friday.\r\nSpc. Jayson Reed Haven, 20, of Aiken, South Carolina, died from a rollover accident that … [+1795 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Beast"
            },
            "author": "Helen Holmes",
            "title": "Lisa Vanderpump Says She Didn't Know About the Scandoval Affair Before it Broke - The Daily Beast",
            "description": "“I wish I would’ve tho,” she tweeted.",
            "url": "https://www.thedailybeast.com/lisa-vanderpump-says-she-didnt-know-about-the-scandoval-affair-before-it-broke",
            "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1317,w_2341,x_2404,y_84/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1685225530/2023-04-29T233531Z_889279402_RC2NO0ALLHCE_RTRMADP_3_USA-WHITEHOUSE-DINNER_pxnpi2",
            "publishedAt": "2023-05-27T22:17:44Z",
            "content": "Ever since a Vanderpump Rulesproducer revealed that a piece of information yet unknown to most of the cast will be divulged during the final reunion episode, fans have been speculating as to what it … [+427 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": null,
            "title": "Apple's free My Photo Stream service will shut down on July 26th | Engadget - Engadget",
            "description": "Apple's free My Photo Stream service, which you could use to view your images on more than one device, will shut down this summer..",
            "url": "https://www.engadget.com/apples-free-my-photo-stream-service-will-shut-down-on-july-26th-211650923.html",
            "urlToImage": "https://s.yimg.com/uu/api/res/1.2/9dkjc.YlqeAItfXunN9cSg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/31819120-fcd2-11ed-b35f-7c04a4919b07.cf.jpg",
            "publishedAt": "2023-05-27T21:19:45Z",
            "content": "Apple plans to shut down its My Photo Stream service on July 26th, 2023, the company announced on Friday\r\n. The free service has been available since the release of iCloud in 2011. You can use My Pho… [+1758 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Rich Calder",
            "title": "Former Secretary of State and top Nixon adviser Henry Kissinger turns 100 - New York Post ",
            "description": "Kissinger will celebrate his centenary this week with visits to New York, London and his hometown of Fürth, Germany, his son, David wrote Thursday in the Washington Post.",
            "url": "https://nypost.com/2023/05/27/former-secretary-of-state-and-top-nixon-adviser-henry-kissinger-turns-100/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/05/NYPICHPDPICT000011842794.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2023-05-27T20:49:00Z",
            "content": "Former Secretary of State Henry Kissinger turned 100 years old Saturday and is showing no sign of slowing down any time soon. \r\nKissinger will celebrate his centenary this week with visits to New Yor… [+3107 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "From Forgotten Formula to Climate Game Changer: A New Tool for Converting Carbon Dioxide - SciTechDaily",
            "description": "Scientists from Cornell University have revisited a century-old electrochemical equation, the Cottrell equation, to aid in the conversion of atmospheric carbon dioxide into a functional product, and in managing this greenhouse gas. This equation, which bears …",
            "url": "https://scitechdaily.com/from-forgotten-formula-to-climate-game-changer-a-new-tool-for-converting-carbon-dioxide/",
            "urlToImage": "https://scitechdaily.com/images/Carbon-Capture-Technology-Chemical-Engineering.jpg",
            "publishedAt": "2023-05-27T20:43:57Z",
            "content": "Scientists at Cornell University have re-purposed the 120-year-old Cottrell equation to understand the reactions carbon dioxide undergoes when subjected to electrochemistry, with the goal of converti… [+3075 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian staff reporter",
            "title": "Milwaukee Bucks set to hire Raptors' Adrian Griffin as head coach – reports - The Guardian",
            "description": "The Bucks are reportedly finalizing a deal to make Adrian Griffin their head coach after he spent the last five seasons as a Raptors assistant",
            "url": "https://www.theguardian.com/sport/2023/may/27/milwaukee-bucks-hire-adrian-griffin-head-coach-reports",
            "urlToImage": "https://i.guim.co.uk/img/media/2bf08bd98699e5e7b594dbb84820173140343cf9/0_47_3600_2160/master/3600.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d4e2b4afa9448e646aa6d8026f30f135",
            "publishedAt": "2023-05-27T20:26:00Z",
            "content": "The Milwaukee Bucks are finalizing a deal to make Adrian Griffin their head coach after he spent the last five seasons as a Toronto Raptors assistant, a person familiar with the situation told The As… [+3276 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Niamh Cavanagh",
            "title": "Turkey's runoff election: Is this the end of the Erdogan era? Here's everything to know about the vote - Yahoo News",
            "description": "Turkish citizens will take to the polls again on Sunday to vote in the presidential election runoff between the increasingly autocratic President Recep...",
            "url": "https://news.yahoo.com/turkey-presidential-election-runoff-erdogan-kilicdaroglu-vote-090208664.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/FPfsA2Awt.coV86TB_fx6g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2023-05/e0c9f0e0-fb11-11ed-b8db-8406501b41fe",
            "publishedAt": "2023-05-27T20:00:08Z",
            "content": "A Turkish citizen living abroad votes at the Turkish House in New York on Thursday in the second round of Turkey's presidential election. (Selcuk Acar/Anadolu Agency via Getty Images)\r\nMillions of pe… [+4737 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Eonline.com"
            },
            "author": "Jess Cohen",
            "title": "Hailee Steinfeld Steps Out With Buffalo Bills Quarterback Josh Allen - E! NEWS",
            "description": "Amid speculation about Josh Allen's breakup with longtime girlfriend Brittany Williams, the Buffalo Bills quarterback was photographed in NYC with actress Hailee Steinfeld.",
            "url": "https://www.eonline.com/news/1375711/hailee-steinfeld-steps-out-with-buffalo-bills-quarterback-josh-allen",
            "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2023427/rs_1200x1200-230527121032-1200-josh-allen-haiee-steinfeld.cm.52723.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
            "publishedAt": "2023-05-27T20:00:00Z",
            "content": "Timeoutis this Hollywood's newest celeb couple?\r\nWell, we're going to need to review these photos because Hailee Steinfeld and Buffalo Bills quarterback Josh Allen just stepped out together in New Yo… [+809 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Turf Show Times"
            },
            "author": "BlaineGrisak",
            "title": "Rams offseason: DeAndre Hopkins release shows Les Snead got it right - Turf Show Times",
            "description": "Cardinals releasing DeAndre Hopkins shows how difficult it is to offload stars",
            "url": "https://www.turfshowtimes.com/2023/5/27/23739772/deandre-hopkins-release-rams-offseason-moves",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/LWNrFTk8z6mcBY3mSCA9VEnQ_ko=/0x0:6084x3185/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24686792/1456246847.jpg",
            "publishedAt": "2023-05-27T20:00:00Z",
            "content": "The Los Angeles Rams and general manager Les Snead have taken a lot of criticism this offseason when it comes to some of the moves that have been made and how theyve gone about it. \r\nAfter three cons… [+2522 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Isabel Vincent",
            "title": "'Malibu Sniper' Anthony Rauda convicted for killing dad on camping trip with two young daughters - New York Post ",
            "description": "Anthony Rauda, a California transient, was convicted Friday for the murder of a research scientist who was camping with his two young daughters at a state park in 2018.",
            "url": "https://nypost.com/2023/05/27/malibu-sniper-anthony-rauda-convicted-for-killing-father-of-two-tristan-beaudette-during-camping-trip/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/05/NYPICHPDPICT000011829342.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2023-05-27T19:40:00Z",
            "content": "A California transient turned survivalist, who was dubbed the “Malibu Sniper” for a series of shootings at a Los Angeles area park, was convicted of second-degree murder Friday.\r\nAnthony Rauda, 46, w… [+2246 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Lynette Rice",
            "title": "‘Yellowjackets’ Finale: Co-Creator Ashley Lyle On Shocker Ending & Fan Reaction: “Is Getting Death Threats A Showrunner Right Of Passage?” - Deadline",
            "description": "Yellowjackets wrapped its second season on Showtime with a killer ending and a promise that things are going to get “weirder.” In a Twitter thread posted Friday, Co-Creator Ashley Lyle …",
            "url": "https://deadline.com/2023/05/yellowjackets-finale-recap-creator-ashley-lyle-shocker-fan-reaction-1235381787/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2022/04/1390531090.jpg?w=1024",
            "publishedAt": "2023-05-27T19:37:00Z",
            "content": "Yellowjackets wrapped its second season on Showtime with a killer ending and a promise that things are going to get “weirder.”\r\nIn a Twitter thread posted Friday, Co-Creator Ashley Lyle expressed gra… [+1670 chars]"
        }
    ]
    constructor () {
        super()
        this.state = {
            articals: this.articals
        }
    }

    render () {
        return (
            <div className='container my-3'>
                <h2 className='text-center'>DailyBuzz - Top Headlines </h2>
                <div className="row justify-content-center">
                    {
                        this.state.articals.map((e) => {
                            return <div key={e.url} className="col-3 mx-4 my-3">
                                <NewsItems title={e.title} desc={e.description} imageUrl={e.urlToImage} newsUrl={e.url} />
                            </div>

                        })
                    }

                </div>
            </div>
        )
    }
}
