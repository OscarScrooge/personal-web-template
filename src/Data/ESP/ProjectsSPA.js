import netflix from '../../images/netflix.PNG';
import covid19 from '../../images/covid19.PNG';
import themet from '../../images/themet.PNG';
import bot from '../../images/bot.PNG';
import site from "../../images/site.PNG";
import cellulat from '../../images/cellulat.PNG';

export const projectsSPA =[
    {
        title:"Neflix clone",
        img:netflix,
        description:"Proyecto que imita un par de funcionalidades del sitio original Netflix",
        url:"https://netflix-clone-b7cca.web.app/",
        code:"https://github.com/OscarScrooge/netflix-clone",
        urlAlias : "Netflix clone",
        codeAlias:"Código Netflix clone",
        techsArray : ["React","HTML","Css",
            "TMDB","react-youtube",
            "movie-triler","react-router"
        ],
    },
    {
        title:"Covid-19 tracker",
        img:covid19,
        description:"Un sitio web básico para seguir las últimas actualizaciones sobre la situación de covid19 alrededor del mundo",
        url:"https://covid19-tracker-3d1b1.web.app/",
        code:"https://github.com/OscarScrooge/covid19-tracker",
        urlAlias :"Covid-19 tracker",
        codeAlias:"Código Covid-19 tracker",
        techsArray : ["React","HTML","Css",
            "react-router","axios","material-icon",
            "redux","covid19.org api","react-simple-map"
        ]

    },
    {
        title:"Twitter bot",
        img:bot,
        description:"Un bot para twitter que proporciona el clima para la ciudad de México cada 6 horas",
        url:"https://twitter.com/WeathyBot",
        code:"https://github.com/OscarScrooge/Weathy",
        urlAlias :"Twitter bot",
        codeAlias:"Código Twitter bot",
        techsArray : ["Java","Spring-boot","Twitter API",
            "Accuwather API",
        ]
    },
    {
        title:"Cellulat",
        img:cellulat,
        description:"Plataforma bioinformática para similar vías de señalización intracelular",
        url:"http://bioinformatics.cua.uam.mx/site/",
        code:"http://bioinformatics.cua.uam.mx/site/",
        urlAlias : "Cellulat",
        codeAlias: "Código Cellulat",
        techsArray : ["Java","Algritmo de Gillespie"]
    },
    {
        title:"The MET  gallery",
        img:themet,
        description:"Un sitio web básico que muestra verdaderas piezas de exhibición del Museo Metropolitano de Nueva York",
        url:"https://themet-cfff7.web.app/",
        code:"https://github.com/OscarScrooge/art_gallery",
        urlAlias : "The MET  gallery",
        codeAlias: "Código The MET  gallery ",
        techsArray : ["React","HTML","The MET API",
            "redux","axios","react-router",
        ]
    },
    {
        title:"Sitio web personal",
        img:site,
        description:"Template de un sitio web personal",
        url:"https://themet-cfff7.web.app/",
        code:"https://github.com/OscarScrooge/art_gallery",
        urlAlias : "Template",
        codeAlias: "Código template",
        techsArray : ["React","HTML","redux","react-router"]
    }
];
