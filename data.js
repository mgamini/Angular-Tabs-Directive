function getData(q, $rootScope) {
  var d = q.defer();
  setTimeout(function() { 
     $rootScope.$apply(function() {
      d.resolve(data);
    });
     }, 2000);
  return d.promise;
}

var data = [
    {
      "count": 4,
      "img": "http://placekitten.com/500/500",
      "desc": "Id consequat non ut Lorem et est sint. Sit anim consequat ipsum ad culpa mollit aute. Officia dolore laborum magna qui fugiat sunt commodo non aliqua. Sint excepteur officia commodo velit magna voluptate anim adipisicing excepteur sit ullamco. Proident cillum esse sint sit officia aute veniam Lorem esse pariatur esse proident culpa.\r\n",
      "episodes": [
        {
          "guid": "f15944c8-4ec6-4b34-947e-c3d701a90b5b",
          "thumb": "http://placekitten.com/100/100",
          "title": "incididunt sunt",
          "desc": "Ut quis ut quis anim ipsum ut laboris veniam. Consectetur ex reprehenderit esse dolore reprehenderit velit consectetur veniam quis mollit ipsum eiusmod.",
          "url": "http://episodeurl"
        },
        {
          "guid": "13374a89-440a-4d37-9b3c-fb9792ecc164",
          "thumb": "http://placekitten.com/100/100",
          "title": "ea pariatur",
          "desc": "Tempor nostrud sunt ex eu consequat consequat. Proident non quis elit exercitation cupidatat id elit duis voluptate exercitation quis dolore id.",
          "url": "http://episodeurl"
        },
        {
          "guid": "7c2ddded-76eb-437a-b515-b8f78bfe498e",
          "thumb": "http://placekitten.com/100/100",
          "title": "tempor mollit",
          "desc": "Et velit fugiat exercitation cupidatat id ea pariatur. Culpa labore aliquip qui nostrud esse commodo occaecat consequat qui voluptate.",
          "url": "http://episodeurl"
        },
        {
          "guid": "8e21bb2e-d211-429a-9401-cad173722201",
          "thumb": "http://placekitten.com/100/100",
          "title": "consequat ex",
          "desc": "Est elit dolore cupidatat ea commodo cillum sint minim. Non laboris aliqua culpa qui fugiat sunt velit dolore cupidatat proident minim pariatur consectetur.",
          "url": "http://episodeurl"
        }
      ]
    },
    {
      "count": 19,
      "img": "http://placekitten.com/500/500",
      "desc": "Do dolor laboris tempor exercitation. Veniam mollit id consequat mollit occaecat elit ex consectetur laboris ipsum velit. Esse amet occaecat elit excepteur. Laboris est velit veniam ullamco fugiat sit magna magna ullamco incididunt id ad Lorem et. Labore ad esse nisi et ea elit cupidatat est nostrud mollit. Ea cillum pariatur duis et amet.\r\n",
      "episodes": [
        {
          "guid": "14605a48-9e96-4c54-9fb1-f91774f3ae8a",
          "thumb": "http://placekitten.com/100/100",
          "title": "dolore fugiat",
          "desc": "Minim sint et excepteur eiusmod nostrud exercitation sint amet ex reprehenderit commodo proident eiusmod. Consequat ipsum exercitation reprehenderit ut duis in id cillum consectetur.",
          "url": "http://episodeurl"
        },
        {
          "guid": "09d0dc21-203c-40f6-a0d9-63f2f0e17614",
          "thumb": "http://placekitten.com/100/100",
          "title": "do aliqua",
          "desc": "Aliqua occaecat exercitation Lorem esse mollit amet eiusmod amet. Enim velit laboris aliqua elit id nulla minim culpa ad incididunt sint officia in incididunt.",
          "url": "http://episodeurl"
        },
        {
          "guid": "32cd8fac-7508-4c45-aaaf-f2170a5141cf",
          "thumb": "http://placekitten.com/100/100",
          "title": "non Lorem",
          "desc": "Amet aute ex eu ex veniam labore id minim. Eu sunt ad laborum non aliqua.",
          "url": "http://episodeurl"
        },
        {
          "guid": "5ab0ccb9-96f9-4ff5-bca4-0755a2537134",
          "thumb": "http://placekitten.com/100/100",
          "title": "occaecat adipisicing",
          "desc": "Do veniam duis nostrud duis laboris. Non cillum officia exercitation aute aliquip anim eiusmod esse.",
          "url": "http://episodeurl"
        },
        {
          "guid": "1306fe3e-2fe7-4c9a-a054-a961dcfc9920",
          "thumb": "http://placekitten.com/100/100",
          "title": "commodo nulla",
          "desc": "Veniam culpa nostrud eiusmod voluptate et. Pariatur duis incididunt eu id elit ea culpa magna excepteur dolore sit minim laboris.",
          "url": "http://episodeurl"
        },
        {
          "guid": "c2206b47-1dbc-4cac-9aa6-94aee747801f",
          "thumb": "http://placekitten.com/100/100",
          "title": "sunt sit",
          "desc": "Commodo enim irure est magna esse adipisicing fugiat irure nostrud irure esse minim. Dolor cillum ipsum cillum reprehenderit et aliquip anim labore laboris in consequat amet non ipsum.",
          "url": "http://episodeurl"
        },
        {
          "guid": "003894a2-00f6-41b6-be2e-6084bff738c3",
          "thumb": "http://placekitten.com/100/100",
          "title": "labore proident",
          "desc": "Sunt anim nisi laboris esse. Incididunt do sunt eu magna.",
          "url": "http://episodeurl"
        },
        {
          "guid": "3656192d-83ca-4311-8f26-fef34ae7e4bd",
          "thumb": "http://placekitten.com/100/100",
          "title": "sit nisi",
          "desc": "Dolore ex officia ut nisi minim sit voluptate fugiat non mollit duis duis laboris. Fugiat consectetur aute ut excepteur ea dolor do qui occaecat in et sit deserunt esse.",
          "url": "http://episodeurl"
        },
        {
          "guid": "0417d022-8875-4e52-b501-c575fcbfefb9",
          "thumb": "http://placekitten.com/100/100",
          "title": "dolore magna",
          "desc": "Laboris proident nulla excepteur aliquip enim officia Lorem. Deserunt eiusmod officia in do veniam aliquip incididunt voluptate labore nisi.",
          "url": "http://episodeurl"
        },
        {
          "guid": "db552cfd-7bad-43a0-afab-adc7c52c171d",
          "thumb": "http://placekitten.com/100/100",
          "title": "ut qui",
          "desc": "Labore incididunt eiusmod aute irure non. Duis enim aliqua ex occaecat magna in dolore officia.",
          "url": "http://episodeurl"
        },
        {
          "guid": "64f9b4c5-ef00-43aa-bae8-dbc99bee6e0f",
          "thumb": "http://placekitten.com/100/100",
          "title": "adipisicing ut",
          "desc": "Sunt eiusmod aliqua proident voluptate proident consequat. Est ut labore cupidatat nulla consectetur nulla incididunt nostrud.",
          "url": "http://episodeurl"
        },
        {
          "guid": "9ff7671f-75d0-48eb-9cd1-b7aa8c999f3b",
          "thumb": "http://placekitten.com/100/100",
          "title": "consequat quis",
          "desc": "Irure laboris laboris ad duis reprehenderit Lorem veniam non incididunt velit est. Aute magna dolore laborum exercitation adipisicing voluptate incididunt laboris irure laborum esse aute.",
          "url": "http://episodeurl"
        },
        {
          "guid": "9bbf135a-7645-4134-a713-fc702d5bec77",
          "thumb": "http://placekitten.com/100/100",
          "title": "sint excepteur",
          "desc": "Culpa sint aliquip sint pariatur magna anim. Velit aliquip sint nulla proident excepteur id ullamco fugiat incididunt.",
          "url": "http://episodeurl"
        },
        {
          "guid": "744e6b6e-3000-4255-8d11-518b6f27697d",
          "thumb": "http://placekitten.com/100/100",
          "title": "Lorem laborum",
          "desc": "Ea id cillum voluptate sint excepteur incididunt sint voluptate Lorem. Enim quis sit aute reprehenderit enim fugiat.",
          "url": "http://episodeurl"
        },
        {
          "guid": "dbb3a326-16ce-4407-b5f3-2a0e12fcba09",
          "thumb": "http://placekitten.com/100/100",
          "title": "irure dolore",
          "desc": "Occaecat labore aute cupidatat anim amet. Nulla Lorem occaecat aliqua ad ex id.",
          "url": "http://episodeurl"
        },
        {
          "guid": "7cb54558-3c38-4883-9bf9-2068518325c9",
          "thumb": "http://placekitten.com/100/100",
          "title": "esse laborum",
          "desc": "Ea laborum magna adipisicing exercitation esse in cillum aute irure magna excepteur incididunt et ea. Do ipsum voluptate officia aliquip ex.",
          "url": "http://episodeurl"
        },
        {
          "guid": "957bf8c4-2cd5-47fa-9ee2-e610114a0b3f",
          "thumb": "http://placekitten.com/100/100",
          "title": "occaecat tempor",
          "desc": "Consectetur occaecat elit irure fugiat nisi consequat magna sint ex exercitation sunt. Minim ex id ipsum Lorem cillum commodo velit anim.",
          "url": "http://episodeurl"
        },
        {
          "guid": "8cf27509-c1f0-462f-b81f-840321bd832a",
          "thumb": "http://placekitten.com/100/100",
          "title": "labore commodo",
          "desc": "Fugiat minim nisi Lorem minim qui voluptate consectetur mollit aliquip ad aliquip culpa cillum. Esse incididunt qui enim non sint excepteur ipsum quis consectetur pariatur aliquip ut reprehenderit.",
          "url": "http://episodeurl"
        },
        {
          "guid": "826a34be-2bae-4dd7-b870-a314f4feb589",
          "thumb": "http://placekitten.com/100/100",
          "title": "in eiusmod",
          "desc": "Ut eu qui eiusmod est elit culpa ex incididunt magna Lorem deserunt esse sit. Sunt veniam adipisicing dolor ea minim pariatur.",
          "url": "http://episodeurl"
        }
      ]
    },
    {
      "count": 8,
      "img": "http://placekitten.com/500/500",
      "desc": "Proident fugiat ad ipsum ex adipisicing excepteur irure dolore enim. Lorem magna aliquip dolor elit nostrud laboris eiusmod qui mollit nisi ullamco aliqua Lorem. Dolor ea laborum pariatur occaecat anim velit elit id deserunt id mollit irure sit labore.\r\n",
      "episodes": [
        {
          "guid": "9a7320ce-6a8d-401e-adc2-10b6ad4184a8",
          "thumb": "http://placekitten.com/100/100",
          "title": "mollit mollit",
          "desc": "Sit sit non irure labore est culpa incididunt anim. Enim ad aute velit duis.",
          "url": "http://episodeurl"
        },
        {
          "guid": "9f685b6a-80be-4d2c-829c-70b28891a9f0",
          "thumb": "http://placekitten.com/100/100",
          "title": "culpa aute",
          "desc": "Adipisicing dolor ut deserunt consequat laboris minim proident magna officia magna duis. Esse laborum sunt minim ex sit enim in pariatur.",
          "url": "http://episodeurl"
        },
        {
          "guid": "ef49fb06-0f55-4ae2-af38-c9beb7569c25",
          "thumb": "http://placekitten.com/100/100",
          "title": "eu do",
          "desc": "Nisi culpa consectetur esse minim qui est aliquip magna veniam minim eu veniam. Adipisicing nisi ex incididunt pariatur occaecat nisi occaecat ex laborum.",
          "url": "http://episodeurl"
        },
        {
          "guid": "a8a03981-a9e0-4b44-8571-042befbf883d",
          "thumb": "http://placekitten.com/100/100",
          "title": "enim laboris",
          "desc": "Lorem mollit minim voluptate esse dolor laboris quis. Aliqua reprehenderit amet elit in cupidatat commodo ullamco.",
          "url": "http://episodeurl"
        },
        {
          "guid": "93a9fbb1-f3b9-4c28-a8aa-72b7fe881cff",
          "thumb": "http://placekitten.com/100/100",
          "title": "eiusmod enim",
          "desc": "Ut reprehenderit nisi eu elit dolor. Cupidatat cupidatat anim cillum dolore consequat est exercitation cupidatat culpa sit nostrud cupidatat aute.",
          "url": "http://episodeurl"
        },
        {
          "guid": "d5dd2ae5-d3de-40e6-bdc4-8102a38834d5",
          "thumb": "http://placekitten.com/100/100",
          "title": "irure est",
          "desc": "Labore in ipsum laborum laboris officia minim excepteur. Sint consectetur commodo nulla anim adipisicing consectetur labore ut id ipsum.",
          "url": "http://episodeurl"
        },
        {
          "guid": "03bd38bb-0119-4d69-b9ce-c41086c95363",
          "thumb": "http://placekitten.com/100/100",
          "title": "culpa esse",
          "desc": "Laboris Lorem sit minim cillum proident reprehenderit laborum qui mollit ad elit veniam veniam tempor. Mollit mollit laboris voluptate eiusmod pariatur sit aliquip officia excepteur eu ut ullamco magna.",
          "url": "http://episodeurl"
        },
        {
          "guid": "9625fcaf-94c5-4ff0-a5fc-65952a16c9cd",
          "thumb": "http://placekitten.com/100/100",
          "title": "quis aliquip",
          "desc": "Minim cupidatat ex enim veniam esse qui aliquip sint enim. Excepteur consectetur culpa amet ipsum id occaecat nostrud ipsum minim.",
          "url": "http://episodeurl"
        }
      ]
    },
    {
      "count": 14,
      "img": "http://placekitten.com/500/500",
      "desc": "Elit non irure irure id fugiat non officia enim et do velit dolor. Ad amet reprehenderit do non voluptate. Laboris incididunt ullamco amet nostrud sit commodo culpa ea irure mollit in dolor sunt. Non amet ut reprehenderit et. Ad nisi nisi veniam ex consequat duis mollit ut eu ad. Eu adipisicing tempor ipsum ullamco. Non ex fugiat qui ex exercitation eiusmod.\r\n",
      "episodes": [
        {
          "guid": "fc5fafc7-8329-4ccf-bbd1-9eb1dea24410",
          "thumb": "http://placekitten.com/100/100",
          "title": "officia commodo",
          "desc": "Minim eiusmod sit reprehenderit ipsum labore sunt quis duis nulla anim nulla et mollit aliquip. Consectetur anim est aliqua cupidatat.",
          "url": "http://episodeurl"
        },
        {
          "guid": "6f3338d5-12fe-46b2-a47e-c529e5e36da5",
          "thumb": "http://placekitten.com/100/100",
          "title": "mollit laboris",
          "desc": "Esse consequat ea tempor id dolor irure consectetur id do id sunt nisi. Pariatur occaecat proident et est sunt minim ipsum.",
          "url": "http://episodeurl"
        },
        {
          "guid": "4d5cded6-b895-4abb-a31c-7c31f87d05df",
          "thumb": "http://placekitten.com/100/100",
          "title": "non reprehenderit",
          "desc": "Amet qui sunt id amet nisi. Occaecat nostrud ad enim Lorem ea excepteur aute ut dolore ipsum dolore.",
          "url": "http://episodeurl"
        },
        {
          "guid": "54017966-10ed-4b50-b827-03e7b1793107",
          "thumb": "http://placekitten.com/100/100",
          "title": "incididunt velit",
          "desc": "Officia tempor aliquip minim ut non id labore ipsum pariatur laborum commodo eu. Aliqua laborum esse est ipsum esse.",
          "url": "http://episodeurl"
        },
        {
          "guid": "6f6a86c6-76f2-48c1-82a5-67499442c392",
          "thumb": "http://placekitten.com/100/100",
          "title": "velit magna",
          "desc": "Id quis nisi deserunt ea velit velit est id consectetur. Fugiat laboris aliqua aute tempor eiusmod dolore occaecat laboris eiusmod aute eiusmod ea.",
          "url": "http://episodeurl"
        },
        {
          "guid": "cf45da42-b199-4d3e-aa10-377592ae7bc0",
          "thumb": "http://placekitten.com/100/100",
          "title": "voluptate reprehenderit",
          "desc": "Sunt cillum commodo ea laborum commodo velit ullamco ipsum ad fugiat amet. Minim ex qui eu nisi amet esse consectetur labore irure ea nisi.",
          "url": "http://episodeurl"
        },
        {
          "guid": "f90bee13-d641-4825-a1dc-82b1fb6ed753",
          "thumb": "http://placekitten.com/100/100",
          "title": "deserunt qui",
          "desc": "Cupidatat non eu qui consectetur aliqua elit adipisicing aliquip. Et dolor proident mollit enim laboris.",
          "url": "http://episodeurl"
        },
        {
          "guid": "fcfced03-1f63-4260-b0b9-01bb7ad78cec",
          "thumb": "http://placekitten.com/100/100",
          "title": "Lorem Lorem",
          "desc": "Duis labore proident id esse aute ea irure cillum ad sint pariatur. Quis minim ex cillum labore ex laboris nostrud cupidatat dolor exercitation quis exercitation incididunt.",
          "url": "http://episodeurl"
        },
        {
          "guid": "c83a7f3c-3729-4c7b-b637-953e1b89c4fa",
          "thumb": "http://placekitten.com/100/100",
          "title": "pariatur cupidatat",
          "desc": "Id excepteur ex cillum laborum laborum duis reprehenderit minim et. Ullamco anim velit quis labore ipsum aute id consequat velit.",
          "url": "http://episodeurl"
        },
        {
          "guid": "11695c48-809d-4b30-bde0-31c05cd96d8e",
          "thumb": "http://placekitten.com/100/100",
          "title": "Lorem ullamco",
          "desc": "Ullamco ea tempor labore officia quis aliqua. Aliquip velit aute deserunt consectetur amet qui anim aliquip aute minim duis.",
          "url": "http://episodeurl"
        },
        {
          "guid": "2a4f2151-3293-463b-a0b1-eda69043be9b",
          "thumb": "http://placekitten.com/100/100",
          "title": "ut Lorem",
          "desc": "Sit anim ut non laborum culpa non nostrud ad. Aute nulla elit reprehenderit ea anim dolore aliquip.",
          "url": "http://episodeurl"
        },
        {
          "guid": "915dfab3-5b84-4d42-92d4-50438fc9ef5d",
          "thumb": "http://placekitten.com/100/100",
          "title": "ut in",
          "desc": "Voluptate cupidatat quis est dolor ea est culpa consequat est. Sint amet incididunt exercitation anim consectetur sunt velit commodo.",
          "url": "http://episodeurl"
        },
        {
          "guid": "f05cd739-16ca-4d22-b70b-b392f0990ae4",
          "thumb": "http://placekitten.com/100/100",
          "title": "magna aliquip",
          "desc": "Culpa esse non amet do sit cupidatat cillum cillum cupidatat cillum excepteur do tempor voluptate. Magna officia eu est quis sit cupidatat mollit elit incididunt consectetur voluptate exercitation.",
          "url": "http://episodeurl"
        },
        {
          "guid": "a7ddfa04-3cdf-4ccb-add0-2da65ccaab03",
          "thumb": "http://placekitten.com/100/100",
          "title": "amet exercitation",
          "desc": "Nulla anim deserunt nisi sit enim ut pariatur quis sint nisi nostrud cillum. Est nulla dolor deserunt nisi proident enim.",
          "url": "http://episodeurl"
        }
      ]
    }
  ];