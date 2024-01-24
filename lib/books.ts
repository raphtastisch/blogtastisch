import { Book } from "./config";

export const books: Book[] = [
    {
        title: "Outlive",
        subtitle:
            "How to live longer, feel better, and stay alive until the breakthroughs arrive.",
        author: "Peter Attia",
        shortDescription: "A book about health, prevention and logevity.",
        longDescription:
            "What you can do now to drastically increase the chance of living longer and healthier. I liked the actionable, science backed insights. Boils down what you can influence and what you can't (yet). Prevention is key, there is no wonderdrug.",
        tags: ["health", "non-fiction", "science", "fitness"],
        slug: "outlive",
        date: new Date("2021-08-01"),
    },
    {
        title: "Aufklärung jetzt",
        subtitle: "Für Vernunft, Wissenschaft, Humanismus und Fortschritt",
        author: "Steven Pinker",
        slug: "aufklaerungjetzt",
        shortDescription:
            "Die Werte der Aufklärung sind der beste Quell für Fortschritt und Wohlbefinden.",
        longDescription:
            "Steven Pinker liefert mit „Aufklärung jetzt“ eine grandios geschriebene Darstellung, wieso die Werte der Aufklärung der beste Quell für Fortschritt und Wohlbefinden sind. Darum müssen wir diese Werte gerade jetzt, wo sie unter Dauerfeuer von allen Seiten stehen, eisern verteidigen.",
        date: new Date("2023-11-18 00:00:00"),
        tags: ["non-fiction", "politics", "philosophy"],
    },
    {
        title: "Superforecasting",
        subtitle: "Die Kunst der richtigen Prognose",
        author: "Philip E. Tetlock und Dan Gardner",
        slug: "superforecasting",
        shortDescription:
            "Wie gehen besere Prognosen und die Wissenschaft dahinter.",
        longDescription:
            "„Superforecasting: Die Kunst der richtigen Prognose“ von Philip E. Tetlock und Dan Gardner ist ein überaus interessantes Buch über die Wissenschaft der Vorhersage, wie man Vorhersagen verbessern kann und warum man keiner Vorhersage glauben sollte, wenn die Person dahinter nicht eine Liste all ihrer richtigen und falschen Vorhersagen aus der Vergangenheit bereitstellt.",
        date: new Date("2024-01-01 14:40:45"),
        tags: ["non-fiction", "strategy", "business", "psychology"],
    },
    {
        title: "The Strategy of Denial",
        subtitle: "American Defense in an Age of Great Power Conflict",
        author: "Elbridge A. Colby",
        slug: "strategyofdenial",
        shortDescription:
            "Geostrategische Überlegungen aus US-amerikanischer Sicht mit Fokus auf China.",
        longDescription:
            "„The strategy of Denial“ von Elbridge A. Colby bietet spannende Einblicke in das Thema globale Geostrategie und wie diese aus US-amerikanischer Sicht aussehen könnte. Der Fokus liegt dabei voll auf dem Machtkampf mit China - Europa ist dabei nur ein Nebendarsteller.",
        date: new Date("2023-12-07 00:00:00"),
        tags: ["non-fiction", "politics"],
    },
    {
        title: "Ein verheißenes Land",
        subtitle: "Teil 1 der Biografie des 44. Präsidenten der USA",
        author: "Barack Obama",
        slug: "verheissenesland",
        shortDescription: "Der erste Teil von Obamas spannender Autobiografie.",
        longDescription:
            "„Ein verheißenes Land“ ist der erste Teil von Barack Obamas Autobiographie. Es beschreibt seinen Werdegang zum mächtigsten Mann der Welt und gibt spannende Einblick in die schwierigsten und folgenreichsten Entscheidungen seiner ersten Amtszeit. Dabei wirft es ein spannendes Licht auf die Überlegungen, die hinter seinen weitreichendsten Handlungen stehen.",
        date: new Date("2023-12-01 00:00:00"),
        tags: ["biography", "non-fiction", "politics"],
    },
    {
        title: "Why We Sleep",
        subtitle: "Unlocking the Power of Sleep and Dreams",
        author: "Matthew Walker",
        slug: "why-we-sleep",
        shortDescription: "An insightful look into the science of sleep.",
        longDescription:
            "Presents groundbreaking research on the importance of sleep, its impact on our health, brain function, and overall well-being.",
        date: new Date("2017-10-03"),
        tags: ["health", "science", "psychology"],
    },
    {
        title: "The Origins of Political Order",
        subtitle: "From Prehuman Times to the French Revolution",
        author: "Francis Fukuyama",
        slug: "origins-of-political-order",
        shortDescription:
            "A comprehensive analysis of the development of political systems.",
        longDescription:
            "Offers an in-depth examination of the origins of political institutions and their evolution, tracing back to prehuman times and leading up to the French Revolution.",
        date: new Date("2011-04-12"),
        tags: ["non-fiction", "politics", "history", "sociology"],
    },
    {
        title: "Sapiens",
        subtitle: "A Brief History of Humankind",
        author: "Yuval Noah Harari",
        slug: "sapiens",
        shortDescription:
            "A compelling narrative of humanity's creation and evolution.",
        longDescription:
            "Presents a thought-provoking account of human history, from the Stone Age to the twenty-first century, focusing on the cognitive, agricultural, and scientific revolutions.",
        date: new Date("2014-05-15"),
        tags: ["non-fiction", "history", "science", "sociology"],
    },

    {
        title: "Leaders Eat Last",
        author: "Simon Sinek",
        slug: "leaders-eat-last",
        shortDescription: "An exploration of effective leadership practices.",
        longDescription:
            "The book delves into the qualities that make a great leader, emphasizing the importance of creating a trusting and cooperative environment.",
        date: new Date("2014-01-07"),
        tags: ["non-fiction", "leadership", "business"],
    },

    {
        title: "Barking Up the Wrong Tree",
        subtitle:
            "The Surprising science Behind Why Everything You Know About Success Is (Mostly) Wrong",
        author: "Eric Barker",
        slug: "barking-up-the-wrong-tree",
        shortDescription:
            "A fresh perspective on the true meaning and path to success.",
        longDescription:
            "Eric Barker uses evidence and research to debunk common myths about success, offering insights into what truly drives success in personal and professional life.",
        date: new Date("2017-05-16"),
        tags: ["non-fiction", "psychology", "business", "science"],
    },
    {
        title: "Start With Why",
        subtitle: "How Great Leaders Inspire Everyone to Take Action",
        author: "Simon Sinek",
        slug: "start-with-why",
        shortDescription: "Exploring the power of inspiration in leadership.",
        longDescription:
            "This book discusses the importance of understanding the 'why' behind actions and decisions, particularly in leadership, to inspire and motivate others.",
        date: new Date("2009-10-29"),
        tags: ["non-fiction", "leadership", "strategy", "business", "mindset"],
    },

    {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        slug: "thinking-fast-and-slow",
        shortDescription:
            "An exploration of the two systems that drive the way we think.",
        longDescription:
            "Nobel laureate Daniel Kahneman explains the dual systems of our brain: the fast, intuitive, and emotional; and the slow, deliberate, and logical, and how they shape our decision-making.",
        date: new Date("2011-10-25"),
        tags: ["non-fiction", "psychology", "economics", "strategy"],
    },
    {
        title: "The Art of Thinking Clearly",
        author: "Rolf Dobelli",
        slug: "art-of-thinking-clearly",
        shortDescription: "A guide to identifying and avoiding cognitive biases.",
        longDescription:
            "Presents a series of short chapters that address various cognitive biases and logical fallacies that people commonly succumb to in their everyday thinking.",
        date: new Date("2013-05-14"),
        tags: ["non-fiction", "psychology", "strategy"],
    },
    {
        title: "Getting Things Done",
        subtitle: "The Art of Stress-Free Productivity",
        author: "David Allen",
        slug: "getting-things-done",
        shortDescription: "A revolutionary approach to personal productivity.",
        longDescription:
            "This book outlines a comprehensive organizational system for managing tasks and responsibilities in both professional and personal life, aiming to reduce stress and increase efficiency.",
        date: new Date("2001-01-01"),
        tags: ["non-fiction", "productivity", "self-help", "business"],
    },
    {
        title: "Atomic Awakening",
        subtitle: "A New Look at the History and Future of Nuclear Power",
        author: "James Mahaffey",
        slug: "atomic-awakening",
        shortDescription: "An insightful history and analysis of nuclear power.",
        longDescription:
            "An engaging narrative of the development of nuclear power, from its earliest beginnings to its current status and future potential.",
        date: new Date("2009-07-15"),
        tags: ["non-fiction", "science", "history", "technology"],
    },
    {
        title: "Option B",
        subtitle: "Facing Adversity, Building Resilience, and Finding Joy",
        author: "Sheryl Sandberg and Adam Grant",
        slug: "option-b",
        shortDescription: "Navigating through adversity and building resilience.",
        longDescription:
            "Sheryl Sandberg, in collaboration with psychologist Adam Grant, shares her personal journey of overcoming tragedy and offers insights on building resilience and finding joy after loss.",
        date: new Date("2017-04-24"),
        tags: ["non-fiction", "mindset", "psychology", "self-help"],
    },
    {
        title: "Man's Search for Meaning",
        author: "Viktor E. Frankl",
        slug: "mans-search-for-meaning",
        shortDescription:
            "A Holocaust survivor's insights into finding meaning in life.",
        longDescription:
            "A profound memoir and psychological exploration of finding meaning in life, especially in the face of extreme adversity. Frankl, a Holocaust survivor, describes his experiences in Nazi concentration camps and introduces his theory of logotherapy, which asserts that the primary human drive is not pleasure but the pursuit of what we find meaningful.",
        date: new Date("1946-01-01"),
        tags: ["non-fiction", "psychology", "biography", "philosophy", "history"],
    },

    {
        title: "Antifragile",
        subtitle: "Things That Gain from Disorder",
        author: "Nassim Nicholas Taleb",
        slug: "antifragile",
        shortDescription:
            "Explores how some systems benefit from shocks and volatility.",
        longDescription:
            "This book discusses how certain systems, including economic and biological, actually benefit from shocks, volatility, and uncertainty. Taleb introduces the concept of 'antifragility,' a property beyond resilience, where these systems thrive and grow when exposed to chaos. The book challenges conventional wisdom about risk and decision-making.",
        date: new Date("2012-11-27"),
        tags: [
            "non-fiction",
            "economics",
            "philosophy",
            "psychology",
            "business",
        ],
    },
    {
        title: "The Selfish Gene",
        author: "Richard Dawkins",
        slug: "selfish-gene",
        shortDescription:
            "A revolutionary perspective on evolution focusing on gene-centered view.",
        longDescription:
            "'The Selfish Gene' revolutionized the understanding of natural selection. The book argues that the gene is the principal unit of selection in evolution. Dawkins proposes that genes are selfish entities, working to ensure their own survival. This influential work has significantly impacted evolutionary biology and the study of animal behavior.",
        date: new Date("1976-01-01"),
        tags: ["non-fiction", "biology", "science"],
    },
    {
        title: "The Righteous Mind",
        subtitle: "Why Good People are Divided by Politics and Religion",
        author: "Jonathan Haidt",
        slug: "righteous-mind",
        shortDescription:
            "Examines the moral foundations that underpin our political and religious beliefs.",
        longDescription:
            "Delves into the psychological bases of our political and religious convictions. Haidt explores how moral judgments are not entirely based on logic but are deeply influenced by intuition and emotion. The book offers insights into the origins of our divided political landscape and suggests ways to foster understanding.",
        date: new Date("2012-03-13"),
        tags: ["non-fiction", "psychology", "politics", "religion", "sociology"],
    },
    {
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        slug: "how-to-win-friends",
        shortDescription: "A timeless guide to interpersonal skills and success.",
        longDescription:
            "A landmark book in the field of self-help and personal development. It provides practical advice on improving communication skills, building relationships, and influencing others. Carnegie's principles, based on understanding human nature, have helped millions achieve personal and professional success.",
        date: new Date("1936-01-01"),
        tags: [
            "non-fiction",
            "self-help",
            "psychology",
            "business",
            "communication",
        ],
    },

    {
        title: "Scout Mindset",
        author: "Julia Galef",
        slug: "scout-mindset",
        shortDescription:
            "Exploration of cognitive biases and rational thinking.",
        longDescription:
            "Delves into how individuals can overcome cognitive biases and emotional reasoning to adopt a more accurate and rational approach to thinking and decision making. It emphasizes the importance of truth over comfort in beliefs.",
        date: new Date("2021-04-13"),
        tags: ["psychology", "strategy", "mindset", "innovation", "non-fiction"],
    },

    {
        title: "Poor Economics",
        author: "Abhijit V. Banerjee and Esther Duflo",
        slug: "poor-economics",
        shortDescription:
            "Analysis of global poverty and strategies to alleviate it.",
        longDescription:
            "The book offers an insightful exploration into the lives of the poor and the economic decisions they make. It presents groundbreaking research and analysis on the most effective ways to address global poverty.",
        date: new Date("2011-05-01"),
        tags: ["economics", "strategy", "politics", "science", "non-fiction"],
    },
    {
        title: "Crucial Conversations",
        subtitle: "Tools for Talking When Stakes Are High",
        author: "Kerry Patterson",
        slug: "crucial-conversations",
        shortDescription:
            "Guide on effective communication in high-stakes situations.",
        longDescription:
            "Provides strategies and tools for navigating high-stakes conversations. It focuses on techniques for effective dialogue, managing emotions, and achieving positive outcomes in crucial interactions.",
        date: new Date("2002-01-01"),
        tags: ["communication", "self-help", "leadership", "non-fiction"],
    },
    {
        title: "Immune",
        subtitle: "A Journey into the Mysterious System That Keeps You Alive",
        author: "Philipp Dettmer",
        slug: "immune",
        shortDescription: "Insightful exploration of the human immune system.",
        longDescription:
            "Offers a captivating and accessible journey through the complexities of the human immune system. It combines scientific rigor with engaging storytelling to unravel the mysteries of how our bodies defend against diseases.",
        date: new Date("2021-11-16"),
        tags: ["science", "biology", "health", "non-fiction"],
    },
    {
        title: "The Beginning of Infinity",
        subtitle: "Explanations That Transform the World",
        author: "David Deutsch",
        slug: "beginning-infinity",
        shortDescription: "A deep dive into the philosophy of science.",
        longDescription:
            "Explores the limitless potential of human understanding and knowledge. It delves into a variety of disciplines, challenging conventional beliefs and proposing a new framework for considering the growth of knowledge.",
        date: new Date("2011-03-31"),
        tags: ["philosophy", "science", "non-fiction"],
    },
    {
        title: "Zero to One",
        subtitle: "Notes on Startups, or How to Build the Future",
        author: "Peter Thiel with Blake Masters",
        slug: "zero-to-one",
        shortDescription: "Insights on entrepreneurship and startup innovation.",
        longDescription:
            "Offers a unique perspective on startup innovation and entrepreneurship. It challenges conventional wisdom and presents contrarian views on building successful technology businesses, emphasizing the creation of new markets.",
        date: new Date("2014-09-16"),
        tags: ["entrepreneurship", "business", "innovation", "non-fiction"],
    },
    {
        title: "The Moral Landscape",
        subtitle: "How Science Can Determine Human Values",
        author: "Sam Harris",
        slug: "moral-landscape",
        shortDescription: "A scientific approach to understanding human values.",
        longDescription:
            "This book argues that science can, and should, be an authority on moral issues, shaping human values and setting out what constitutes a good life.",
        date: new Date("2010-10-05"),
        tags: ["religion", "science", "philosophy", "non-fiction"],
    },
    {
        title: "How to Talk to Everyone",
        subtitle: "92 Little Tricks for Big Success in Relationships",
        author: "Leil Lowndes",
        slug: "how-to-talk-everyone",
        shortDescription: "A guide to effective communication and social skills.",
        longDescription:
            "Explores various techniques and strategies for engaging in successful conversations in different social and professional contexts.",
        date: new Date("2003-12-01"),
        tags: ["communication", "self-help", "non-fiction"],
    },
    {
        title: "The Phoenix Project",
        subtitle: "A Novel About IT, DevOps, and Helping Your Business Win",
        author: "Gene Kim, Kevin Behr and George Spafford",
        slug: "phoenix-project",
        shortDescription:
            "A novel that illuminates the principles of IT and DevOps.",
        longDescription:
            "Combines a gripping story with insightful lessons about information technology and DevOps practices, transforming how IT is viewed and implemented in business.",
        date: new Date("2013-01-10"),
        tags: ["IT", "technology", "business", "fiction"],
    },
    {
        title: "Nonviolent Communication",
        subtitle: "A Language of Life",
        author: "Marshall B. Rosenberg",
        slug: "nonviolent-communication",
        shortDescription: "A framework for compassionate communication.",
        longDescription:
            "Presents a powerful approach to developing empathy and honest expression, aimed at resolving conflicts and improving personal and professional relationships.",
        date: new Date("2003-09-01"),
        tags: ["communication", "self-help", "non-fiction"],
    },
    {
        title: "Algorithms to Live By",
        subtitle: "The Computer Science of Human Decisions",
        author: "Brian Christian and Tom Griffiths",
        slug: "algorithms-live-by",
        shortDescription: "Applying computer algorithms to everyday life.",
        longDescription:
            "Explores how concepts from computer science can be used to solve problems in everyday decision making, from finding a parking spot to managing time effectively.",
        date: new Date("2016-04-19"),
        tags: ["technology", "strategy", "psychology", "non-fiction"],
    },
    {
        title: "Atomic Habits",
        subtitle: "An Easy & Proven Way to Build Good Habits & Break Bad Ones",
        author: "James Clear",
        slug: "atomic-habits",
        shortDescription: "Strategies for habit formation and change.",
        longDescription:
            "Offers a comprehensive guide to building good habits, breaking bad ones, and mastering the tiny behaviors that lead to remarkable results.",
        date: new Date("2018-10-16"),
        tags: ["productivity", "self-help", "psychology", "non-fiction"],
    },
    {
        title: "Factfulness",
        subtitle:
            "Ten Reasons We're Wrong About the World – and Why Things Are Better Than You Think",
        author: "Hans Rosling with Ola Rosling and Anna Rosling Rönnlund",
        slug: "factfulness",
        shortDescription:
            "A new perspective on global trends and misconceptions.",
        longDescription:
            "Challenges common misconceptions about the world and shows through data how many aspects of global health and economics have improved over time.",
        date: new Date("2018-04-03"),
        tags: ["politics", "history", "sociology", "science", "non-fiction"],
    },
    {
        title: "Life 3.0",
        subtitle: "Being Human in the Age of Artificial Intelligence",
        author: "Max Tegmark",
        slug: "life-3-0",
        shortDescription:
            "Exploration of artificial intelligence and its future impact.",
        longDescription:
            "Discusses the future of artificial intelligence and its implications for humanity, covering ethical, philosophical, and technical aspects of AI.",
        date: new Date("2017-08-29"),
        tags: ["AI", "technology", "philosophy", "non-fiction"],
    },
    {
        title: "Rationality",
        subtitle: "What It Is, Why It Seems Scarce, Why It Matters",
        author: "Steven Pinker",
        slug: "rationality",
        shortDescription: "An examination of human rationality.",
        longDescription:
            "Investigates the nature of rationality, why it's essential for understanding and solving global problems, and how it influences human thought and society.",
        date: new Date("2021-09-28"),
        tags: ["science", "psychology", "philosophy", "non-fiction"],
    },
    {
        title: "Outliers",
        subtitle: "The Story of Success",
        author: "Malcolm Gladwell",
        slug: "outliers",
        shortDescription: "Explores what makes high-achievers different.",
        longDescription:
            "Delves into the stories of successful people to argue that we pay too much attention to what successful people are like, and too little to where they are from: their culture, their family, their generation, and the idiosyncratic experiences of their upbringing. Offers insights into what makes some people excel and how one can potentially replicate their success.",
        date: new Date("2008-11-18"),
        tags: ["mindset", "psychology", "sociology", "non-fiction"],
    },
    {
        title: "The Tipping Point",
        subtitle: "How Little Things Can Make a Big Difference",
        author: "Malcolm Gladwell",
        slug: "tipping-point",
        shortDescription:
            "Explains how small actions can lead to large-scale social changes.",
        longDescription:
            "Examines the phenomena of 'tipping points', or the moments when an idea, trend, or social behavior crosses a threshold, tips, and spreads like wildfire. Uses examples from the spread of diseases to the popularity of books and TV shows to illustrate how these critical moments shape our world.",
        date: new Date("2000-03-01"),
        tags: ["politics", "psychology", "economics", "non-fiction"],
    },
    {
        title: "Blink",
        subtitle: "The Power of Thinking Without Thinking",
        author: "Malcolm Gladwell",
        slug: "blink",
        shortDescription:
            "Discusses the importance of intuitive decision making.",
        longDescription:
            "Explores the concept of 'thin-slicing', the ability of our unconscious to find patterns in situations and behavior based on very narrow slices of experience. Argues that this ability can be both incredibly powerful and sometimes disastrously flawed, impacting our lives, work, and relationships.",
        date: new Date("2005-01-11"),
        tags: [
            "psychology",
            "strategy",
            "non-fiction",
            "mindset",
            "productivity",
        ],
    },
    {
        title: "Talking to Strangers",
        subtitle: "What We Should Know about the People We Don't Know",
        author: "Malcolm Gladwell",
        slug: "talking-to-strangers",
        shortDescription: "Investigates the interactions we have with strangers.",
        longDescription:
            "Challenges our preconceptions about the ability to understand and communicate with strangers. Uses a series of encounters and incidents in the lives of people to show that our inability to understand strangers can lead to conflicts and misunderstandings, with a focus on what goes wrong in these interactions.",
        date: new Date("2019-09-10"),
        tags: ["communication", "psychology", "sociology", "non-fiction"],
    },
    {
        title: "David and Goliath",
        subtitle: "Underdogs, Misfits, and the Art of Battling Giants",
        author: "Malcolm Gladwell",
        slug: "david-and-goliath",
        shortDescription: "Explores the dynamics between underdogs and giants.",
        longDescription:
            "Examines how disadvantages can be advantageous and how the powerful can be vulnerable. Uses stories from history, business, sports, and more to illustrate how underdogs have overcome obstacles and challenges through unconventional strategies, resilience, and the understanding of their unique strengths.",
        date: new Date("2013-10-01"),
        tags: ["strategy", "psychology", "mindset", "business", "non-fiction"],
    },

    {
        title: "Scale",
        subtitle:
            "The Universal Laws of Life, Growth, and Death in Organisms, Cities, and Companies",
        author: "Geoffrey West",
        slug: "scale",
        shortDescription:
            "Investigation of the universal laws that govern the structure and behavior of cities, companies, and biological organisms.",
        longDescription:
            "Delves into how scale affects the dynamics of cities, companies, and biological life, revealing the underlying principles that shape their growth, development, and longevity.",
        date: new Date("2017-05-16"),
        tags: ["science", "biology", "sociology", "business", "non-fiction"],
    },

    {
        title: "Why Nations Fail",
        subtitle: "The Origins of Power, Prosperity, and Poverty",
        author: "Daron Acemoglu and James A. Robinson",
        slug: "why-nations-fail",
        shortDescription:
            "An exploration of the reasons behind the success and failure of nations.",
        longDescription:
            "Examines the historical, geographic, and cultural factors that contribute to the prosperity or poverty of nations, arguing that inclusive political and economic institutions are the key to success.",
        date: new Date("2012-03-20"),
        tags: ["economics", "politics", "history", "sociology", "non-fiction"],
    },
    {
        title: "The Alignment Problem",
        subtitle: "Machine Learning and Human Values",
        author: "Brian Christian",
        slug: "alignment-problem",
        shortDescription:
            "A deep dive into the challenges of aligning AI systems with human values.",
        longDescription:
            "Explores the difficulties and ethical implications of creating artificial intelligence that can understand and align with human values, ethics, and social norms.",
        date: new Date("2020-10-06"),
        tags: ["AI", "philosophy", "technology", "technology", "non-fiction"],
    },
    {
        title: "The Evolution of Desire",
        subtitle: "Strategies of Human Mating",
        author: "David M. Buss",
        slug: "evolution-of-desire",
        shortDescription:
            "An exploration of human mating strategies from an evolutionary perspective.",
        longDescription:
            "Analyzes human mating behavior through the lens of evolutionary psychology, revealing the underlying strategies and mechanisms that guide human sexual behavior and relationships.",
        date: new Date("1994-01-01"),
        tags: [
            "psychology",
            "evolution",
            "biology",
            "history",
            "sociology",
            "non-fiction",
        ],
    },
    {
        title: "The Moral Animal",
        subtitle:
            "Why We Are the Way We Are: The New Science of Evolutionary Psychology",
        author: "Robert Wright",
        slug: "moral-animal",
        shortDescription:
            "An examination of human psychology and social behavior from an evolutionary perspective.",
        longDescription:
            "Investigates the evolutionary roots of human behavior, ethics, and morality, suggesting that our psychological traits and social norms have developed to enhance survival and reproductive success.",
        date: new Date("1994-08-29"),
        tags: ["psychology", "evolution", "religion", "sociology", "non-fiction"],
    },
    {
        title: "The Social Animal",
        subtitle: "The Hidden Sources of Love, Character, and Achievement",
        author: "David Brooks",
        slug: "social-animal",
        shortDescription:
            "A narrative journey through the landscape of human nature and social interaction.",
        longDescription:
            "Uses the story of a fictional couple to explore the role of emotions, intuitions, and social dynamics in shaping our lives, decisions, and relationships.",
        date: new Date("2011-03-08"),
        tags: ["psychology", "sociology", "leadership", "non-fiction"],
    },
    {
        title: "The Years of Lyndon Johnson",
        author: "Robert A. Caro",
        slug: "lbj-years",
        shortDescription:
            "An exhaustive biography of the 36th President of the United States, Lyndon B. Johnson.",
        longDescription:
            "A monumental book of the life and political career of Lyndon B. Johnson. It dives deep into relevant history and the lifes of important figures in his career. It's covering his early years, rise to power, and presidency. The series is notable for its depth and detail, spanning four parts that explore Johnson's complex personality, legislative achievements, and the significant impact of his domestic and foreign policies.",
        date: new Date("2013-12-10"),
        tags: ["biography", "politics", "history", "business"],
    },
    {
        title: "Shoe Dog",
        subtitle: "A Memoir by the Creator of Nike",
        author: "Phil Knight",
        slug: "shoe-dog",
        shortDescription:
            "The memoir of Nike's founder, Phil Knight, detailing the company's early days and rise to global prominence.",
        longDescription:
            "Recounts Phil Knight's journey from selling shoes out of his car trunk to building Nike into one of the world's most recognizable and profitable brands. It's a candid and humanizing look at the trials, tribulations, and triumphs of entrepreneurship and the relentless pursuit of a dream.",
        date: new Date("2016-04-27"),
        tags: [
            "biography",
            "business",
            "entrepreneurship",
            "innovation",
            "fitness",
        ],
    },
    {
        title: "Titan",
        subtitle: "The Life of John D. Rockefeller, Sr.",
        author: "Ron Chernow",
        slug: "titan",
        shortDescription:
            "A comprehensive biography of John D. Rockefeller, Sr., detailing his life, business practices, philanthropy, and legacy.",
        longDescription:
            "Explores the complex figure of John D. Rockefeller, Sr., from his humble beginnings to becoming the world's first billionaire and the patriarch of one of the most influential families in American history. The book examines his business strategies, his contributions to the oil industry, and his extensive philanthropic efforts, offering insights into the man behind the wealth and the impact of his legacy on American capitalism and philanthropy.",
        date: new Date("2012-12-30"),
        tags: [
            "biography",
            "business",
            "history",
            "mindset",
            "religion",
            "strategy",
        ],
    },
    {
        title: "Total Recall",
        subtitle: "My Unbelievably True Life Story",
        author: "Arnold Schwarzenegger",
        slug: "total-recall",
        shortDescription:
            "The autobiography of Arnold Schwarzenegger, showcasing his journey from Austrian immigrant to bodybuilding champion, Hollywood superstar, and Governor of California.",
        longDescription:
            "Charts Schwarzenegger's multifaceted life, starting with his upbringing in Austria, his dominance in the world of bodybuilding, his storied acting career, and his unexpected foray into politics as the Governor of California. The book reveals his ambition, discipline, and the challenges he faced, providing a detailed look at his personal and professional life.",
        date: new Date("2012-10-01"),
        tags: [
            "biography",
            "strategy",
            "politics",
            "fitness",
            "mindset",
        ],
    },
]; //.sort((a, b) => b.date.getTime() - a.date.getTime());