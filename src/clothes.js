import dbConnect from "./dbConnect.js";

export async function updateClothes(req, res) {
    const db = dbConnect();
    const clothesCollection = db.collection("clothes");

    const { id } = req.params;

    const result = await clothesCollection.doc(id).update(req.body)
        .catch(err => {
            res.status(500).send({ success: false, message: err });
            return;
        })

    res.status(201).send(result);
}

export async function findOneArticleOfClothing(req, res) {
    const db = dbConnect();
    const clothesCollection = db.collection('clothes');

    const { search } = req.params;

    const result = await clothesCollection.doc(search).get()
        .catch(err => {
            res.status(500).send({ success: false, message: err });
            return;
        })
    
    res.status(201).send({ success: true, message: result.data() });
}