interface NFT {
    symbol: string;
    name: string;
    description: string;
    image: string;
    floorPrice: number;
    volumeAll: number;
    hasCNFTs: boolean;
  }


const NFTs: NFT[] = [
    {
        symbol: "famous_fox_federation",
        name: "Famous Fox Federation",
        description: "1",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/famous_fox_federation_pfp_1679672949828.gif",
        floorPrice: 13860000000,
        volumeAll: 1359185.8236587578,
        hasCNFTs: false
    },
    {
        symbol: "parcl",
        name: "Homeowners Association (Parcl)",
        description: "2",
        image: "/api/image-proxy?url=https://bafybeiaaku476rhseb7pz7zcesevpz7ljm3gyvmc52yqpo2zpchsqlkr7i.ipfs.nftstorage.link/4367.png?ext=png",
        floorPrice: 21300000000,
        volumeAll: 291041.8032514279,
        hasCNFTs: false
    },
    {
        symbol: "parcl",
        name: "Homeowners Association (Parcl)",
        description: "2",
        image: "/api/image-proxy?url=https://bafybeiaaku476rhseb7pz7zcesevpz7ljm3gyvmc52yqpo2zpchsqlkr7i.ipfs.nftstorage.link/4367.png?ext=png",
        floorPrice: 21300000000,
        volumeAll: 291041.8032514279,
        hasCNFTs: false
    },
    {
        symbol: "open_solmap",
        name: "Open Solmap",
        description: "3",
        image: "/api/image-proxy?url=https://bafkreibc3eszdgcdd7hltsdheqxyjkpzxipu7e235tjf22rjnl3ncl5m3m.ipfs.nftstorage.link/",
        floorPrice: 102520273.55552585,
        volumeAll: 635971.8495866272,
        hasCNFTs: false
    },
    {
        symbol: "froganas",
        name: "Frogana",
        description: "4",
        image: "/api/image-proxy?url=https://nftstorage.link/ipfs/bafkreicloy7xn3h2gxr3rj5aditynulgi2lsebnufchddp7agzjeu3mmiu",
        floorPrice: 2327000000,
        volumeAll: 746378.16184693,
        hasCNFTs: false
    },
    {
        symbol: "tensorians",
        name: "TENSORIANS",
        description: "5",
        image: "/api/image-proxy?url=https://bafkreictk4t6dafy4p7bgpbvgrop76aajnlzllpue6wr4ynkyj3xxsejte.ipfs.nftstorage.link/",
        floorPrice: 59000000000,
        volumeAll: 838333.857932155,
        hasCNFTs: true
    },
    {
        symbol: "epoch",
        name: "epoch.001",
        description: "6",
        image: "/api/image-proxy?url=https://nftstorage.link/ipfs/bafybeiapyn3hksvo6lgkmgsgmy6mt2ncoh4fj3u3t7p4l2pbantsblfgrm/2486.png",
        floorPrice: 1350000000,
        volumeAll: 3916.339476784005,
        hasCNFTs: false
    },
    {
        symbol: "transdimensional_fox_federation",
        name: "Transdimensional Fox Federation",
        description: "7",
        image: "/api/image-proxy?url=https://bafkreiatsxp4ygj4muopasqisvjpvuhuvdk734zldbhvkx74hfnhik6mja.ipfs.nftstorage.link",
        floorPrice: 3870000000,
        volumeAll: 1255668.108415996,
        hasCNFTs: false
    },
    {
        symbol: "mad_lads",
        name: "Mad Lads",
        description: "8",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/mad_lads_pfp_1682211343777.png",
        floorPrice: 179990000000,
        volumeAll: 2812516.705465806,
        hasCNFTs: false
    },
    {
        symbol: "magicticket",
        name: "Magic Ticket",
        description: "9",
        image: "/api/image-proxy?url=https://ipfs.io/ipfs/bafybeibimlad5fzgsvo2hzvtb6h2ayqi6kncr665mddylf6crvjpc2l7s4",
        floorPrice: 2467000000,
        volumeAll: 314821.67829306494,
        hasCNFTs: false
    },
    {
        symbol: "amberkey",
        name: "Amber Key",
        description: "10",
        image: "/api/image-proxy?url=https://ap-assets.pinit.io/HHMfeDVBYGW4AfNN4x7W2v18Jy6dNfEGce92eeyzEha4/b06cd15e-1ea1-416f-a89e-696981661f0c/0",
        floorPrice: 15000000000,
        volumeAll: 1490.77239416,
        hasCNFTs: false
    },
    {
        symbol: "okay_bears",
        name: "Okay Bears",
        description: "11",
        image: "/api/image-proxy?url=https://bafkreidgfsdjx4nt4vctch73hcchb3pkiwic2onfw5yr4756adchogk5de.ipfs.nftstorage.link/",
        floorPrice: 8000000000,
        volumeAll: 3422640.187313776,
        hasCNFTs: false
    },
    {
        symbol: "ted_",
        name: "TED",
        description: "12",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/ted__pfp_1686851872504.png",
        floorPrice: 869900000,
        volumeAll: 30329.68285807601,
        hasCNFTs: false
    },
    {
        symbol: "jcats",
        name: "Cats on Jupiter",
        description: "13",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/jcats_pfp_1706170893180.png",
        floorPrice: 259900000,
        volumeAll: 19103.030016221997,
        hasCNFTs: false
    },
    {
        symbol: "solforge_saga",
        name: "SolForge Saga",
        description: "14",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/solforge_saga_pfp_1709224027714.png",
        floorPrice: 1120000000,
        volumeAll: 917.71220636,
        hasCNFTs: false
    },
    {
        symbol: "lifinity_flares",
        name: "Lifinity Flares",
        description: "15",
        image: "/api/image-proxy?url=https://bafkreiec2rotips5txqx3u5wto4bqyumckv25kkspgmvl27ms3ilzam2he.ipfs.nftstorage.link/",
        floorPrice: 8455000000,
        volumeAll: 160196.43526501596,
        hasCNFTs: false
    },
    {
        symbol: "claynosaurz",
        name: "Claynosaurz",
        description: "16",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/claynosaurz_pfp_1679930706147.jpeg",
        floorPrice: 28916000000,
        volumeAll: 2201494.938210239,
        hasCNFTs: false
    },
    {
        symbol: "zetacards_s2",
        name: "ZETA CARDS - S2",
        description: "17",
        image: "/api/image-proxy?url=https://bafkreihtg7spdwkxdvm443jnzigsawiwnjadgncotjetketqgezfkag3r4.ipfs.nftstorage.link/",
        floorPrice: 506999300,
        volumeAll: 30871.503065686047,
        hasCNFTs: true
    },
    {
        symbol: "sharx",
        name: "sharx by sharky.fi",
        description: "18",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/sharx_pfp_1664561059322.png",
        floorPrice: 6618000000,
        volumeAll: 759481.0319822059,
        hasCNFTs: false
    },
    {
        symbol: "duckpunkzuniverse",
        name: "Quekz",
        description: "19",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/duckpunkzuniverse_pfp_1650542071140.gif",
        floorPrice: 23150000000,
        volumeAll: 186758.87948758306,
        hasCNFTs: false
    },
    {
        symbol: "solana_monkey_business",
        name: "SMB Gen2",
        description: "20",
        image: "/api/image-proxy?url=https://i.imgur.com/bMH6qNc.png",
        floorPrice: 54979000000,
        volumeAll: 1193876.5471056162,
        hasCNFTs: false
    },
    {
        symbol: "stylish_studs",
        name: "Photo Finish PFP Collection",
        description: "21",
        image: "/api/image-proxy?url=https://www.arweave.net/7dntcPrPZeee702M5FBVCAOdnKVS5pGGQJVUsHKGCWI?ext=png",
        floorPrice: 23156000000,
        volumeAll: 230769.46864246903,
        hasCNFTs: false
    },
    {
        symbol: "starpower_pioneer_card",
        name: "Pioneer Pass",
        description: "22",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/starpower_pioneer_card_pfp_1708710059147.png",
        floorPrice: 1191000000,
        volumeAll: 2631.7263163839993,
        hasCNFTs: false
    },
    {
        symbol: "portals",
        name: "Portals",
        description: "23",
        image: "/api/image-proxy?url=https://bafkreifyjr527nl5mwttblf2os6um7lze3nmqki5iqoa4eow7cifrhl3ge.ipfs.nftstorage.link/",
        floorPrice: 13500000000,
        volumeAll: 387301.18682623294,
        hasCNFTs: false
    },
    {
        symbol: "goons3d",
        name: "Goons: 3D",
        description: "24",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/goons3d_pfp_1709281145901.jpeg",
        floorPrice: 790000000,
        volumeAll: 7305.650533318998,
        hasCNFTs: false
    },
    {
        symbol: "cryptoundeads",
        name: "CryptoUndeads",
        description: "25",
        image: "/api/image-proxy?url=https://nftstorage.link/ipfs/bafkreida62zfbzsucw5tu3gqzyb6lzjhxa64xkxmwimbiigtvqlmypuvta",
        floorPrice: 3366390000,
        volumeAll: 293751.4788502019,
        hasCNFTs: false
    },
    {
        symbol: "bozo_collective",
        name: "Bozo Collective",
        description: "26",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/bozo_collective_pfp_1696263152018.png",
        floorPrice: 1818210000,
        volumeAll: 59654.335666949926,
        hasCNFTs: false
    },
    {
        symbol: "zmb_0735",
        name: "Zero Monke Biz",
        description: "27",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/zmb_0735_pfp_1675737312377.jpeg",
        floorPrice: 13945000000,
        volumeAll: 232320.180776329,
        hasCNFTs: false
    },
    {
        symbol: "flashtrade",
        name: "Flash Trade ",
        description: "28",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/flashtrade_pfp_1703005567663.png",
        floorPrice: 7450000000,
        volumeAll: 109740.51386052497,
        hasCNFTs: false
    },
    {
        symbol: "animated_richiest",
        name: "Animation Richiest",
        description: "29",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/animated_richiest_pfp_1650385257167.gif",
        floorPrice: 3500000000,
        volumeAll: 3642.4221603199994,
        hasCNFTs: false
    },
    {
        symbol: "deeznode",
        name: "DeezNode",
        description: "30",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/deeznode_pfp_1674530718861.jpeg",
        floorPrice: 300000000000,
        volumeAll: 20513.72909316,
        hasCNFTs: false
    },
    {
        symbol: "gaimin_gladiators",
        name: "Gaimin Gladiators",
        description: "31",
        image: "/api/image-proxy?url=https://bafybeiesw5b4wqkhi73wk4i4tetwanixyazqsbogrvvpneqyaqgygzyowy.ipfs.nftstorage.link/",
        floorPrice: 3703700000,
        volumeAll: 38555.624574242,
        hasCNFTs: false
    },
    {
        symbol: "marms",
        name: "MARMS",
        description: "32",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/marms_pfp_1707952077505.png",
        floorPrice: 1313536871,
        volumeAll: 31513.08540833499,
        hasCNFTs: false
    },
    {
        symbol: "pikenians",
        name: "Pikenians",
        description: "33",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/pikenians_pfp_1706815483352.jpeg",
        floorPrice: 7800000000,
        volumeAll: 22489.214035101002,
        hasCNFTs: false
    },
    {
        symbol: "degenerate_ape_academy",
        name: "Degenerate Ape Academy",
        description: "34",
        image: "/api/image-proxy?url=https://bafkreie44hlb5xve225n6p2siebaevxiwha37aefyvs2ul2kx2akalnree.ipfs.nftstorage.link/",
        floorPrice: 12000000000,
        volumeAll: 1121807.441896458,
        hasCNFTs: false
    },
    {
        symbol: "smb_gen3",
        name: "SMB Gen3",
        description: "35",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/smb_gen3_pfp_1688353503184.png",
        floorPrice: 4775000000,
        volumeAll: 260693.05653599693,
        hasCNFTs: false
    },
    {
        symbol: "sagamonkes",
        name: "Saga Monkes",
        description: "36",
        image: "/api/image-proxy?url=https://nftstorage.link/ipfs/bafybeicp5tw4w3i55ffkjyxjnlmg6rlbsi4n3ly3mcviipqlgtg7art4lq",
        floorPrice: 2850000000,
        volumeAll: 118854.59580240892,
        hasCNFTs: true
    },
    {
        symbol: "kanpaipandas",
        name: "Kanpai Pandas",
        description: "37",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/kanpaipandas_pfp_1691632699556.gif",
        floorPrice: 81700000000,
        volumeAll: 57563.035777558005,
        hasCNFTs: false
    },
    {
        symbol: "index_one",
        name: "Index ONE",
        description: "38",
        image: "/api/image-proxy?url=https://arweave.net/kqeYcmk7M3GpvplsgpoOK8_NrybBV95-t6JmyXqRH4c?ext=png",
        floorPrice: 2420000000,
        volumeAll: 98340.61149414191,
        hasCNFTs: false
    },
    {
        symbol: "nyan_heroes",
        name: "Nyan Heroes",
        description: "39",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/nyan_heroes_pfp_1690807406006.png",
        floorPrice: 3050000000,
        volumeAll: 80772.72738019803,
        hasCNFTs: false
    },
    {
        symbol: "solcasino",
        name: "Solcasino.io",
        description: "40",
        image: "/api/image-proxy?url=https://bafybeidd6mu775yyagyr4vgo6y2ayb5dc7vylv5arnd3mupbscek5zveya.ipfs.nftstorage.link/",
        floorPrice: 15909990000,
        volumeAll: 495960.931391204,
        hasCNFTs: false
    },
    {
        symbol: "chadswtf",
        name: "CHADS",
        description: "41",
        image: "/api/image-proxy?url=https://shdw-drive.genesysgo.net/DULc8DgYywybLKKosZXbT5HBYHZiUbkkwNYy7QbirUc2/chads.png",
        floorPrice: 4900000000,
        volumeAll: 118694.74234438402,
        hasCNFTs: false
    },
    {
        symbol: "elixir_ovols",
        name: "Ovols",
        description: "42",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/elixir_ovols_pfp_1700592508163.png",
        floorPrice: 3564000000,
        volumeAll: 842172.3586552951,
        hasCNFTs: false
    },
    {
        symbol: "pooks",
        name: "pooks",
        description: "43",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/pooks_pfp_1706852303902.png",
        floorPrice: 990000000,
        volumeAll: 5415.6938897689915,
        hasCNFTs: false
    },
    {
        symbol: "bodoggos",
        name: "BoDoggos",
        description: "44",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/bodoggos_pfp_1687370020180.jpeg",
        floorPrice: 6290480000,
        volumeAll: 239029.39970954004,
        hasCNFTs: false
    },
    {
        symbol: "the_inner_circle",
        name: "The Inner Circle",
        description: "45",
        image: "/api/image-proxy?url=https://arweave.net/dnRo_4le3E3KLY-e4EW5TQaqhqA9RwT1RO6Wyf1qtw0?ext=gif",
        floorPrice: 4300000000,
        volumeAll: 174.319651244,
        hasCNFTs: false
    },
    {
        symbol: "theheist",
        name: "The Heist",
        description: "46",
        image: "/api/image-proxy?url=https://bafybeigch4m7rbec2l255powwbjmacnyj5n5o54qcboiwfgs2nnw6thimq.ipfs.nftstorage.link/",
        floorPrice: 2882930000,
        volumeAll: 769008.2432547791,
        hasCNFTs: false
    },
    {
        symbol: "udder_chaos",
        name: "Udder Chaos",
        description: "47",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/udder_chaos_pfp_1673380028324.png",
        floorPrice: 963285210,
        volumeAll: 84136.1726345029,
        hasCNFTs: false
    },
    {
        symbol: "myros",
        name: "Myros",
        description: "48",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/myros_pfp_1709003196883.jpeg",
        floorPrice: 146380000,
        volumeAll: 1036.5811600860013,
        hasCNFTs: false
    },
    {
        symbol: "taiyo_robotics",
        name: "Taiyo Robotics",
        description: "49",
        image: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/collection_images/taiyo_robotics.jpg",
        floorPrice: 19899999999,
        volumeAll: 427414.96003451303,
        hasCNFTs: false
    },
    {
        symbol: "Mad Lads #6867",
        name: "Fock It.",
        description: "50",
        image: "/api/image-proxy?url=https://madlads.s3.us-west-2.amazonaws.com/images/6867.png",
        floorPrice: 146380000,
        volumeAll: 1036.5811600860013,
        hasCNFTs: false
      }
]

export default NFTs