import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class TodayNews extends Component {
    articles= [
{
 "source": {"id": null,"name": "WSET"
  },
    "author": "GEOFF HARRIS | The National Desk",
    "title": "National Security Agency investigates Chinese hack of 3 telecommunications companies - WKRC TV Cincinnati",
    "description": "The National Security Agency is investigating a hack that involves three major telecommunications firms.",
    "url": "https://wset.com/news/nation-world/national-security-agency-investigates-chinese-hack-of-3-telecommunications-companies-att-verizon-lumen-technologies-surveillance-federal-government",
    "urlToImage": "https://local12.com/resources/media/15a0e4ec-51be-4b66-80e8-9bce703399df-large16x9_AP24086105992043.jpg",
    "publishedAt": "2024-10-08T06:05:34Z",
    "content": "WASHINGTON (TND) The National Security Agency is investigating a hack that involves three major telecommunications firms; AT&amp;T, Verizon and Lumen Technologies.\r\nDavid Hyde, a professor of compute… [+1429 chars]"
},
{
 "source": {"id": null,"name": "CNBC"
},
    "author": "Anniek Bao",
    "title": "China state planner lays out further actions to boost economy but no new plans for major stimulus - CNBC",
    "description": "China will speed up special purpose bond issuance to local governments to support regional economic growth, senior NDRC officials said.",
    "url": "https://www.cnbc.com/2024/10/08/china-state-planner-lays-out-further-actions-to-boost-economy-but-no-new-plans-for-major-stimulus.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/108042998-1727981319037-gettyimages-2176462447-img_2907_uiod5ijt.jpeg?v=1727981399&w=1920&h=1080",
    "publishedAt": "2024-10-08T03:25:00Z",
    "content": "Two women sit on the sidewalk of Qiansimen Jialing River Bridge, decorated with Chinese national flags, on October 3, 2024 in Chongqing, China. National Day Golden Week is a holiday in China commemor… [+4632 chars]"
},
{
 "source": {"id": "reuters","name": "Reuters"
},
"author": "Hyunjoo Jin, Heekyong Yang, Joyce Lee",
"title": "Samsung Electronics apologises for disappointing profit as it struggles in AI chips - Reuters",
"description": "Samsung Electronics warned its third-quarter profit would come in below market expectations and apologised for the disappointing performance with the tech giant lagging its rivals in supplying high-end chips to Nvidia in the booming AI market.",
"url": "https://www.reuters.com/technology/samsung-electronics-estimates-274-jump-q3-operating-profit-2024-10-07/",
"urlToImage": "https://www.reuters.com/resizer/v2/VBBNIF3AAZKIZHRUIM3AEWK5YI.jpg?auth=7d5bc0e639097c87ab2a0917f7ea63a2aa59bf47523ffe35780e22ec231ec337&height=1005&width=1920&quality=80&smart=true",
"publishedAt": "2024-10-08T02:22:00Z",
"content": null
},
{
 "source": {"id": null,"name": "Deadline"
},
    "author": "Glenn Garner",
    "title": "Qantas Apologizes For Playing R-Rated ‘Daddio’ On Flight: “Clearly Not Suitable” - Deadline",
    "description": "One Qantas passenger described 'Daddio' as \"40 minutes of penis and boobs\" on social media after the R-rated movie was screened on a flight.",
    "url": "http://deadline.com/2024/10/qantas-apologizes-playing-r-rated-daddio-flight-clearly-not-suitable-1236109735/",
    "urlToImage": "https://deadline.com/wp-content/uploads/2024/10/Dakota-Johnson-Sean-Penn-Daddio.jpg?w=1024",
    "publishedAt": "2024-10-08T02:08:00Z",
    "content": "Months after its release, Dakota Johnson and Sean Penn‘s Daddio recently had a captive audience.\r\nQantas Airways apologized to passengers on a recent flight from Sydney to Japan after playing the R-r… [+1375 chars]"
},
{
    "source": {
    "id": null,
    "name": "Kstp.com"
    },
    "author": "Renee Cooper",
    "title": "Some surgeries indefinitely postponed as all Minnesota hospitals conserve IV fluids amid ongoing shortage - KSTP",
    "description": "Baxter International supplies 60 percent of the nation's IV fluids, causing a major supply chain disruption after the company's North Carolina manufacturing plant shut down last week because of flooding and damage due to Hurricane Helene.",
    "url": "https://kstp.com/kstp-news/top-news/some-surgeries-indefinitely-postponed-as-all-minnesota-hospitals-conserve-iv-fluids-amid-ongoing-shortage/",
    "urlToImage": "https://kstp.com/wp-content/uploads/2024/10/IV-FLUID-SHORTAGE-FOLO_GFX-VO_00.00.00.28.jpg",
    "publishedAt": "2024-10-08T01:27:35Z",
    "content": "Surgeries scheduled for Monday were canceled across the metro as hospitals across the state and across the country work to conserve IV fluids amid a massive shortage.\r\nBaxter International supplies 6… [+6770 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "TheStreet"
    },
    "author": "Dan Weil",
    "title": "Druckenmiller, Summers deliver blunt messages to Fed on interest rates - TheStreet",
    "description": "The Federal Reserve cut interest rates 0.5 percentage point in September.",
    "url": "https://www.thestreet.com/economy/summers-druckenmiller-critique-fed-policy",
    "urlToImage": "https://www.thestreet.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjA5ODIzMTI1NTQ4ODM2MzA1/summers-druckenmiller-100724-kl.jpg",
    "publishedAt": "2024-10-08T01:07:24Z",
    "content": "Experts changed their tune markedly on Federal Reserve interest-rate policy after Friday’s stronger-than-expected jobs report.\r\nNonfarm payrolls rose 254,000 in September, up from 159,000 in August. … [+4286 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Fox Business"
    },
    "author": "Andrea Margolis",
    "title": "Consumers asked to throw away millions of eggs as FDA upgrades recall status to most serious category - Fox Business",
    "description": "The FDA announced that the recall of \"Milo’s Poultry Farms\" and \"Tony’s Fresh Market\" has been upgraded to Class I, meaning the eggs may cause serious health issues or death.",
    "url": "https://www.foxbusiness.com/lifestyle/consumers-asked-throw-away-millions-eggs-fda-upgrades-recall-status-most-serious-category",
    "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/10/0/0/recall-template-2.png?ve=1&tl=1",
    "publishedAt": "2024-10-08T01:03:00Z",
    "content": "Officials are continuing to warn consumers about an ongoing egg recall that has now been upgraded to Class I, meaning that the eggs may cause \"serious adverse health consequences or death.\"\r\nMilo's P… [+2456 chars]"
    }
    ]
constructor() {
    super();
    this.state = {
        articles: this.articles,
        loading: false
    }
}
//below code is to fetch api
//     async componentDidMount() {
//     let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ff879fc9e2a14b4c9c05f56294258cc1"
//     let data = await fetch(url);
//     let parseData = await data.json()
//     console.log(parseData);
//     this.setState({ articles: parseData.articles })
// }
render() {
    console.log('render')
    return (
        <div className="container my-3">
         <h2>Headlines</h2>
         <div className='row'>
            {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title:""}description={element.description?element.description:""}
                imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
            })}
        </div>
        </div>
     )
  }
}

export default TodayNews
