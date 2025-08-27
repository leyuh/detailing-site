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
            "Basic door jamb cleaning"
        ],
        prices: {
            "S": "$120",
            "M": "$160",
            "L": "$200"
        },
        optional: "Shampooing, leather conditioning, odor removal"
    },
    CRIMSON: {
        desc: "Exterior Detail",
        features: [
            "2 bucket hand wash",
            "Wheel & tire cleaning",
            "Minor bug & grime removal",
            "Hand dry",
            "No-sling tire dressing",
            "3 month paint sealant"
        ],
        prices: {
            "Sedan": "$60",
            "SUV, Truck": "$80"
        },
        optional: "Paint decontamination, engine bay cleaning"
    },
    BLACK: {
        desc: "Full Detail",
        features: [
            "All White features",
            "All Crimson features",
            "Thorough door jamb cleaning",
            "Discounted price"
        ],
        prices: {
            "S": "$170",
            "M": "$220",
            "L": "$260"
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
        price: 40,
        desc: "Iron removal, tree & road fallout removal, & clay bar treatment for heavily soiled vehicles."
    },
    "Engine bay cleaning": {
        type: "Exterior",
        price: 25,
        desc: "Basic cleaning of components under the hood."
    },
}