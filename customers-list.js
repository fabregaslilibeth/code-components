const COMPANIES = [
    {
        "ID": 8,
        "CompanyName": "Barnardo's Properties - London Region"
    },
    {
        "ID": 9,
        "CompanyName": "Beaverbrooks The Jewellers Ltd"
    },
    {
        "ID": 10,
        "CompanyName": "Boux Avenue Ltd"
    },
    {
        "ID": 12,
        "CompanyName": "Busy Bees Day Nurseries (Trading) Ltd"
    },
    {
        "ID": 13,
        "CompanyName": "Caffe Nero"
    },
    {
        "ID": 16,
        "CompanyName": "Designplan Lighting Ltd"
    },
    {
        "ID": 27,
        "CompanyName": "Ametek Airtechnology Group Ltd"
    },
    {
        "ID": 43,
        "CompanyName": "Annington Rentals No. 2 Ltd C/O Touchstone"
    },
    {
        "ID": 50,
        "CompanyName": "Coffee Republic Ltd"
    },
    {
        "ID": 51,
        "CompanyName": "Dolby Medical Home Respiratory Care Limited"
    },
    {
        "ID": 53,
        "CompanyName": "Draft House Holding Ltd Brewdog Retail Ltd T/A"
    },
    {
        "ID": 64,
        "CompanyName": "Ametek "
    },
    {
        "ID": 72,
        "CompanyName": "Everyman Media Limited "
    },
    {
        "ID": 73,
        "CompanyName": "Cold Control Services"
    },
    {
        "ID": 78,
        "CompanyName": " Ellis Building Services Limited"
    },
    {
        "ID": 99,
        "CompanyName": "CRW Building Services Ltd"
    },
    {
        "ID": 105,
        "CompanyName": "Bill's Restaurants Ltd"
    },
    {
        "ID": 107,
        "CompanyName": "ASB Law "
    },
    {
        "ID": 112,
        "CompanyName": "Caprice Ivy Covent Garden LTD"
    },
    {
        "ID": 113,
        "CompanyName": "Caprice Chelsea Grill LTD"
    },
    {
        "ID": 114,
        "CompanyName": "Caprice Basil Street LTD"
    },
    {
        "ID": 128,
        "CompanyName": "Co-Operative Group "
    },
    {
        "ID": 129,
        "CompanyName": "AECA Imagination Ltd"
    },
    {
        "ID": 131,
        "CompanyName": "AMP Air Conditioning"
    },
    {
        "ID": 136,
        "CompanyName": "Advanced Drainage Solutions ltd"
    },
    {
        "ID": 137,
        "CompanyName": "Caprice Holdings Limited "
    },
    {
        "ID": 143,
        "CompanyName": "CM Covent Garden Limited"
    },
    {
        "ID": 145,
        "CompanyName": "Cote Restaurant Group Ltd"
    },
    {
        "ID": 160,
        "CompanyName": "46 Berkeley Square Ltd – Annabel’s "
    },
    {
        "ID": 164,
        "CompanyName": "Crayford Dog Stadium - Ladbrokes"
    },
    {
        "ID": 169,
        "CompanyName": "Cats Protection"
    },
    {
        "ID": 170,
        "CompanyName": "DAO GROUP"
    },
    {
        "ID": 173,
        "CompanyName": "Darwin & Wallace Limited"
    },
    {
        "ID": 174,
        "CompanyName": "Ensigna Construction Ltd"
    },
    {
        "ID": 182,
        "CompanyName": "Christopher Smith Associates LLP "
    },
    {
        "ID": 183,
        "CompanyName": "Envoplan Limited"
    },
    {
        "ID": 184,
        "CompanyName": "Dan Finnegan"
    },
    {
        "ID": 185,
        "CompanyName": "Coral Brighton & Hove Greyhound Stadium "
    },
    {
        "ID": 191,
        "CompanyName": "Bath & Racquets Club"
    },
    {
        "ID": 192,
        "CompanyName": "Bracknell BID "
    },
    {
        "ID": 193,
        "CompanyName": "Envirotech FM - DO NOT RAISE ANYTHING FOR THIS CLIENT "
    },
    {
        "ID": 194,
        "CompanyName": "Curchod & Co"
    },
    {
        "ID": 196,
        "CompanyName": "Cote c/o Bellrock"
    },
    {
        "ID": 206,
        "CompanyName": "Baker and Spice (London) Ltd"
    },
    {
        "ID": 208,
        "CompanyName": "2gether"
    },
    {
        "ID": 209,
        "CompanyName": "Circolo Popolare"
    },
    {
        "ID": 210,
        "CompanyName": "APC/Trans UK Logistics"
    },
    {
        "ID": 212,
        "CompanyName": "Dan Kimber House"
    },
    {
        "ID": 216,
        "CompanyName": "Avenue Flooring"
    },
    {
        "ID": 220,
        "CompanyName": "Casa do Frango MJMK LTD"
    },
    {
        "ID": 223,
        "CompanyName": "Co-operative Group - Capital Investments Department 10102"
    },
    {
        "ID": 227,
        "CompanyName": "Ave Mario"
    },
    {
        "ID": 229,
        "CompanyName": "46 Berkley Square Limited - Birley Development Kitchen"
    },
    {
        "ID": 232,
        "CompanyName": "Conegate"
    },
    {
        "ID": 237,
        "CompanyName": "Buzz Bingo "
    },
    {
        "ID": 239,
        "CompanyName": "Brown and Carrol living"
    },
    {
        "ID": 242,
        "CompanyName": "Camm & Hooper "
    },
    {
        "ID": 247,
        "CompanyName": "Alpollo Air Mechanical Services "
    },
    {
        "ID": 260,
        "CompanyName": "EI Group PLC"
    },
    {
        "ID": 265,
        "CompanyName": "Ellie John "
    },
    {
        "ID": 271,
        "CompanyName": "CVS"
    },
    {
        "ID": 280,
        "CompanyName": "Chotto Matte "
    },
    {
        "ID": 283,
        "CompanyName": "Arkle Finance Ltd"
    },
    {
        "ID": 292,
        "CompanyName": "Dinings SW3"
    },
    {
        "ID": 300,
        "CompanyName": "Abinger Hatch "
    },
    {
        "ID": 301,
        "CompanyName": "CBK"
    },
    {
        "ID": 303,
        "CompanyName": "CARLOTTA Big Mamma Marylebone "
    },
    {
        "ID": 309,
        "CompanyName": "Clarks Farm Greyhound Rescue"
    },
    {
        "ID": 311,
        "CompanyName": "Erith Contractors limited "
    },
    {
        "ID": 312,
        "CompanyName": "Antic London"
    },
    {
        "ID": 315,
        "CompanyName": "Cubitts KX Limited"
    },
    {
        "ID": 316,
        "CompanyName": "Brunning & Price Limited"
    },
    {
        "ID": 319,
        "CompanyName": "Arnage Building & Refurbishment Contractors Ltd"
    },
    {
        "ID": 320,
        "CompanyName": "Ecosafe Heating Ltd"
    },
    {
        "ID": 321,
        "CompanyName": "Calici Camden"
    },
    {
        "ID": 322,
        "CompanyName": "Brocade Limited"
    },
    {
        "ID": 327,
        "CompanyName": "4th Horsham Scouts"
    },
    {
        "ID": 329,
        "CompanyName": "Aerobility"
    },
    {
        "ID": 330,
        "CompanyName": "AL.AN.S.A. c/o Property Initiatives Management Ltd"
    },
    {
        "ID": 344,
        "CompanyName": "Cistus LTD"
    },
    {
        "ID": 345,
        "CompanyName": "ASLAP LIMITED"
    },
    {
        "ID": 346,
        "CompanyName": "Bee World UK LTD "
    },
    {
        "ID": 352,
        "CompanyName": "AIMES LIMITED "
    },
    {
        "ID": 357,
        "CompanyName": "ATFC Ltd"
    },
    {
        "ID": 360,
        "CompanyName": "Burger King"
    },
    {
        "ID": 363,
        "CompanyName": "Bestfood Logistics Ltd"
    },
    {
        "ID": 366,
        "CompanyName": "ABERDEEN CITY COUNCIL PENSION FUND "
    },
    {
        "ID": 367,
        "CompanyName": "Axis Europe"
    },
    {
        "ID": 373,
        "CompanyName": "Aldworth Residents Company Limited"
    },
    {
        "ID": 378,
        "CompanyName": "CC STIM UK TRADECO 4 LTD"
    },
    {
        "ID": 379,
        "CompanyName": "Big Mamma Holdings Ltd"
    },
    {
        "ID": 380,
        "CompanyName": "Dental practice on the hill"
    },
    {
        "ID": 381,
        "CompanyName": "Danish Bake UK LTD"
    },
    {
        "ID": 382,
        "CompanyName": "APPLEBEE FISH "
    },
    {
        "ID": 384,
        "CompanyName": "Elite Electrix Ltd T/as Elite PMR"
    },
    {
        "ID": 385,
        "CompanyName": "Denver Commercial Services"
    },
    {
        "ID": 388,
        "CompanyName": "Bremont Watch Company"
    },
    {
        "ID": 389,
        "CompanyName": "Babel Silk Limited"
    },
    {
        "ID": 391,
        "CompanyName": "Bloom Associates "
    },
    {
        "ID": 394,
        "CompanyName": "Caravan"
    },
    {
        "ID": 398,
        "CompanyName": "Elflock Limited"
    },
    {
        "ID": 399,
        "CompanyName": "Amazonico London"
    },
    {
        "ID": 402,
        "CompanyName": "Bright Stars"
    },
    {
        "ID": 406,
        "CompanyName": "Admiral Taverns"
    },
    {
        "ID": 409,
        "CompanyName": "Dundonald Primary School"
    },
    {
        "ID": 412,
        "CompanyName": "Chapeau Bermondsey Limited"
    },
    {
        "ID": 414,
        "CompanyName": "Dave Seaton "
    },
    {
        "ID": 415,
        "CompanyName": "Buntingford Leisure Group Ltd"
    },
    {
        "ID": 418,
        "CompanyName": "Bob W Technologies UK  Limited"
    },
    {
        "ID": 419,
        "CompanyName": "Arnage Building and Refurbishment ltd"
    },
    {
        "ID": 423,
        "CompanyName": "Abbeyfield Southern Oaks"
    },
    {
        "ID": 430,
        "CompanyName": "Caravan Coffee Roasters Ltd"
    },
    {
        "ID": 432,
        "CompanyName": "BESTech Solutions UK Ltd"
    },
    {
        "ID": 434,
        "CompanyName": "Authenthi Surv Ltd"
    },
    {
        "ID": 439,
        "CompanyName": "Camm and Hooper Waterloo Limited"
    },
    {
        "ID": 440,
        "CompanyName": "Beefy Boys Cheltenham Limited"
    },
    {
        "ID": 446,
        "CompanyName": "Carpet Right"
    },
    {
        "ID": 451,
        "CompanyName": "C-Side Ltd"
    },
    {
        "ID": 456,
        "CompanyName": "Conilon LTD - T/A Black Sheep Coffee "
    },
    {
        "ID": 457,
        "CompanyName": "135 Elms Cres, London SW4 8QQ"
    },
    {
        "ID": 465,
        "CompanyName": "CIC Ltd"
    },
    {
        "ID": 467,
        "CompanyName": "CM Covent Garden Limited - Balthazar "
    },
    {
        "ID": 468,
        "CompanyName": "Criterion Capital"
    },
    {
        "ID": 471,
        "CompanyName": "FONDA MJMK Ltd"
    },
    {
        "ID": 476,
        "CompanyName": "Entain Marketing (UK) Limited"
    },
    {
        "ID": 480,
        "CompanyName": "BESTech solution uk "
    },
    {
        "ID": 481,
        "CompanyName": "Cottesmore Hotel Golf and country club"
    },
    {
        "ID": 486,
        "CompanyName": "Beefy Boys Shrewsbury Limited"
    },
    {
        "ID": 487,
        "CompanyName": "ANGLOTHAI MJMK LIMITED"
    },
    {
        "ID": 489,
        "CompanyName": "Chelsea Fine Food Ltd T/A Megan's"
    },
    {
        "ID": 491,
        "CompanyName": "Central Restaurants"
    },
    {
        "ID": 494,
        "CompanyName": "Exultant Food to Go LTD"
    },
    {
        "ID": 496,
        "CompanyName": "Ash Special Works LTD"
    },
    {
        "ID": 498,
        "CompanyName": "F&L Projects Ltd"
    },
    {
        "ID": 500,
        "CompanyName": "CPS Building Services Ltd"
    },
    {
        "ID": 504,
        "CompanyName": "Bar Des Pres"
    },
    {
        "ID": 522,
        "CompanyName": "Apollo Tyres Holdings Ltd "
    },
    {
        "ID": 530,
        "CompanyName": "Cura Rooms"
    },
    {
        "ID": 535,
        "CompanyName": "BBB Unit Limited"
    },
    {
        "ID": 540,
        "CompanyName": "FONDA MJMK Ltd. "
    },
    {
        "ID": 541,
        "CompanyName": "Barbarella 30 S Colonnade London E14 5HX"
    },
    {
        "ID": 542,
        "CompanyName": "Circolo Poplare Manchester 28 Jackson's Row M2 5WD"
    },
    {
        "ID": 547,
        "CompanyName": "Aaron Access Limited"
    },
    {
        "ID": 548,
        "CompanyName": "Acorn Lodge Ltd, T/A Acorn Lodge"
    },
    {
        "ID": 549,
        "CompanyName": "Ann Summers UK Ltd"
    },
    {
        "ID": 550,
        "CompanyName": "Ashfords LLP - Bristol"
    },
    {
        "ID": 551,
        "CompanyName": "Ashfords LLP - Exeter"
    },
    {
        "ID": 552,
        "CompanyName": "Ashfords LLP - London"
    },
    {
        "ID": 553,
        "CompanyName": "Ashfords LLP - Plymouth"
    },
    {
        "ID": 554,
        "CompanyName": "Ashfords LLP - Taunton"
    },
    {
        "ID": 555,
        "CompanyName": "Ashfords LLP - Tiverton"
    },
    {
        "ID": 556,
        "CompanyName": "Ashridge Court Ltd"
    },
    {
        "ID": 557,
        "CompanyName": "Astbury Mere Care Home - Parent"
    },
    {
        "ID": 558,
        "CompanyName": "Avondale Care Home - Parent"
    },
    {
        "ID": 559,
        "CompanyName": "Barley Manor Care Home - Parent"
    },
    {
        "ID": 560,
        "CompanyName": "Barty House Nursing Home Ltd"
    },
    {
        "ID": 561,
        "CompanyName": "BELL EQUIPMENT UK LIMITED"
    },
    {
        "ID": 562,
        "CompanyName": "BNTL CARE LTD, T/A Summerdale Court"
    },
    {
        "ID": 563,
        "CompanyName": "Bourne Wood Manor Care Home - Parent"
    },
    {
        "ID": 564,
        "CompanyName": "Canford Healthcare Ltd"
    },
    {
        "ID": 565,
        "CompanyName": "Cavella Park Care Home - Parent"
    },
    {
        "ID": 566,
        "CompanyName": "Cedars Care Home (Southend - on - Sea) Ltd"
    },
    {
        "ID": 567,
        "CompanyName": "Charles Tyrwhitt Shirts Limited"
    },
    {
        "ID": 568,
        "CompanyName": "Chiltern Grange Care Home - Parent"
    },
    {
        "ID": 569,
        "CompanyName": "Clark Diamonds"
    },
    {
        "ID": 570,
        "CompanyName": "Colmore PS Limited"
    },
    {
        "ID": 571,
        "CompanyName": "Control Risks Group Limited"
    },
    {
        "ID": 572,
        "CompanyName": "Cotswold Care Home - Parent"
    },
    {
        "ID": 573,
        "CompanyName": "Deer Park Care Home - Parent"
    },
    {
        "ID": 627,
        "CompanyName": "Aidar Ltd - Crepeaffair Chiswick"
    },
    {
        "ID": 628,
        "CompanyName": "Bearsted Medical Surgery"
    },
    {
        "ID": 629,
        "CompanyName": "Black Horse Inn"
    },
    {
        "ID": 630,
        "CompanyName": "Blossom House School Ltd"
    },
    {
        "ID": 631,
        "CompanyName": "Chiddingstone C of E School"
    },
    {
        "ID": 632,
        "CompanyName": "Cook Trading Ltd - Sittingbourne"
    },
    {
        "ID": 633,
        "CompanyName": "Delce Academy"
    },
    {
        "ID": 634,
        "CompanyName": "Diamond Photofoil Ltd"
    },
    {
        "ID": 650,
        "CompanyName": "Estiatorio Milo's"
    },
    {
        "ID": 655,
        "CompanyName": "City Of London Academy"
    },
    {
        "ID": 659,
        "CompanyName": "EKC Group"
    },
    {
        "ID": 662,
        "CompanyName": "BKUK Group Ltd (PRONETT APP)"
    },
    {
        "ID": 667,
        "CompanyName": "Canary Wharf Management Ltd"
    },
    {
        "ID": 670,
        "CompanyName": "AMH Family Enterprise Ltd"
    },
    {
        "ID": 676,
        "CompanyName": "Banstead Prep School"
    },
    {
        "ID": 685,
        "CompanyName": "Chingford Foundation School"
    },
    {
        "ID": 689,
        "CompanyName": "CSAT T/A Cage Green Primary School"
    },
    {
        "ID": 690,
        "CompanyName": "Caravan Kings Cross (MAINLIX APP)"
    },
    {
        "ID": 691,
        "CompanyName": "Caravan Exmouth Market (MAINLIX APP)"
    },
    {
        "ID": 695,
        "CompanyName": "Berber & Q Limited  (MAINLIX APP)"
    },
    {
        "ID": 701,
        "CompanyName": "BSW Heating"
    },
    {
        "ID": 704,
        "CompanyName": "Cinnamon Collection Ltd - (PRONETT APP - GIRAFFE/BOPARAN)"
    },
    {
        "ID": 705,
        "CompanyName": "Carpigiani UK Ltd"
    },
    {
        "ID": 708,
        "CompanyName": "Aspris Children's services Ltd (PRONETT APP)"
    },
    {
        "ID": 713,
        "CompanyName": "ESP Technologies Group Ltd"
    },
    {
        "ID": 721,
        "CompanyName": "Downderry Primary School"
    },
    {
        "ID": 722,
        "CompanyName": "EIGHT FOUR TWO LIMITED"
    },
    {
        "ID": 724,
        "CompanyName": "Browns Hotel (Rocco Forte & Family (London) Ltd)"
    },
    {
        "ID": 729,
        "CompanyName": "CTM Restaurants Ltd"
    },
    {
        "ID": 730,
        "CompanyName": "Deliveroo HOP Ltd"
    },
    {
        "ID": 731,
        "CompanyName": "Asda Express Limited"
    },
    {
        "ID": 733,
        "CompanyName": "Deliveroo SP Ltd"
    },
    {
        "ID": 737,
        "CompanyName": "EGspresso Ltd"
    },
    {
        "ID": 741,
        "CompanyName": "ECMS Express (UK) Ltd"
    },
    {
        "ID": 743,
        "CompanyName": "Classic Lifts Ltd"
    },
    {
        "ID": 744,
        "CompanyName": "Ashmole Academy"
    },
    {
        "ID": 745,
        "CompanyName": "Beaumont Clements Limited"
    },
    {
        "ID": 746,
        "CompanyName": "Canoports UK Ltd T/A Ali Deck"
    },
    {
        "ID": 749,
        "CompanyName": "DNP Restaurants Ltd T/A McDonalds"
    },
    {
        "ID": 750,
        "CompanyName": "Amaro Signalling Ltd"
    },
    {
        "ID": 752,
        "CompanyName": "Buns from Home"
    },
    {
        "ID": 756,
        "CompanyName": "Creative Technology  Ltd"
    },
    {
        "ID": 758,
        "CompanyName": "Exhibition Stands Manufacturer T/A ESM"
    },
    {
        "ID": 764,
        "CompanyName": "Chart Enterprises Ltd"
    },
    {
        "ID": 768,
        "CompanyName": "BAO London Limited (PRONETT APP)"
    },
    {
        "ID": 771,
        "CompanyName": "Berenjak Restaurants Limited"
    },
    {
        "ID": 773,
        "CompanyName": "Catering Projects Ltd"
    },
    {
        "ID": 775,
        "CompanyName": "AR Valve resources Ltd"
    },
    {
        "ID": 777,
        "CompanyName": "Conference Communications Ltd"
    },
    {
        "ID": 779,
        "CompanyName": "Elite Coffee Ltd"
    },
    {
        "ID": 780,
        "CompanyName": "Docklands Restaurants and Bars Ltd"
    },
    {
        "ID": 782,
        "CompanyName": "ATG Entertainment Limited"
    },
    {
        "ID": 785,
        "CompanyName": "Brigadiers Restaurants Limited"
    },
    {
        "ID": 786,
        "CompanyName": "Espresso Solutions Ltd"
    },
    {
        "ID": 787,
        "CompanyName": "EGOTM LTD"
    },
    {
        "ID": 788,
        "CompanyName": "Betteshanger Sports & Social Club"
    },
    {
        "ID": 792,
        "CompanyName": "Drop-in Limited"
    },
    {
        "ID": 794,
        "CompanyName": "Central Restaurant and Catering Company Ltd"
    },
    {
        "ID": 800,
        "CompanyName": "AT&T GB Ltd"
    },
    {
        "ID": 802,
        "CompanyName": "Edmundson Electrical Ltd"
    },
    {
        "ID": 804,
        "CompanyName": "Babur 1998 Ltd"
    },
    {
        "ID": 811,
        "CompanyName": "Aircraft Owners & Pilots Association (AOPA)"
    },
    {
        "ID": 818,
        "CompanyName": "Elixarome Limited"
    },
    {
        "ID": 819,
        "CompanyName": "Bibi Restaurants Limited"
    },
    {
        "ID": 821,
        "CompanyName": "Exultant Food to Go Limited"
    },
    {
        "ID": 823,
        "CompanyName": "Ambassadors Restaurants Limited"
    },
    {
        "ID": 825,
        "CompanyName": "Belmont Healthcare Group"
    },
    {
        "ID": 827,
        "CompanyName": "B Bagel Trading Limited"
    },
    {
        "ID": 828,
        "CompanyName": "39 QGG Management Ltd"
    },
    {
        "ID": 834,
        "CompanyName": "Clarette"
    },
    {
        "ID": 839,
        "CompanyName": "Easy Hotel UK Ltd"
    },
    {
        "ID": 840,
        "CompanyName": "Caffe Concerto Ltd"
    },
    {
        "ID": 845,
        "CompanyName": "B J I Ltd T/A Montana Hotel"
    },
    {
        "ID": 863,
        "CompanyName": "Bills Bakery - Test"
    },
    {
        "ID": 865,
        "CompanyName": "Berenjak Restaurants Limited (PRONETT APP)"
    },
    {
        "ID": 866,
        "CompanyName": "Bob Bob Ricard City"
    },
    {
        "ID": 867,
        "CompanyName": "Brigadiers Restaurants Limited (PRONETT APP)"
    },
    {
        "ID": 868,
        "CompanyName": "Brindisa Kitchens Ltd"
    },
    {
        "ID": 869,
        "CompanyName": "Chaiyo Restaurants Ltd"
    },
    {
        "ID": 870,
        "CompanyName": "Clarette (PRONETT APP)"
    },
    {
        "ID": 871,
        "CompanyName": "Cossiga Europe Ltd"
    },
    {
      "ID": 4,
      "CompanyName": "Mitchells & Butler PLC"
  },
  {
      "ID": 17,
      "CompanyName": "Fred Perry"
  },
  {
      "ID": 20,
      "CompanyName": "Greggs PLC"
  },
  {
      "ID": 22,
      "CompanyName": "Ladbrokes Betting & Gaming Ltd"
  },
  {
      "ID": 23,
      "CompanyName": "London Graphic Centre"
  },
  {
      "ID": 25,
      "CompanyName": "Mitie Technical Facilities Management Ltd"
  },
  {
      "ID": 28,
      "CompanyName": "IDH Group Ltd"
  },
  {
      "ID": 54,
      "CompanyName": "MSM Solutions "
  },
  {
      "ID": 60,
      "CompanyName": "National Facilities Management - DO NOT RAISE ANYTHING FOR THIS CLIENT "
  },
  {
      "ID": 67,
      "CompanyName": "Limeyard Ltd"
  },
  {
      "ID": 68,
      "CompanyName": "Jackson & Rye Ltd"
  },
  {
      "ID": 92,
      "CompanyName": "Face & Co Ltd"
  },
  {
      "ID": 102,
      "CompanyName": "Market Taverns Ltd"
  },
  {
      "ID": 103,
      "CompanyName": "GIOMA (UK) LIMITED"
  },
  {
      "ID": 104,
      "CompanyName": "Harper & Tweedie"
  },
  {
      "ID": 108,
      "CompanyName": "M Restaurants Limited "
  },
  {
      "ID": 115,
      "CompanyName": "Harrys Bar Restaurants LTD"
  },
  {
      "ID": 116,
      "CompanyName": "John Cope"
  },
  {
      "ID": 124,
      "CompanyName": "Lush Retail"
  },
  {
      "ID": 127,
      "CompanyName": "Iceland"
  },
  {
      "ID": 130,
      "CompanyName": "Merkur Technical Support UK LTD"
  },
  {
      "ID": 135,
      "CompanyName": "Kiwi Design "
  },
  {
      "ID": 140,
      "CompanyName": "K.M.P Solutions"
  },
  {
      "ID": 142,
      "CompanyName": "Merkur Bingo and Casino Entertainment UK Limtied"
  },
  {
      "ID": 144,
      "CompanyName": "Lime Tree Surgery"
  },
  {
      "ID": 146,
      "CompanyName": "JSR renovations"
  },
  {
      "ID": 147,
      "CompanyName": "Metropolitan Electrical Services Limited"
  },
  {
      "ID": 159,
      "CompanyName": "Greenfield Food Supply Limited"
  },
  {
      "ID": 162,
      "CompanyName": "Gowrie Holdings Limited t/A B&S Group "
  },
  {
      "ID": 166,
      "CompanyName": "Hurlingham Heating"
  },
  {
      "ID": 175,
      "CompanyName": "Marks Club (Charles St) Ltd"
  },
  {
      "ID": 176,
      "CompanyName": "George (Mount St) Ltd"
  },
  {
      "ID": 177,
      "CompanyName": "Henshall and Sheehy Support Services"
  },
  {
      "ID": 178,
      "CompanyName": "Harrys Bar LTD"
  },
  {
      "ID": 186,
      "CompanyName": "Merkur Slots UK Ltd"
  },
  {
      "ID": 189,
      "CompanyName": "NLS Security"
  },
  {
      "ID": 198,
      "CompanyName": "Live Group-Unit 9 Princess Mews, Horace Road, Kingston, KT1 2SZ."
  },
  {
      "ID": 199,
      "CompanyName": "MJMK Limited"
  },
  {
      "ID": 211,
      "CompanyName": "Greggs Residential"
  },
  {
      "ID": 214,
      "CompanyName": "Gloria "
  },
  {
      "ID": 217,
      "CompanyName": "Medlec Elec"
  },
  {
      "ID": 218,
      "CompanyName": "La Rampa Bars"
  },
  {
      "ID": 219,
      "CompanyName": "KOL MJMK Ltd"
  },
  {
      "ID": 222,
      "CompanyName": "Ivy Farm Technologies Ltd"
  },
  {
      "ID": 225,
      "CompanyName": "Mash Inns Ltd (Laine Group)"
  },
  {
      "ID": 228,
      "CompanyName": "Hawksmoor"
  },
  {
      "ID": 233,
      "CompanyName": "Karen Marsh"
  },
  {
      "ID": 238,
      "CompanyName": "Individual Restaurants"
  },
  {
      "ID": 248,
      "CompanyName": "Holmbush Farm"
  },
  {
      "ID": 254,
      "CompanyName": "KRB Capital LTD (t/a Socca)"
  },
  {
      "ID": 256,
      "CompanyName": "Just Building Services"
  },
  {
      "ID": 258,
      "CompanyName": "Love Brownies"
  },
  {
      "ID": 262,
      "CompanyName": "Integrated Facilities LTD"
  },
  {
      "ID": 266,
      "CompanyName": "Jigsaw Subcontractor"
  },
  {
      "ID": 267,
      "CompanyName": "Lisboeta MJMK LTD"
  },
  {
      "ID": 269,
      "CompanyName": "Jean Shinerock "
  },
  {
      "ID": 270,
      "CompanyName": "José Pizarro "
  },
  {
      "ID": 272,
      "CompanyName": "MCD Group ltd"
  },
  {
      "ID": 279,
      "CompanyName": "Just Good Hygiene "
  },
  {
      "ID": 284,
      "CompanyName": "Jacuzzi"
  },
  {
      "ID": 289,
      "CompanyName": "Grosvenor Pubs Trading Ltd"
  },
  {
      "ID": 294,
      "CompanyName": "G L Restaurants "
  },
  {
      "ID": 296,
      "CompanyName": "Glow Worm Group Ltd"
  },
  {
      "ID": 297,
      "CompanyName": "JD Wetherspoon "
  },
  {
      "ID": 318,
      "CompanyName": "Mr Chris Gradel -Hertfordshire House"
  },
  {
      "ID": 325,
      "CompanyName": "Far East Holdings Limited (t/a Koyn)"
  },
  {
      "ID": 331,
      "CompanyName": "Marugame Udon Europe Ltd"
  },
  {
      "ID": 332,
      "CompanyName": "Intergrated Fire Security"
  },
  {
      "ID": 334,
      "CompanyName": "Mark Gudgin "
  },
  {
      "ID": 337,
      "CompanyName": "First Mile (Pret)"
  },
  {
      "ID": 338,
      "CompanyName": "Hayhursts"
  },
  {
      "ID": 339,
      "CompanyName": "Marigold Summer"
  },
  {
      "ID": 341,
      "CompanyName": "First Mile "
  },
  {
      "ID": 347,
      "CompanyName": "Gregarious Limited"
  },
  {
      "ID": 355,
      "CompanyName": "JURASSIC COAST COFFEE LIMITED"
  },
  {
      "ID": 359,
      "CompanyName": "Fireaway Pizza"
  },
  {
      "ID": 362,
      "CompanyName": "Hayley Evans "
  },
  {
      "ID": 365,
      "CompanyName": "Gremio de London Limited"
  },
  {
      "ID": 369,
      "CompanyName": "Morphose Capital Partners "
  },
  {
      "ID": 370,
      "CompanyName": "Marigold Spring Limited"
  },
  {
      "ID": 371,
      "CompanyName": "Gould Property Consultants LLP."
  },
  {
      "ID": 383,
      "CompanyName": "Gareth West Building and Carpentry "
  },
  {
      "ID": 386,
      "CompanyName": "Honest Burgers"
  },
  {
      "ID": 390,
      "CompanyName": "London AC Ltd"
  },
  {
      "ID": 393,
      "CompanyName": "Jessica McCormack"
  },
  {
      "ID": 395,
      "CompanyName": "Frame "
  },
  {
      "ID": 400,
      "CompanyName": "Gold"
  },
  {
      "ID": 403,
      "CompanyName": "French Connection UK Limited"
  },
  {
      "ID": 404,
      "CompanyName": "MAPP LTD (CB)"
  },
  {
      "ID": 410,
      "CompanyName": "Mark Bristow House"
  },
  {
      "ID": 411,
      "CompanyName": "Mark Askew-Kpig LTD"
  },
  {
      "ID": 413,
      "CompanyName": "Navarac LTD"
  },
  {
      "ID": 417,
      "CompanyName": "Ladbrokes Betting & Gaming Limited CRAYFORD "
  },
  {
      "ID": 425,
      "CompanyName": "Ifield Park care home"
  },
  {
      "ID": 428,
      "CompanyName": "Flat Iron Steak LTD"
  },
  {
      "ID": 435,
      "CompanyName": "Leaseholder "
  },
  {
      "ID": 437,
      "CompanyName": "GAIA"
  },
  {
      "ID": 443,
      "CompanyName": "La Maison Ani "
  },
  {
      "ID": 444,
      "CompanyName": "IMCD UK Ltd "
  },
  {
      "ID": 448,
      "CompanyName": "Hovarda "
  },
  {
      "ID": 450,
      "CompanyName": "Neos 8Ltd "
  },
  {
      "ID": 453,
      "CompanyName": "Lantana London Bridge"
  },
  {
      "ID": 459,
      "CompanyName": "Java Whiskers"
  },
  {
      "ID": 460,
      "CompanyName": "Marstons Holdings "
  },
  {
      "ID": 463,
      "CompanyName": "Ford Rental"
  },
  {
      "ID": 466,
      "CompanyName": "Fortuna Bars Ltd "
  },
  {
      "ID": 469,
      "CompanyName": "Metal Box Traders LTD"
  },
  {
      "ID": 470,
      "CompanyName": "Java Whiskers UK Ltd"
  },
  {
      "ID": 477,
      "CompanyName": "HOP"
  },
  {
      "ID": 478,
      "CompanyName": "Foresters Financial"
  },
  {
      "ID": 479,
      "CompanyName": "Mars Maintenance Ltd "
  },
  {
      "ID": 482,
      "CompanyName": "Nando's Chickenland Limited"
  },
  {
      "ID": 483,
      "CompanyName": "JLA HVAC Ltd "
  },
  {
      "ID": 484,
      "CompanyName": "In One Basket Ltd"
  },
  {
      "ID": 485,
      "CompanyName": "Joanna's Boutique Tearooms"
  },
  {
      "ID": 493,
      "CompanyName": "M&S c/o City FM Holdings"
  },
  {
      "ID": 495,
      "CompanyName": "LUXURY LEISURE"
  },
  {
      "ID": 501,
      "CompanyName": "Le bellezza"
  },
  {
      "ID": 505,
      "CompanyName": "Gattopardo "
  },
  {
      "ID": 510,
      "CompanyName": "Gordon Ramsay Holdings Limited"
  },
  {
      "ID": 512,
      "CompanyName": "NEOS 6 Limited"
  },
  {
      "ID": 513,
      "CompanyName": "Neos 4 Ltd"
  },
  {
      "ID": 514,
      "CompanyName": "Harnbury Ltd"
  },
  {
      "ID": 515,
      "CompanyName": "Harnbury Holdings Ltd - San Carlo"
  },
  {
      "ID": 516,
      "CompanyName": "NM Burger Head Ops Limited"
  },
  {
      "ID": 517,
      "CompanyName": "Independent Builders Merchant Group "
  },
  {
      "ID": 519,
      "CompanyName": "Greene King Brewing and Retailing LTD"
  },
  {
      "ID": 525,
      "CompanyName": "Homes for Students Limited "
  },
  {
      "ID": 526,
      "CompanyName": "Fat Hippo Group LTD"
  },
  {
      "ID": 527,
      "CompanyName": "La Bellezza 2 Chamberlain Square Paradise B3 3AX"
  },
  {
      "ID": 533,
      "CompanyName": "NEOS 5"
  },
  {
      "ID": 537,
      "CompanyName": "In House Contractor's Ltd"
  },
  {
      "ID": 539,
      "CompanyName": "Genco"
  },
  {
      "ID": 544,
      "CompanyName": "Gold Star LTD"
  },
  {
      "ID": 545,
      "CompanyName": "Mathew Chaya"
  },
  {
      "ID": 546,
      "CompanyName": "Independant Builders"
  },
  {
      "ID": 574,
      "CompanyName": "Falkland Grange Care Home - Parent"
  },
  {
      "ID": 575,
      "CompanyName": "Foundever"
  },
  {
      "ID": 576,
      "CompanyName": "Griffon Hoverwork"
  },
  {
      "ID": 577,
      "CompanyName": "Haddon Hall Care Home - Parent"
  },
  {
      "ID": 578,
      "CompanyName": "Halton Services Ltd"
  },
  {
      "ID": 579,
      "CompanyName": "Hampton Care Ltd"
  },
  {
      "ID": 580,
      "CompanyName": "Hartfield House Care Home - Parent"
  },
  {
      "ID": 581,
      "CompanyName": "Heathlands Care Home (Chingford) Ltd"
  },
  {
      "ID": 582,
      "CompanyName": "HFD Limited"
  },
  {
      "ID": 583,
      "CompanyName": "Hounslow Council"
  },
  {
      "ID": 584,
      "CompanyName": "Inglewood Nursing Home Ltd"
  },
  {
      "ID": 585,
      "CompanyName": "IPRS"
  },
  {
      "ID": 586,
      "CompanyName": "Jacobs UK Limited"
  },
  {
      "ID": 587,
      "CompanyName": "Jacobs UK Limited - Birmingham"
  },
  {
      "ID": 588,
      "CompanyName": "Lavender Oaks Care Home - Parent"
  },
  {
      "ID": 589,
      "CompanyName": "LCH Brook Ltd TA Brook House Care Home"
  },
  {
      "ID": 590,
      "CompanyName": "Lea Grange Care Home - Parent"
  },
  {
      "ID": 591,
      "CompanyName": "Leander Club Limited"
  },
  {
      "ID": 592,
      "CompanyName": "Lincroft Meadow Care Home - Parent"
  },
  {
      "ID": 593,
      "CompanyName": "LK Bennett Fashion Limited"
  },
  {
      "ID": 594,
      "CompanyName": "Lukka Care Homes (2010) Ltd, T/A Ashton Lodge"
  },
  {
      "ID": 595,
      "CompanyName": "LUKKA CARE HOMES LIMITED, T/A Ravenscourt Nursing"
  },
  {
      "ID": 596,
      "CompanyName": "Maples Care Home (Bexleyheath) Ltd"
  },
  {
      "ID": 597,
      "CompanyName": "Mayflower Care Home (Northfleet) Ltd"
  },
  {
      "ID": 598,
      "CompanyName": "Mitie FM Ltd - Accounts Payable"
  },
  {
      "ID": 599,
      "CompanyName": "MORNINGTON CARE LTD, T/A Mornington Hall"
  },
  {
      "ID": 600,
      "CompanyName": "Murdock Limited"
  },
  {
      "ID": 601,
      "CompanyName": "Neal’s Yard (Natural Remedies) Limited"
  },
  {
      "ID": 602,
      "CompanyName": "Nespresso UK Ltd"
  },
  {
      "ID": 623,
      "CompanyName": "MITIE Technical Facilities Management Limited"
  },
  {
      "ID": 635,
      "CompanyName": "Frittenden Primary School"
  },
  {
      "ID": 636,
      "CompanyName": "Genco Construction Services Ltd"
  },
  {
      "ID": 637,
      "CompanyName": "Hilditch & Key Ltd"
  },
  {
      "ID": 638,
      "CompanyName": "Leon Restaurants Ltd - Head Office (SERVICE CHANNEL APP)"
  },
  {
      "ID": 639,
      "CompanyName": "London Studio Centre"
  },
  {
      "ID": 649,
      "CompanyName": "Fresh & Wild Ltd T/A Whole Foods Market (VERISAE APP)"
  },
  {
      "ID": 651,
      "CompanyName": "Instro Precision"
  },
  {
      "ID": 652,
      "CompanyName": "Innoventive Property Services Ltd"
  },
  {
      "ID": 657,
      "CompanyName": "Itsu Ltd"
  },
  {
      "ID": 658,
      "CompanyName": "Islamic Relief UK"
  },
  {
      "ID": 663,
      "CompanyName": "FP Redhill  Property Management Division"
  },
  {
      "ID": 664,
      "CompanyName": "Holiday Inn - Rochester"
  },
  {
      "ID": 665,
      "CompanyName": "Merchant Taylors Catering"
  },
  {
      "ID": 666,
      "CompanyName": "Lema (UK) Ltd"
  },
  {
      "ID": 668,
      "CompanyName": "Golding Homes Limited"
  },
  {
      "ID": 672,
      "CompanyName": "Newrest Inflight UK Ltd"
  },
  {
      "ID": 673,
      "CompanyName": "Fuller Smith & Turner PLC (PRONETT APP)"
  },
  {
      "ID": 675,
      "CompanyName": "Kee Projects Ltd"
  },
  {
      "ID": 677,
      "CompanyName": "Montana Management"
  },
  {
      "ID": 679,
      "CompanyName": "Hart Shoreditch Hotel London"
  },
  {
      "ID": 680,
      "CompanyName": "Mrs Koukis"
  },
  {
      "ID": 681,
      "CompanyName": "HMSHost UK Ltd"
  },
  {
      "ID": 682,
      "CompanyName": "MRXL Limited"
  },
  {
      "ID": 684,
      "CompanyName": "GH Pizzas Ltd"
  },
  {
      "ID": 688,
      "CompanyName": "Grove Park Academies"
  },
  {
      "ID": 696,
      "CompanyName": "Honi Poke"
  },
  {
      "ID": 699,
      "CompanyName": "Manor Group Ltd"
  },
  {
      "ID": 703,
      "CompanyName": "Gourmet Burger Kitchen (UK) Limited - (PRONETT APP - GIRAFFE/BOPARAN)"
  },
  {
      "ID": 706,
      "CompanyName": "Hotel Xanadu"
  },
  {
      "ID": 707,
      "CompanyName": "Mansfield Group"
  },
  {
      "ID": 709,
      "CompanyName": "Interface Precision Engineering Ltd"
  },
  {
      "ID": 710,
      "CompanyName": "Millwall Football Club Plc"
  },
  {
      "ID": 711,
      "CompanyName": "Millwall Community Trust"
  },
  {
      "ID": 725,
      "CompanyName": "Kent Office Space"
  },
  {
      "ID": 727,
      "CompanyName": "Gymfinity Kids Ltd"
  },
  {
      "ID": 739,
      "CompanyName": "Gulliver Timber Treatments Ltd"
  },
  {
      "ID": 740,
      "CompanyName": "Gabriels Hill Dental Practice"
  },
  {
      "ID": 742,
      "CompanyName": "Meridian Zero Distribution Ltd"
  },
  {
      "ID": 747,
      "CompanyName": "Hans & Gretel - Camden Market"
  },
  {
      "ID": 751,
      "CompanyName": "Javelin Ltd"
  },
  {
      "ID": 754,
      "CompanyName": "JLA Limited (Catering)"
  },
  {
      "ID": 761,
      "CompanyName": "Karali MU Ltd (Used to be Marugame)"
  },
  {
      "ID": 762,
      "CompanyName": "Kitchen Table Restaurants Limited"
  },
  {
      "ID": 765,
      "CompanyName": "Gymkhana Restaurants Limited"
  },
  {
      "ID": 766,
      "CompanyName": "Hitachi Construction Machinery"
  },
  {
      "ID": 767,
      "CompanyName": "JKS Restaurants Holdings Ltd(PRONETT APP)"
  },
  {
      "ID": 772,
      "CompanyName": "Mereworth Wines Ltd"
  },
  {
      "ID": 776,
      "CompanyName": "Linaker Limited"
  },
  {
      "ID": 778,
      "CompanyName": "Motorpoint Ltd"
  },
  {
      "ID": 781,
      "CompanyName": "ICM (Plastic Moulding) Limited"
  },
  {
      "ID": 784,
      "CompanyName": "Hoppers Restaurants Limited (PRONETT APP)"
  },
  {
      "ID": 791,
      "CompanyName": "Fox Connaught Ltd"
  },
  {
      "ID": 796,
      "CompanyName": "Hamleys of London"
  },
  {
      "ID": 799,
      "CompanyName": "Martin Tolhurst Partnership LLP"
  },
  {
      "ID": 801,
      "CompanyName": "JLA HVAC Limited"
  },
  {
      "ID": 803,
      "CompanyName": "Fletchers Facilities Limited"
  },
  {
      "ID": 808,
      "CompanyName": "Inspire Restaurants Limited t/a McDonald's"
  },
  {
      "ID": 809,
      "CompanyName": "Joblogic - Test Cusotmer"
  },
  {
      "ID": 810,
      "CompanyName": "Joblogic Test 2"
  },
  {
      "ID": 813,
      "CompanyName": "JJ & Team 2 Ltd T/A PF Changs"
  },
  {
      "ID": 817,
      "CompanyName": "Harnbury Holdings Limited - San Carlo"
  },
  {
      "ID": 822,
      "CompanyName": "Farmer J Limited (PRONETT APP)"
  },
  {
      "ID": 829,
      "CompanyName": "Jardox Ltd"
  },
  {
      "ID": 835,
      "CompanyName": "Intelmatix Limited"
  },
  {
      "ID": 838,
      "CompanyName": "McDonalds Restaurants Ltd"
  },
  {
      "ID": 842,
      "CompanyName": "Meridian Marlow Ltd"
  },
  {
      "ID": 846,
      "CompanyName": "Gails Ltd (PRONETT APP)"
  },
  {
      "ID": 848,
      "CompanyName": "Its IVI Limited"
  },
  {
      "ID": 849,
      "CompanyName": "IVI Ice Limited"
  },
  {
      "ID": 850,
      "CompanyName": "IVI Waterfronts Limited"
  },
  {
      "ID": 851,
      "CompanyName": "IVI Fresh Limited"
  },
  {
      "ID": 852,
      "CompanyName": "IVI London Limited"
  },
  {
      "ID": 853,
      "CompanyName": "IVI Motorway Services Limited"
  },
  {
      "ID": 854,
      "CompanyName": "IVI Eat Limited"
  },
  {
      "ID": 855,
      "CompanyName": "Honeymoon Soho Ltd"
  },
  {
      "ID": 857,
      "CompanyName": "LEAP Legal Software Limited"
  },
  {
      "ID": 858,
      "CompanyName": "Four Oaks Projects Limited"
  },
  {
      "ID": 859,
      "CompanyName": "Holiday Inn London Gatwick (Pearl Hotels)"
  },
  {
      "ID": 861,
      "CompanyName": "KITE College"
  },
  {
      "ID": 862,
      "CompanyName": "KNBY LND OP1 LIMITED"
  },
  {
      "ID": 872,
      "CompanyName": "Gymkhana Restaurants Limited (PRONETT APP)"
  },
  {
      "ID": 873,
      "CompanyName": "Laderach UK Limited"
  },
  {
      "ID": 874,
      "CompanyName": "Lyle's Restaurants Ltd - JKS - Portal"
  },
  {
      "ID": 880,
      "CompanyName": "No Customer Found"
  },
  {
    "ID": 3,
    "CompanyName": "Training Customer"
},
{
    "ID": 21,
    "CompanyName": "Robinson Webster Holding Ltd / Jigsaw"
},
{
    "ID": 30,
    "CompanyName": "Poundstretcher Ltd"
},
{
    "ID": 33,
    "CompanyName": "Robert Dyas Holdings Ltd"
},
{
    "ID": 34,
    "CompanyName": "Ryman Ltd "
},
{
    "ID": 35,
    "CompanyName": "Salvation Army Trading Co Ltd"
},
{
    "ID": 37,
    "CompanyName": "Search Consultancy Ltd"
},
{
    "ID": 38,
    "CompanyName": "Shelter The National Campaign For Homeless People Ltd"
},
{
    "ID": 39,
    "CompanyName": "Shoezone Ltd"
},
{
    "ID": 40,
    "CompanyName": "Signet"
},
{
    "ID": 48,
    "CompanyName": "Troia (UK) Restaurants Ltd"
},
{
    "ID": 55,
    "CompanyName": "RLT Group "
},
{
    "ID": 61,
    "CompanyName": "Streetwise Couriers Surrey Ltd"
},
{
    "ID": 77,
    "CompanyName": "TPS Property "
},
{
    "ID": 80,
    "CompanyName": "Time Products UK LTD"
},
{
    "ID": 83,
    "CompanyName": "Turnpower Services Ltd"
},
{
    "ID": 93,
    "CompanyName": "Step up building Ltd"
},
{
    "ID": 106,
    "CompanyName": "VINCI Construction UK Limited – Facilities"
},
{
    "ID": 110,
    "CompanyName": "Skyline Whitespace, 320 Western Road, Wimbledon, London SW19 2QA"
},
{
    "ID": 111,
    "CompanyName": "Various Eateries Limited C/O Strada Trading"
},
{
    "ID": 125,
    "CompanyName": "The Ivy West St Ltd"
},
{
    "ID": 126,
    "CompanyName": "Seiko UK Ltd"
},
{
    "ID": 132,
    "CompanyName": "R Briggs"
},
{
    "ID": 134,
    "CompanyName": "St Mungo's Community Housing"
},
{
    "ID": 148,
    "CompanyName": "The Alchemist"
},
{
    "ID": 155,
    "CompanyName": "Touchstone"
},
{
    "ID": 163,
    "CompanyName": "Unit K4"
},
{
    "ID": 165,
    "CompanyName": "The Entertainer"
},
{
    "ID": 167,
    "CompanyName": "Places for People Homes Ltd"
},
{
    "ID": 168,
    "CompanyName": "SJM 360 Group"
},
{
    "ID": 171,
    "CompanyName": "Turnpower Residential"
},
{
    "ID": 172,
    "CompanyName": "Sevan Leisure Holdings ltd"
},
{
    "ID": 179,
    "CompanyName": "Sennen Property Management Ltd"
},
{
    "ID": 180,
    "CompanyName": "Trans UK Logistics Ltd"
},
{
    "ID": 187,
    "CompanyName": "Sandman Hotel"
},
{
    "ID": 188,
    "CompanyName": "Strada Trading Limited"
},
{
    "ID": 195,
    "CompanyName": "Park Federation Academy Trust"
},
{
    "ID": 197,
    "CompanyName": "The Loomba Group of companies"
},
{
    "ID": 200,
    "CompanyName": "Steyning Medical Centre"
},
{
    "ID": 202,
    "CompanyName": "RSR"
},
{
    "ID": 203,
    "CompanyName": "Pineapple Group"
},
{
    "ID": 204,
    "CompanyName": "The Melusine"
},
{
    "ID": 207,
    "CompanyName": "Rare Bird Hotels at Streatley Ltd"
},
{
    "ID": 213,
    "CompanyName": "Simply Solutions (Europe) Ltd  "
},
{
    "ID": 215,
    "CompanyName": "The Laine Pub Company Ltd. "
},
{
    "ID": 226,
    "CompanyName": "San Carlo "
},
{
    "ID": 230,
    "CompanyName": "Paperplus Uk"
},
{
    "ID": 231,
    "CompanyName": "Sigma GRP"
},
{
    "ID": 234,
    "CompanyName": "VASHI "
},
{
    "ID": 240,
    "CompanyName": "Stonegate Group "
},
{
    "ID": 241,
    "CompanyName": "Unique Pub Properties "
},
{
    "ID": 246,
    "CompanyName": "Paper plus"
},
{
    "ID": 249,
    "CompanyName": "Ocean Basket (OB UK HOLDINGS LTD)"
},
{
    "ID": 250,
    "CompanyName": "SMD Concepts Limited (t/a Bombay Bustle)"
},
{
    "ID": 251,
    "CompanyName": "S. Fiori Limited (t/a Jamavar)"
},
{
    "ID": 252,
    "CompanyName": "Samadin Limited (t/a Mimi Mei Fair)."
},
{
    "ID": 255,
    "CompanyName": "TAO GROUP HOSPITALITY"
},
{
    "ID": 259,
    "CompanyName": "Rare Birds Hotel at Sonning Ltd"
},
{
    "ID": 263,
    "CompanyName": "Ream Partnership"
},
{
    "ID": 264,
    "CompanyName": "NovalGen"
},
{
    "ID": 268,
    "CompanyName": "The Student Room "
},
{
    "ID": 273,
    "CompanyName": "The Estate of the late Deanna Fisher C/O Waters Surveyors"
},
{
    "ID": 275,
    "CompanyName": "Surbiton care homes Ltd"
},
{
    "ID": 276,
    "CompanyName": "Onslow Square Construction Limited"
},
{
    "ID": 277,
    "CompanyName": "South East Surrey Schools Education Trust"
},
{
    "ID": 278,
    "CompanyName": "Tapi Carpets "
},
{
    "ID": 281,
    "CompanyName": "TAO Group Head office"
},
{
    "ID": 282,
    "CompanyName": "Signor Sassi Ltd"
},
{
    "ID": 285,
    "CompanyName": "RUYA London"
},
{
    "ID": 286,
    "CompanyName": "The Amherst Inn"
},
{
    "ID": 287,
    "CompanyName": "Red Lion Operations 1 LTD"
},
{
    "ID": 288,
    "CompanyName": "Red Lion Management and Administration Limited"
},
{
    "ID": 290,
    "CompanyName": "Red Lion Operations 2 LTD"
},
{
    "ID": 291,
    "CompanyName": "Red Lion Operations 3 LTD"
},
{
    "ID": 293,
    "CompanyName": "Shepherd Neame Ltd"
},
{
    "ID": 295,
    "CompanyName": "Orca Spaces"
},
{
    "ID": 298,
    "CompanyName": "Southern Wind Group Ltd t/a Fazenda"
},
{
    "ID": 299,
    "CompanyName": "Red Mist Leisure Ltd"
},
{
    "ID": 302,
    "CompanyName": "Perry Hill Valuation: Agency: Asset Management: LL&T"
},
{
    "ID": 304,
    "CompanyName": "Russ Kings"
},
{
    "ID": 307,
    "CompanyName": "Parallel Property"
},
{
    "ID": 308,
    "CompanyName": "St Barts Finance"
},
{
    "ID": 310,
    "CompanyName": "Scoffs Group"
},
{
    "ID": 313,
    "CompanyName": "Polyteck Building Services Ltd "
},
{
    "ID": 314,
    "CompanyName": "Style Property Maintenance"
},
{
    "ID": 317,
    "CompanyName": "TRG (Holdings) Limited"
},
{
    "ID": 323,
    "CompanyName": "Premiere Coffee Limited"
},
{
    "ID": 326,
    "CompanyName": "Pret A Manger (Europe) LTD"
},
{
    "ID": 328,
    "CompanyName": "Veeve, Unique Ventures Ltd."
},
{
    "ID": 333,
    "CompanyName": "Science (UK) Ltd   "
},
{
    "ID": 335,
    "CompanyName": "The Wick "
},
{
    "ID": 336,
    "CompanyName": "Oakman Inns"
},
{
    "ID": 342,
    "CompanyName": "REKOM UK"
},
{
    "ID": 343,
    "CompanyName": "The Laine Brewing Company"
},
{
    "ID": 348,
    "CompanyName": "Noodlum Limited"
},
{
    "ID": 349,
    "CompanyName": "Prime FM"
},
{
    "ID": 350,
    "CompanyName": "Project 1 Building Services LTD"
},
{
    "ID": 351,
    "CompanyName": "SCOFFS (CORNWALL) LIMITED"
},
{
    "ID": 353,
    "CompanyName": "SCOFFS (ESSEX) LIMITED"
},
{
    "ID": 354,
    "CompanyName": "SCOFFS (MISS MILLIES) LIMITED"
},
{
    "ID": 356,
    "CompanyName": "The Guinness Partnership"
},
{
    "ID": 358,
    "CompanyName": "PS Solutions"
},
{
    "ID": 361,
    "CompanyName": "UPMARKET HOTELS & LEISURE LTD"
},
{
    "ID": 364,
    "CompanyName": "Richard Caring"
},
{
    "ID": 368,
    "CompanyName": "Synecore Ltd"
},
{
    "ID": 374,
    "CompanyName": "Pubola Limited"
},
{
    "ID": 376,
    "CompanyName": "RJW Electrical Contractors Ltd"
},
{
    "ID": 377,
    "CompanyName": "Ole and Steen (Invoice to: Danish Bake UK LTD)"
},
{
    "ID": 387,
    "CompanyName": "The BoTree, Shiva Marylebone Lane Ltd"
},
{
    "ID": 397,
    "CompanyName": "Noble Restaurant Group Ltd"
},
{
    "ID": 401,
    "CompanyName": "The Weald school"
},
{
    "ID": 405,
    "CompanyName": "Six Bells"
},
{
    "ID": 416,
    "CompanyName": "The Beefy Boys Ltd"
},
{
    "ID": 421,
    "CompanyName": "Ryan - Teal house "
},
{
    "ID": 422,
    "CompanyName": "RYANS - HOUSE "
},
{
    "ID": 426,
    "CompanyName": "Peppermint Events Ltd"
},
{
    "ID": 427,
    "CompanyName": "Oakman Inns Lost Boy"
},
{
    "ID": 429,
    "CompanyName": "The Clay Pigeon "
},
{
    "ID": 431,
    "CompanyName": "Ocubis Ltd T/A Pavilion Kensington"
},
{
    "ID": 433,
    "CompanyName": "Vagabond Wines (Invoice to: Wineify Ltd)"
},
{
    "ID": 436,
    "CompanyName": "Osmond Capital"
},
{
    "ID": 438,
    "CompanyName": "Safewater IO LTD"
},
{
    "ID": 442,
    "CompanyName": "Thunderbird Fried Chicken"
},
{
    "ID": 445,
    "CompanyName": "QH IP LTD"
},
{
    "ID": 454,
    "CompanyName": "Robertsbridge Community College "
},
{
    "ID": 455,
    "CompanyName": "The Atherton Family Trust "
},
{
    "ID": 458,
    "CompanyName": "Roundwood renovations "
},
{
    "ID": 461,
    "CompanyName": "The Good Oil LTD"
},
{
    "ID": 462,
    "CompanyName": "Rydens Enterprise (Walton) Management Company Ltd"
},
{
    "ID": 472,
    "CompanyName": "The Wolseley Hospitality Group "
},
{
    "ID": 473,
    "CompanyName": "Thrale Street Cafe Ltd T/A Lantana London Bridge"
},
{
    "ID": 474,
    "CompanyName": "Subway "
},
{
    "ID": 475,
    "CompanyName": "Statutory Support Services (UK) Ltd."
},
{
    "ID": 488,
    "CompanyName": "PADEL SPORTS LTD"
},
{
    "ID": 492,
    "CompanyName": "SSS - Aaron Access Limited"
},
{
    "ID": 497,
    "CompanyName": "SHW Partnership"
},
{
    "ID": 499,
    "CompanyName": "TCATI Limited T/A The Club At The Ivy "
},
{
    "ID": 502,
    "CompanyName": "Papa John’s (GB) Limited "
},
{
    "ID": 506,
    "CompanyName": "St Giles Hotels"
},
{
    "ID": 507,
    "CompanyName": "Sun Life Assurance Company of Canada (UK) Ltd c/o Workman LLP"
},
{
    "ID": 508,
    "CompanyName": "TW Cooling Ltd"
},
{
    "ID": 509,
    "CompanyName": "The Roof Gardens "
},
{
    "ID": 511,
    "CompanyName": "THUNDERBIRD FRIED CHICKEN LTD"
},
{
    "ID": 518,
    "CompanyName": "Nuoc Cham Ltd"
},
{
    "ID": 521,
    "CompanyName": "Reading Gateway (Reading) Management Company Ltd,  C/O Sennen Property Management Ltd,"
},
{
    "ID": 524,
    "CompanyName": "Vapiano UK"
},
{
    "ID": 532,
    "CompanyName": "The York Hotel Limited"
},
{
    "ID": 534,
    "CompanyName": "Spire Healthcare Group"
},
{
    "ID": 536,
    "CompanyName": "Oracle Solutions Asbestos "
},
{
    "ID": 538,
    "CompanyName": "Papa John's Corp Stores Limited "
},
{
    "ID": 543,
    "CompanyName": "Puregym "
},
{
    "ID": 603,
    "CompanyName": "Ogilvy Healthworld UK Ltd"
},
{
    "ID": 604,
    "CompanyName": "Penhurst Gardens Care Home - Parent"
},
{
    "ID": 605,
    "CompanyName": "PHOENIX HOSPITAL GROUP LIMITED"
},
{
    "ID": 606,
    "CompanyName": "Prestbury House Care Home - Parent"
},
{
    "ID": 607,
    "CompanyName": "Richard Fantom Eyecare"
},
{
    "ID": 608,
    "CompanyName": "Saracen House Estates Limited"
},
{
    "ID": 609,
    "CompanyName": "Savernake View Care Home - Parent"
},
{
    "ID": 610,
    "CompanyName": "SPX Flow Europe Limited"
},
{
    "ID": 611,
    "CompanyName": "Synecore"
},
{
    "ID": 612,
    "CompanyName": "The Consumer Engagement Group Limited"
},
{
    "ID": 613,
    "CompanyName": "Thirlestaine Park Care Home - Parent"
},
{
    "ID": 614,
    "CompanyName": "Tonbridge House Care Home - Parent"
},
{
    "ID": 615,
    "CompanyName": "TOPCARE LIMITED,  T/A Albany Nursing Home"
},
{
    "ID": 616,
    "CompanyName": "Tunbridge Wells Care Centre Ltd"
},
{
    "ID": 617,
    "CompanyName": "Upton Mill Care Home - Parent"
},
{
    "ID": 624,
    "CompanyName": "Test Customer"
},
{
    "ID": 626,
    "CompanyName": "Test Customer - Synecore "
},
{
    "ID": 640,
    "CompanyName": "Paul UK Ltd - PRONETT APP"
},
{
    "ID": 641,
    "CompanyName": "Royal China Club"
},
{
    "ID": 642,
    "CompanyName": "Senseco Systems Ltd"
},
{
    "ID": 643,
    "CompanyName": "St Patricks Catholic Church"
},
{
    "ID": 644,
    "CompanyName": "The Complete Works"
},
{
    "ID": 646,
    "CompanyName": "Oblix - Wildfire Entertainment Ltd"
},
{
    "ID": 647,
    "CompanyName": "Pestana Management UK Ltd"
},
{
    "ID": 648,
    "CompanyName": "Uniper UK Ltd"
},
{
    "ID": 653,
    "CompanyName": "The Priory Group (PRONETT APP)"
},
{
    "ID": 654,
    "CompanyName": "Pizza Union (PRONETT APP)"
},
{
    "ID": 656,
    "CompanyName": "Pure Nails"
},
{
    "ID": 660,
    "CompanyName": "Orida Hotels Ltd"
},
{
    "ID": 661,
    "CompanyName": "The London Golf Club PLC"
},
{
    "ID": 669,
    "CompanyName": "Paley Farm Ltd"
},
{
    "ID": 671,
    "CompanyName": "The Evewell"
},
{
    "ID": 674,
    "CompanyName": "Style and Winch"
},
{
    "ID": 678,
    "CompanyName": "Prospect Quote"
},
{
    "ID": 683,
    "CompanyName": "Pret A Manger (Europe) LTD - INVIDA APP"
},
{
    "ID": 686,
    "CompanyName": "UK VAP Ltd (MAINLIX APP)"
},
{
    "ID": 687,
    "CompanyName": "Vision Commercial kitchens Ltd"
},
{
    "ID": 692,
    "CompanyName": "Speciality Breads Ltd"
},
{
    "ID": 693,
    "CompanyName": "Scarpetta Limited"
},
{
    "ID": 694,
    "CompanyName": "Synecore Limited"
},
{
    "ID": 697,
    "CompanyName": "P A Crocker Ltd t/a McDonald's"
},
{
    "ID": 698,
    "CompanyName": "SLB Enterprises Limited t/a McDonald's"
},
{
    "ID": 700,
    "CompanyName": "Prezzo Trading Limited (Expansive App)"
},
{
    "ID": 702,
    "CompanyName": "Projects"
},
{
    "ID": 712,
    "CompanyName": "Puma Power Projects"
},
{
    "ID": 714,
    "CompanyName": "Roast"
},
{
    "ID": 715,
    "CompanyName": "The Cave Hotel"
},
{
    "ID": 716,
    "CompanyName": "Riverside Cowgirl"
},
{
    "ID": 717,
    "CompanyName": "The Willo Project Ltd"
},
{
    "ID": 718,
    "CompanyName": "St, Giles"
},
{
    "ID": 719,
    "CompanyName": "Tortilla Mexican Grill Limited (PRONETT APP)"
},
{
    "ID": 720,
    "CompanyName": "Planning Solutions Limited T/A Kent Life"
},
{
    "ID": 723,
    "CompanyName": "Sunrise Facilities Management"
},
{
    "ID": 728,
    "CompanyName": "Sun Street Hotel (AMJ Hotel & Clubhouse Ltd)"
},
{
    "ID": 732,
    "CompanyName": "Tailored Travel"
},
{
    "ID": 734,
    "CompanyName": "St Giles Hotel (Heathrow) Ltd"
},
{
    "ID": 735,
    "CompanyName": "Velway Limited"
},
{
    "ID": 736,
    "CompanyName": "Taj Hotel"
},
{
    "ID": 738,
    "CompanyName": "UK VAP TCR Ltd (MAINLIX APP)"
},
{
    "ID": 748,
    "CompanyName": "State 4 Restaurants LtdT/A McDonalds"
},
{
    "ID": 753,
    "CompanyName": "The Real Greek Food Company Ltd"
},
{
    "ID": 755,
    "CompanyName": "Sundar Rachana Limited - Proforma"
},
{
    "ID": 757,
    "CompanyName": "PLK Chicken UK Ltd (Popeye) -  (PRONETT APP)"
},
{
    "ID": 759,
    "CompanyName": "Total Gymnastics Academies"
},
{
    "ID": 760,
    "CompanyName": "Noble Restaurant Group Ltd - PRONETT PORTAL"
},
{
    "ID": 763,
    "CompanyName": "Saga Truck & Van Ltd"
},
{
    "ID": 769,
    "CompanyName": "The George London Ltd  - JKS"
},
{
    "ID": 770,
    "CompanyName": "The Cadogan Pub Ltd"
},
{
    "ID": 774,
    "CompanyName": "Owen Hearing Care Ltd"
},
{
    "ID": 783,
    "CompanyName": "SIDAN Investment Property Limited"
},
{
    "ID": 789,
    "CompanyName": "Streamline Taxis"
},
{
    "ID": 793,
    "CompanyName": "ORIDA HIMS Ltd"
},
{
    "ID": 795,
    "CompanyName": "Vista Vets t/a PB Vet Limited"
},
{
    "ID": 797,
    "CompanyName": "Spur Therapeutics Ltd"
},
{
    "ID": 806,
    "CompanyName": "Van Peterson Designs Limited"
},
{
    "ID": 812,
    "CompanyName": "SK Health"
},
{
    "ID": 814,
    "CompanyName": "Sloane Square Hotel Ltd"
},
{
    "ID": 815,
    "CompanyName": "Pure Sports Medicine Ltd"
},
{
    "ID": 816,
    "CompanyName": "The Green Man Pub Welling - PROFORMA"
},
{
    "ID": 820,
    "CompanyName": "Sabor Restaurants Limited - JKS"
},
{
    "ID": 824,
    "CompanyName": "The Hound"
},
{
    "ID": 826,
    "CompanyName": "Verde Group Limited"
},
{
    "ID": 830,
    "CompanyName": "Pints & Pixels Ltd"
},
{
    "ID": 831,
    "CompanyName": "Pasta Evangelists Limited"
},
{
    "ID": 832,
    "CompanyName": "Secure Logiq Ltd"
},
{
    "ID": 833,
    "CompanyName": "Trishna Restaurants Limited"
},
{
    "ID": 836,
    "CompanyName": "The Evewell (West London) Limited"
},
{
    "ID": 837,
    "CompanyName": "SCP UK Ltd"
},
{
    "ID": 843,
    "CompanyName": "Rondanini UK Limited"
},
{
    "ID": 844,
    "CompanyName": "SOHO Coffee Shops Ltd"
},
{
    "ID": 847,
    "CompanyName": "Orida Newbury Ltd"
},
{
    "ID": 856,
    "CompanyName": "The Duck and Rice - Proforma"
},
{
    "ID": 860,
    "CompanyName": "Turnpower Services Limited"
},
{
    "ID": 864,
    "CompanyName": "TGHG Limited t/a McDonalds"
},
{
    "ID": 875,
    "CompanyName": "Oree"
},
{
    "ID": 876,
    "CompanyName": "Pennies Day Nursery Ltd"
},
{
    "ID": 877,
    "CompanyName": "Pizza Hut Delivery"
},
{
    "ID": 878,
    "CompanyName": "Propsect Quote"
},
{
    "ID": 879,
    "CompanyName": "Signs & Imaging South East Ltd"
},
{
  "ID": 45,
  "CompanyName": "Vue Entertainment Ltd"
},
{
  "ID": 90,
  "CompanyName": "Wingate Financial"
},
{
  "ID": 98,
  "CompanyName": "Window Flowers "
},
{
  "ID": 153,
  "CompanyName": "Yorkshire Building Society "
},
{
  "ID": 235,
  "CompanyName": "Voith Group"
},
{
  "ID": 245,
  "CompanyName": "Wokingham Medical Centre "
},
{
  "ID": 305,
  "CompanyName": "W.S. WRIGHTS"
},
{
  "ID": 306,
  "CompanyName": "Young's"
},
{
  "ID": 375,
  "CompanyName": "Wet Auditors Ltd "
},
{
  "ID": 392,
  "CompanyName": "WN Plumbing & Drainage Services Ltd"
},
{
  "ID": 407,
  "CompanyName": "Watch House (Invoice to: Chapeau Bermondsey Limited)"
},
{
  "ID": 408,
  "CompanyName": "Zelgrain LTD"
},
{
  "ID": 441,
  "CompanyName": "Wineify Ltd"
},
{
  "ID": 452,
  "CompanyName": "YOLK"
},
{
  "ID": 503,
  "CompanyName": "Wilby & Burnett"
},
{
  "ID": 523,
  "CompanyName": "Windsor Way Club "
},
{
  "ID": 528,
  "CompanyName": "Wimbledon college"
},
{
  "ID": 529,
  "CompanyName": "Watertite Building Services "
},
{
  "ID": 531,
  "CompanyName": "We are homes for students"
},
{
  "ID": 618,
  "CompanyName": "Whats Possible Group"
},
{
  "ID": 619,
  "CompanyName": "Willows Care Home (Romford) Ltd"
},
{
  "ID": 620,
  "CompanyName": "Wiltshire Heights Care Home - Parent"
},
{
  "ID": 621,
  "CompanyName": "Woodland Manor Care Home - Parent"
},
{
  "ID": 622,
  "CompanyName": "Zopa Bank Limited"
},
{
  "ID": 625,
  "CompanyName": "becky warton ltd"
},
{
  "ID": 645,
  "CompanyName": "Wasabi Head Office (PRONETT APP)"
},
{
  "ID": 726,
  "CompanyName": "Williams Giles / Xeindain"
},
{
  "ID": 790,
  "CompanyName": "Waud Wine Walls & Dispensers Limited"
},
{
  "ID": 798,
  "CompanyName": "Wanstead Village Food Ltd"
},
{
  "ID": 805,
  "CompanyName": "Wholesalers"
},
{
  "ID": 807,
  "CompanyName": "Volta Do Mar"
},
{
  "ID": 841,
  "CompanyName": "Whitbread PLC - Ostara portal"
}
];

// Return one item with full list so downstream nodes can use $json.companies
return [{ json: { companies: COMPANIES } }];