export interface DAO {
    DAOname: string,
    address: string,
    asset: string | undefined,
    fractions: number,
    share: number,
    count: number,
    creator: string,
    members: Member[]
}

export interface Member {
    name: string,
    address: string,
}

const DAOs: DAO[] = [
    {
        DAOname: "Arstistic Aliance1",
        address: "74KATEfAdRhuqzv4UpQhi66mpUN3z6zySfLtp4nQsT5r",
        asset: "/api/image-proxy?url=https://bafkreiatsxp4ygj4muopasqisvjpvuhuvdk734zldbhvkx74hfnhik6mja.ipfs.nftstorage.link",
        fractions: 4,
        share: 60,
        count: 1,
        creator: "admin1",
        members: [
            {
                name: "admin1",
                address: "0xCreatorAddress"
            },
        ]
    },
    {
        DAOname: "Arstistic Aliance2",
        address: "74KATEfAdRhuqzv4UpQhi66mpUN3z6zySfLtp4nQsT5r",
        asset: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/ted__pfp_1686851872504.png",
        fractions: 4,
        share: 60,
        count: 2,
        creator: "admin2",
        members: [
            {
                name: "admin2",
                address: "0xCreatorAddress"
            },
            {
                name: "admin2",
                address: "0xCreatorAddress"
            },
        ]
    },
    {
        DAOname: "Arstistic Aliance3",
        address: "74KATEfAdRhuqzv4UpQhi66mpUN3z6zySfLtp4nQsT5r",
        asset: "/api/image-proxy?url=https://creator-hub-prod.s3.us-east-2.amazonaws.com/claynosaurz_pfp_1679930706147.jpeg",
        fractions: 4,
        share: 60,
        count: 4,
        creator: "admin3",
        members: [
            {
                name: "admin3",
                address: "0xCreatorAddress"
            },
            {
                name: "admin3",
                address: "0xCreatorAddress"
            },
            {
                name: "admin3",
                address: "0xCreatorAddress"
            },
            {
                name: "admin3",
                address: "0xCreatorAddress"
            }
        ]
    },
    {
        DAOname: "Arstistic Aliance4",
        address: "74KATEfAdRhuqzv4UpQhi66mpUN3z6zySfLtp4nQsT5r",
        asset: "/api/image-proxy?url=https://i.imgur.com/bMH6qNc.png",
        fractions: 4,
        share: 60,
        count: 3,
        creator: "admin4",
        members: [
            {
                name: "admin4",
                address: "0xCreatorAddress"
            },
            {
                name: "admin4",
                address: "0xCreatorAddress"
            },
            {
                name: "admin4",
                address: "0xCreatorAddress"
            },
            
        ]
    }

]

export default DAOs;