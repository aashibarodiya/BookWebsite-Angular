import { filter, interval, map, Observable, take, tap } from "rxjs";
import { Author, AuthorSummary } from "./author";

export class InMemoryAuthorService 
{

    //this is a single instance of service that all can use
    //static instance=new InMemoryAuthorService();

    constructor(){
        console.log('InMemoryAuthorService created');
    }

    authors:Author[]=[
        {
            "id": "gandhi",
            "books": [],
            "social": {
                "id": 7002,
                "email": null,
                "webSite": "http://mkgandhi.org"
            },
            "lazyLoader": {},
            "name": "Mahatma Gandhi",
            "biography": "Mohandas Karamchand Gandhi (/ˈɡɑːndi, ˈɡændi/;[3] GAHN-dee; 2 October 1869 – 30 January 1948) was an Indian lawyer,[4] anti-colonial nationalist[5] and political ethicist[6] who employed nonviolent resistance to lead the successful campaign for India's independence from British rule,[7] and to later inspire movements for civil rights and freedom across the world. The honorific Mahātmā (Sanskrit: \"great-souled\", \"venerable\"), first applied to him in 1914 in South Africa, is now used throughout the world.[8][9]Born and raised in a Hindu family in coastal Gujarat, Gandhi trained in the law at the Inner Temple, London, and was called to the bar at age 22 in June 1891. After two uncertain years in India, where he was unable to start a successful law practice, he moved to South Africa in 1893 to represent an Indian merchant in a lawsuit. He went on to live in South Africa for 21 years.It was here that Gandhi raised a family and first employed nonviolent resistance in a campaign for civil rights. In 1915, aged 45, he returned to India and soon set about organising peasants, farmers, and urban labourers to protest against excessive land - tax and discrimination.",
            "photoUrl": "https://pbs.twimg.com/media/FAqPzrrUYAM8pCu.jpg",
            "birthDate": "1869-10-02T00:00:00",
            "deathDate": "1948-01-30T00:00:00",
            "tags": "freedom-fighter, indian, social-reformer, autobiography",
            "tagList": [
                "freedom-fighter",
                " indian",
                " social-reformer",
                " autobiography"
            ]
        },
        {
            "id": "jeffrey-archer",
            "books": [],
            "social": {
                "id": 7004,
                "email": "jeffreyarcher@gmail.com",
                "webSite": "http://jeffreyarcher.com"
            },
            "lazyLoader": {},
            "name": "Jeffrey Archer",
            "biography": "Jeffrey Howard Archer, Baron Archer of Weston-super-Mare (born 15 April 1940)[1] is an English novelist, life peer, convicted criminal, and former politician. Before becoming an author, Archer was a Member of Parliament (1969–1974), but did not seek re-election after a financial scandal that left him almost bankrupt.[2] \nArcher revived his fortunes as a novelist. His 1979 novel Kane and Abel remains one of the best-selling books in the world, with an estimated 34 million copies sold worldwide.[3][4] Overall his books have sold more than 320 million copies worldwide.[5]\n Archer became deputy chairman of the Conservative Party (1985–86), before resigning after a newspaper accused him of paying money to a prostitute. In 1987, he won a court case and was awarded large damages because of this claim.[6] He was made a life peer in 1992 and subsequently became Conservative candidate to be the first elected Mayor of London. He resigned his candidacy in 1999 after it emerged that he had lied in his 1987 libel case. He was imprisoned (2001–2003) for perjury and perverting the course of justice, ending his active political career.[5]",
            "photoUrl": "https://pbs.twimg.com/profile_images/3751745623/11bd5e198e1f0f7de40ffdf08f556293_400x400.jpeg",
            "birthDate": "1949-04-15T00:00:00",
            "deathDate": null,
            "tags": "best-seller, english, fiction, british",
            "tagList": [
                "best-seller",
                " english",
                " fiction",
                " british"
            ]
        },
        {
            "id": "john-grisham",
            "books": [],
            "social": {
                "id": 7005,
                "email": "john@grisham.net",
                "webSite": "http://grisham.net"
            },
            "lazyLoader": {},
            "name": "John Grisham",
            "biography": "John Ray Grisham Jr. (/ˈɡrɪʃəm/; born February 8, 1955 in Jonesboro, Arkansas)[1][2] is an American novelist, lawyer and former member of the 7th district of the Mississippi House of Representatives, known for his popular legal thrillers. According to the American Academy of Achievement, Grisham has written 28 consecutive number-one fiction bestsellers, and his books have sold 300 million copies worldwide.[3] Along with Tom Clancy and J. K. Rowling, Grisham is one of only three authors to have sold two million copies on a first printing.[4][5]\nGrisham graduated from Mississippi State University and earned a Juris Doctor from the University of Mississippi School of Law in 1981. He practised criminal law for about a decade and served in the Mississippi House of Representatives from 1983 to 1990.[6]\nGrisham's first novel, A Time to Kill, was published in June 1989, four years after he began writing it. Grisham's first bestseller, The Firm, sold more than seven million copies.[1] The book was adapted into a 1993 feature film of the same name, starring Tom Cruise, and a 2012 TV series which continues the story ten years after the events of the film and novel.[7] Seven of his other novels have also been adapted into films: The Chamber, The Client, A Painted House, The Pelican Brief, The Rainmaker, The Runaway Jury, and Skipping Christmas''.[8]",
            "photoUrl": "https://pbs.twimg.com/profile_images/1489356811711004672/NIxWoKfo_400x400.jpg",
            "birthDate": "0001-01-01T00:00:00",
            "deathDate": null,
            "tags": "legal fiction, best-seller, fiction,english",
            "tagList": [
                "legal fiction",
                " best-seller",
                " fiction",
                "english"
            ]
        },
        {
            "id": "vivek-dutta-mishra",
            "books": [],
            "social": {
                "id": 7003,
                "email": "vivek@thelostepic.com",
                "webSite": "http://thelostepic.com"
            },
            "lazyLoader": {},
            "name": "Vivek Dutta Mishra",
            "biography": "Vivek Dutta Mishra Write stories. Who knows your story may inspire God's next creation! Apart from being the author of The Accursed God and The Lost Epic series, Vivek is an avid reader, a storyteller, a poet, a stage play director, a regular podcaster, and co-author in several anthologies. With his extensive study of ancient Indian epics and literature, Vivek, invests his time as a storian talking about the authentic version of Mahabharata, busting the interpolations that are distorting the epic. His works on Mahabharata is available in public forum as The Mahabharata Project. Beyond Storytelling Beyond the realm of epics, poetry, and storytelling, Vivek is a Software Technology Enabler, a title he created for himself, making him one of a kind.In this role he works with leading Multinational corporations associated with information technology and beyond.In his professional capacity he has been a software architect, mentor, trainer and speaker.",
            "photoUrl": "https://pbs.twimg.com/profile_images/1393255566928015360/i9qVt4oI_400x400.jpg",
            "birthDate": "0001-01-01T00:00:00",
            "deathDate": null,
            "tags": "best-seller, english, fiction, indian, mahabharata, epic",
            "tagList": [
                "best-seller",
                " english",
                " fiction",
                " indian",
                " mahabharata",
                " epic"
            ]
        }
    ];

    getAllAuthors():AuthorSummary[] {

        return this.authors.map(a=> ({ 
            id:a.id,
            name:a.name,
            tagList:a.tagList,
            photoUrl:a.photoUrl,
            biography:a.biography
        }));

    }

    getAuthorById(id:string): Author|undefined {

        return this.authors.find(a=>a.id===id);

    }

    addAuthor(author:Author){
        if(!this.getAuthorById(author.id))
            this.authors.push(author);
    }

    deleteAuthor(id:string){
        this.authors=this.authors.filter(a=>a.id!==id);
    }

    updateAuthor(author:Author){
        this.authors=this.authors.map(a=> a.id===author.id?author:a);
    }

    getRandomAuthor():Author{
        var index=Math.floor(Math.random()*this.authors.length);
        return this.authors[index];
    }

    getRandomAuthors():Observable<Author>{
        var servedAuthors:Author[]=[];
        return interval(3000)
                    .pipe(
                        tap((x:any)=>console.log(x)),
                        map(_=>this.getRandomAuthor()),
                        tap((x:any)=>console.log(x)),                       
                    );
    }

}