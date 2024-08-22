export interface DAO {
    name: string,
    aaddress: string,
    asset: string | undefined,
    fractions: number,
    share: number,
    count: number,
    creator: string
}

const DAOs: DAO[] = [
    {
        name: "Arstistic Aliance1",
        aaddress: "74KATEfAdRhuqzv4UpQhi66mpUN3z6zySfLtp4nQsT5r",
        asset: "/api/image-proxy?url=https://bafkreiatsxp4ygj4muopasqisvjpvuhuvdk734zldbhvkx74hfnhik6mja.ipfs.nftstorage.link",
        fractions: 4,
        share: 60,
        count: 1,
        creator: ""
    },
    {
        name: "Arstistic Aliance2",
        aaddress: "74KATEfAdRhuqzv4UpQhi66mpUN3z6zySfLtp4nQsT5r",
        asset: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/ted__pfp_1686851872504.png",
        fractions: 4,
        share: 60,
        count: 2,
        creator: ""
    },
    {
        name: "Arstistic Aliance3",
        aaddress: "74KATEfAdRhuqzv4UpQhi66mpUN3z6zySfLtp4nQsT5r",
        asset: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/claynosaurz_pfp_1679930706147.jpeg",
        fractions: 4,
        share: 60,
        count: 4,
        creator: ""
    },
    {
        name: "Arstistic Aliance4",
        aaddress: "74KATEfAdRhuqzv4UpQhi66mpUN3z6zySfLtp4nQsT5r",
        asset: "/api/image-proxy?url=https://i.imgur.com/bMH6qNc.png",
        fractions: 4,
        share: 60,
        count: 3,
        creator: ""
    }

]

export default DAOs;