export const PRICING_DATA = [
    ["Vehicle type", "S (1 row)", "M (2 rows)", "L (3+ rows)"],
    ["Duration", "2-4 hrs", "4-6 hrs", "5-8 hrs"],
    ["Price", "$50-$100", "$100-$150", "$125-$200"]
]

export const PACKAGES_DATA = {
    WHITE: {
        desc: "Interior Detail",
        features: [
            "Thorough vacuum",
            "Plastics, vinyl, & leather cleaning",
            "Steam cleaning",
            "Interior glass cleaning",
            "Door jamb cleaning"
        ],
        prices: {
            "S": "$125",
            "M": "$150",
            "L": "$175"
        }
    },
    CRIMSON: {
        desc: "Exterior Detail",
        features: [
            "3 bucket hand wash",
            "Wheel & tire cleaning",
            "Hand dry",
            "No-sling tire dressing",
            "Paint sealant (lasts up to 60 days)"
        ],
        price: "$60"
    },
    BLACK: {
        desc: "Full Detail",
        features: [
            "All White features",
            "All Crimson features",
            "Discounted price"
        ],
        prices: {
            "S": "$175",
            "M": "$200",
            "L": "$225"
        }
    }
}

export const ADDONS_DATA = {
    "Seat shampoo": {
        type: "Interior",
        price: 30,
        desc: "Shampoo and hot water extraction for fabric seats."
    },
    "Carpet shampoo": {
        type: "Interior",
        price: 30,
        desc: "Shampoo and hot water extraction for all carpet."
    },
    "Leather conditioning": {
        type: "Interior",
        price: 15,
        desc: "Revitalizes and preserves leather surfaces."
    },
    "Odor elimination": {
        type: "Interior",
        price: 30,
        desc: "Ozone odor elimination for smelly interiors."
    },
    "Decontamination": {
        type: "Exterior",
        price: 20,
        desc: "Iron removal & clay bar treatment for heavily soiled vehicles."
    },
    "Engine bay cleaning": {
        type: "Exterior",
        price: 30,
        desc: "Basic cleaning of components under the hood."
    },
}