import netflix from '../../images/netflix.PNG';
import covid19 from '../../images/covid19.PNG';
import themet from '../../images/themet.PNG';
import bot from '../../images/bot.PNG';
import site from '../../images/site.PNG';
import cellulat from '../../images/cellulat.PNG';

export const projectsEN =[
    {
        title:"Neflix clone",
        img:netflix,
        description:"Project which imitate a couple of functionalities of the original site Netflix",
        url:"https://netflix-clone-b7cca.web.app/",
        code:"https://github.com/OscarScrooge/netflix-clone",
        urlAlias : "Netflix clone",
        codeAlias:"Netflix clone code",
        techsArray : ["React","HTML","Css",
                  "TMDB","react-youtube",
                  "movie-triler","react-router"
                ],
    },
    {
        title:"Covid-19 tracker",
        img:covid19,
        description:"A basic website to follow the last updating about the situation of covid19 around the world",
        url:"https://covid19-tracker-3d1b1.web.app/",
        code:"https://github.com/OscarScrooge/covid19-tracker",
        urlAlias :"Covid-19 tracker",
        codeAlias:"Covid-19 tracker code",
        techsArray : ["React","HTML","Css",
                 "react-router","axios","material-icon",
                 "redux","covid19.org api","react-simple-map"
                ]

    },
    {
        title:"Twitter bot",
        img:bot,
        description:"A twitter bot which provide the weather of Mexico City every 6 hours",
        url:"https://twitter.com/WeathyBot",
        code:"https://github.com/OscarScrooge/Weathy",
        urlAlias :"Twitter bot",
        codeAlias:"Twitter bot code",
        techsArray : ["Java","Spring-boot","Twitter API",
                 "Accuwather API",
                ]
    },
    {
        title:"Cellulat",
        img:cellulat,
        description:"Bioinformatic platform to simulate intracellular signaling paths",
        url:"http://bioinformatics.cua.uam.mx/site/",
        code:"http://bioinformatics.cua.uam.mx/site/",
        urlAlias : "Cellulat",
        codeAlias: "Cellulat code",
        techsArray : ["Java","Gillespies algorith"]
    },
    {
        title:"The MET  gallery",
        img:themet,
        description:"A basic website which shows real exhibition pieces of the Metropolitan Museum of New York",
        url:"https://themet-cfff7.web.app/",
        code:"https://github.com/OscarScrooge/art_gallery",
        urlAlias : "The MET  gallery",
        codeAlias: "The MET  gallery code",
        techsArray : ["React","HTML","The MET API",
                 "redux","axios","react-router",
                ]
    },
    {
        title:"Personal website template",
        img:site,
        description:"A template for a personal website",
        url:"oscar-scrooge.web.app",
        code:"https://github.com/OscarScrooge/personal-web-template",
        urlAlias : "Template",
        codeAlias: "Template code",
        techsArray : ["React","HTML","redux","react-router"]
    }
];
